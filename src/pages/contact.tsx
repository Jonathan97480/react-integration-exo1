import React from "react";
import { BsClock, BsFillGeoAltFill, BsTelephone } from "react-icons/bs";
import { IoMdMailOpen } from "react-icons/io";

export default function Contact() {

    return (
        <div>
            <div>
                <h1>Contacter-nous</h1>

                <form action="">
                    <div>
                        <label htmlFor="name">Nom *</label>
                        <input type="text" name="name" id="name" placeholder="Votre nom" />
                    </div>

                    <div>
                        <label htmlFor="email">Email *</label>
                        <input type="email" name="email" id="email" placeholder="Votre email" />
                    </div>

                    <div>
                        <label htmlFor="phone">Tel (facultatif)</label>
                        <input type="tel" name="phone" id="phone" placeholder="Votre numéro de téléphone" />
                    </div>

                    <div>
                        <label htmlFor="message">Message *</label>
                        <textarea name="message" id="message" cols={30} rows={10} placeholder="Votre message" />
                    </div>

                    <button>Envoyer</button>

                </form>

            </div>

            <div >
                <div>
                    <BsFillGeoAltFill />
                    <span>12 rue Saint-Pierre 97410</span>
                </div>
                <div>
                    <BsTelephone />
                    <span>06 92 01 02 03</span>
                </div>

                <div>
                    <IoMdMailOpen />
                    <span>tim.jennings@example.com</span>
                </div>
                <div>
                    <BsClock />
                    <span>Du lundi au vendredi de 7h30 à 8h30</span>
                </div>
            </div>
        </div >
    )




}