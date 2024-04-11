
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from '../../styles/Header.module.css';

import { ROUTES } from '../../utils/routes';

// import LOGO from '../../images/logo.svg';
import Avatar from '../../images/avatar_new.png';

import { toggleForm } from "../../features/user/userSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";
const SearchResult = () => {
    const [searchValue, setSearchValue] = useState();
    const { data, isLoading } = useGetProductsQuery({ title: searchValue });
    const handleSearch = ({ target: { value } }) => {
        setSearchValue(value);
      };
  return (
    <div>
       {searchValue && (
          <>
            <div className={styles.box}>
              {isLoading
                ? "Loading"
                : !data.length
                ? "No results"
                : data.map(({ title, images, id }) => {
                    return (
                      <Link
                        key={id}
                        onClick={() => setSearchValue("")}
                        className={styles.item}
                        to={`/products/${id}`}
                      >
                        <div
                          className={styles.image}
                          style={{ backgroundImage: `url(${images[0]})` }}
                        />
                        <div className={styles.title}>{title}</div>
                      </Link>
                    );
                  })}
            </div>
            <button type='submit'><Link to={ROUTES.SEARCH}>search</Link></button> 
            </>
          )}
    </div>
  )
}

export default SearchResult