import React from 'react'
import { Link } from 'react-router-dom';

import styles from '../../styles/Footer.module.css';
import { ROUTES } from '../../utils/routes';

// import LOGO from '../../images/logo.svg';

const Footer = () => {
  return (
    <section className={styles.footer}>
            {/* лого */}
        <div className={styles.logo} >
           <Link to={ROUTES.HOME}>
           {/* <img src={LOGO} alt="Stuff" /> */}
           <span style={{fontWeight: '700', color: 'rgb(13,186,56)', fontSize: '17px'}}>SHOP</span>
           </Link>
        </div>
       {/* копирайт */}
      <div className={styles.rights}>
        Developed by{""}
        <a 
        href="/" 
        target="_blank" 
        rel='noreferrer'> Matskevich Olga
        </a> 
      </div>
       {/* соц сети */}
      <div className={styles.socials}>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel='noreferrer'>
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
          </svg>
        </a> 
        <a 
        href="https://facebook.com" 
        target="_blank" 
        rel='noreferrer'>
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
          </svg>
        </a> 
        <a 
        href="https://youtube.com" 
        target="_blank" 
        rel='noreferrer'>
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}/>
          </svg>
        </a> 
      </div>
    </section>
  )
}

export default Footer