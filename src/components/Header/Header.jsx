import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from '../../styles/Header.module.css';

import { ROUTES } from '../../utils/routes';

// import LOGO from '../../images/logo.svg';
import Avatar from '../../images/avatar_new.png';

import { toggleForm } from "../../features/user/userSlice";
import { useGetProductsQuery } from "../../features/api/apiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState();
  const { currentUser, cart } = useSelector(({ user }) => user);

  const [values, setValues] = useState({ name: "Guest", avatar: Avatar });

   const { data, isLoading } = useGetProductsQuery({ title: searchValue });
   
  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) dispatch(toggleForm(true));
    else navigate(ROUTES.PROFILE);
  };
  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value);
  };
  // const cartLength={cart.length}

  return (
    <div className={styles.header}>
      {/* лого */}
      <div className={styles.logo} >
        <Link to={ROUTES.HOME}>
          {/* <img src={LOGO} alt="Stuff" /> */}
         <span style={{fontWeight: '700', color: 'rgb(13,186,56)', fontSize: '17px'}}>SHOP</span>
        </Link>
      </div>
  {/* Пользователь */}
      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div className={styles.avatar} style={{backgroundImage:`url(${values.avatar})`}}/>
          <div className={styles.username}>{values.name}</div>
        </div>
 {/* Поиск */}
      <form className={styles.form}>
        <div className={styles.icon}>
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}/>
          </svg>
        </div>
        <div className={styles.input}>
          <input 
          type="search" 
          name="search" 
          placeholder="Search for anything..."
          autoComplete='off'
          onChange={handleSearch}
          value={searchValue}
          />
           
        </div>
       
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
            {/* <button type='submit'><Link to={ROUTES.SEARCH}>search</Link></button>  */}
            </>
          )}
        
      </form>
 {/* Избранное Покупки */}
      <div className={styles.account}>
        <Link to={ROUTES.HOME} className={styles.favourites}>
          <svg className={styles['icon-fav']}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`}/>
          </svg>
        </Link>
        <Link to={ROUTES.CART} className={styles.cart}>
          <svg className={styles['icon-cart']}>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}/>
          </svg>
          {!!cart.length && (<span className={styles.count}>{cart.length}</span>)}
        </Link>
      </div>

      </div>
    </div>
  )
}

export default Header
