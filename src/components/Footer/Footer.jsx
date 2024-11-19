
import React from "react";
import './Footer.css';

export default function Footer() {
    return (
        <div className="footerDiv">
            <div className="logoDivFooter">
                <p className="logoFooter">T&#9675;D&#9675;</p>
            </div>
            <div className="contentDivFooter">
                <div className="aboutUsDivFooter">
                    <p className="aboutUs">
                        A todo app, create a list of your todo's, easy to create todo
                        list and update it. The app also allows you to delete the Todo.
                        <br/>&copy; All rights reserved {new Date().getFullYear()}
                    </p>
                </div>
                <div className="menuDivFooter">
                    <div className="menuFooter">
                        <div className="menuHeadingFooterDiv">
                            <h3 className="menuHeadingFooter">
                                Menu
                            </h3>
                        </div>
                        <ul className="menuListFooter">
                            <li className="menuItemsFooter"><i class="fa-solid fa-house"></i>Home</li>
                            <li className="menuItemsFooter"><i class="fa-regular fa-clipboard"></i>Todo</li>
                            <li className="menuItemsFooter"><i class="fa-solid fa-clipboard"></i>Create</li>
                            <li className="menuItemsFooter"><i class="fa-solid fa-arrow-right-from-bracket"></i>Logout</li>
                        </ul>
                    </div>
                    <div className="menuFooter">
                        <div className="menuHeadingFooterDiv">
                            <h3 className="menuHeadingFooter">
                                Contact Us
                            </h3>
                        </div>
                        <ul className="menuListFooter">
                            <li className="menuItemsFooter"><i class="fa-solid fa-phone"></i>0333 XXXXXXX</li>
                            <li className="menuItemsFooter"><i class="fa-solid fa-envelope"></i>sample@sample.com</li>
                            <li className="menuItemsFooter"><i class="fa-solid fa-location-dot"></i>22st FB Area, Karachi</li>
                            <li className="menuItemsFooter"><i class="fa-solid fa-message"></i>Fax</li>
                        </ul>
                    </div>
                    <div className="menuFooter">
                        <div className="menuHeadingFooterDiv">
                            <h3 className="menuHeadingFooter">
                                Social Links
                            </h3>
                        </div>
                        <ul className="menuListFooter">
                            <li className="menuItemsFooter"><i class="fa-brands fa-linkedin-in"></i>LinkedIn</li>
                            <li className="menuItemsFooter"><i class="fa-brands fa-facebook-f"></i>Facebook</li>
                            <li className="menuItemsFooter"><i class="fa-brands fa-twitter"></i>Twitter</li>
                            <li className="menuItemsFooter"><i class="fa-brands fa-youtube"></i>Youtube</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}