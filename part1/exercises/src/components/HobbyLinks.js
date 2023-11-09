export default function HobbyLinks(hobbyLinks) {
    hobbyLinks = ["Cooking", "DIY","Garderning"];
    return(
       <div>
          <h1>My Hobbies</h1>
          <a href = {hobbyLinks[0]}>https://www.vahrehvah.com <br></br></a>
          <a href = {hobbyLinks[1]}>https://www.hgtv.com<br></br></a>
          <a href = {hobbyLinks[2]}>https://joegardener.com/blog</a>
       </div>
    );
 }