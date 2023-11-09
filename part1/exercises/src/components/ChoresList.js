import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {

   return (
         <div>
            <p className= {classes.choresHeading}>Today's Chores</p>
            
            <ol>
               <li className={classes.choresText}>Winter Shopping</li>
               <li className={classes.choresText}>Lawn Mowing</li>
               <li className={classes.choresText}>Meal Prep</li>   
            </ol>
         </div>
   )
      }
   
   
   