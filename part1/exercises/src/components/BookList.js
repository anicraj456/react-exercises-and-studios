import React from 'react';
import classes from './BookList.module.css';
export default function BookList() {
   let pageTitle = "Book Must Read In 2023";
   let book1 = "https://m.media-amazon.com/images/I/81KNNeRJdFL._AC_UY436_FMwebp_QL65_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/91RfqnfA5hL._AC_UY436_FMwebp_QL65_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/81zi7dJjl8L._AC_UY436_FMwebp_QL65_.jpg";

   return (
      <div className={classes.border}>
         <h3 className= {classes.title}>{pageTitle}</h3>
         <img className={classes.img1} src={book1} alt="Falling Stars By Fern Michaels " />
         <img className={classes.img2}src={book2} alt="No Strangers Here: A Riveting Irish Thriller By Carlene O’Connor " />
         <img className={classes.img3}src={book3} alt="Santa and Company (Santa's Crew) By Fern Michaels" />
      </div>      
   );
}