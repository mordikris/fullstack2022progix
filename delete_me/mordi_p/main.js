import "./component/gameXO/style.css";
import './style.css'
import { setupNavbar } from './component/Navbar/navbar';
import { homePageBeforeLogin } from './component/HomeBefor/homePageBeforeLogin';
import { login_page } from './component/login/loginPage';
import { footer_for_all } from './component/Footer/footer';
//* for ttt game *//
import {XOfun} from './component/gameXO/funXO';
import { tictactoe } from './component/gameXO/XO';
/* for contact */
import { contact_page } from "./component/contact/contact";

import data_base from './data_base/database.json';

let login = false;


/* impotr the navigation bar
 for all the page with 'header' id */
 
$('#header').text(() => {
  setupNavbar()
});



/* impotr the footer for all
 the page with 'footer' id */

$('#footer').html(footer_for_all.outerHTML)



/* toggle the class 'darkmood' with
   buttone on navbar with 'darkmode' id */

$('#darkmode').click(() => {
  $('body').toggleClass('darkmood')
});



/*  it say that when you click on 'MHome' click,
   on the navbar you will get the home page before login page */

$('#Home').click(()=>{
  $('#main').text(homePageBeforeLogin())
})



/* here is thh function,
   that gave as the home page before the user login,
   and if he login allredy so that u will see at 'else' */

if (login == false) {
  $('#main').text(() => {
    homePageBeforeLogin()
  })
}



/* it say that when you click on 'login',
   on the navbar you will get the login page */

$('#login').click(() => {
  $('#main').html(login_page.outerHTML)
})




/*it say that when you click on 'x-o' click,
   on the navbar you will get the tictactoe page */
$('#X_O').click(()=>{
  $('#main').html(tictactoe.outerHTML);
  XOfun()
})


/*it say that when you click on 'contact us' click,
   on the footer you will get the contact page  */
   $('#contact').click(()=>{
    $('#main').html(contact_page.outerHTML)
   })