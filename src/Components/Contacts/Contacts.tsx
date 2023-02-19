import "./Contacts.sass";
import Mail from "./Mail.png";
import Phone from "./Phone.png";
import Instagram from "./Instagram.png";
import Telegram from "./Telegram.png";

const Contacts = () => {

    return(
        <div className="contacts">
            <h1 className="title-contacts text-color-red">Contacts</h1>
            <div className="contacts-box">
                <div className="contacts-line-box">
                    <img className="icon-contact" alt=" " src={Mail}/>
                    <a className="text-color-white" href="mailto:rostikshafar@gmail.com" target={"_blank"}>rostikshafar@gmail.com</a>
                </div>
                <div className="contacts-line-box">
                    <img className="icon-contact" alt=" " src={Phone}/>
                    <a className="text-color-white" href="tel:+380965499335">+38 096 549 9335</a>
                </div>
                <div className="contacts-line-box">
                    <img className="icon-contact" alt=" " src={Instagram}/>
                    <a className="text-color-white" href="https://www.instagram.com/rostikshafar/" target={"_blank"}>@rostikshafar</a>
                </div>
                <div className="contacts-line-box">
                    <img className="icon-contact" alt=" " src={Telegram}/>
                    <a className="text-color-white" href="https://t.me/rostikshafar"  target={"_blank"}>@rostikshafar</a>
                </div>

            </div>

        </div>
    )
}

export default Contacts;