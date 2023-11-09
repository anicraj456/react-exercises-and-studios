export default function BookList() {
   let pageTitle = "Book Must Read In 2023";
   let book1 = "https://m.media-amazon.com/images/I/81KNNeRJdFL._SY522_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/91RfqnfA5hL._SY522_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/81zi7dJjl8L._SY522_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Falling Stars By Fern Michaels " />
         <img src={book2} alt="No Strangers Here: A Riveting Irish Thriller By Carlene O’Connor " />
         <img src={book3} alt="Santa and Company (Santa's Crew) By Fern Michaels" />
      </div>      
   );
}