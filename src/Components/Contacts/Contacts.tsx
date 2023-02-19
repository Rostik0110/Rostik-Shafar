import {useState} from "react";
import "./Contacts.sass";

const Contacts = () => {

    return(
        <div className="contacts">
            <h1 className="title-contacts text-color-red">Contacts</h1>
            <div className="contacts-box">
                <div>
                    <a className="text-color-white" href="mailto:rostikshafar@gmail.com" target={"_blank"}>rostikshafar@gmail.com</a>
                </div>
                <div>
                    <a className="text-color-white" href="tel:+380965499335">+380965499335</a>
                </div>
                <div>
                    <a className="text-color-white" href="https://www.instagram.com/rostikshafar/" target={"_blank"}>instagram</a>
                </div>
                <div>
                    <a className="text-color-white" href="https://t.me/rostikshafar"  target={"_blank"}>telegram</a>
                </div>

            </div>

        </div>
    )
}

export default Contacts;