import React from "react";
import './CSS/style.css'
import chip from './resources/pictures/chip.png'

function creditCard() {
    return (
<section>
    <div className="card">
        <div className="face front">
            <h3 className="debit">Debit Card</h3>
            <h3 className="bank">Bank Name</h3>
            <img src={chip} alt='chip' className="chip"/>
            <h3 className="number">0123 4567 8901 2345</h3>
            <h5 className="valid"><span>valid<br/>thru</span><span>10-23</span></h5>
            <h5 className="cardHolder">Hattenbach Wilhelm</h5>
        </div>

        <div className="face back">
            <div className="blackBar"></div>
            <div className="ccvText">
                <h5>Autorized Signature-not valid unless signed</h5>
                <div className="whiteBar"></div>
                <div className="ccv">123</div>
            </div>
            <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis commodi eius ex harum laudantium magnam nobis quia
                quisquam reiciendis sint? Ad at debitis deserunt dolor doloribus
                hic incidunt laborum magnam mollitia non pariatur, quo tempora
                voluptatem! Libero nam nobis officiis quasi repellat voluptatum.
                Alias laudantium molestias numquam provident quaerat sint.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cumque esse modi quis sapiente similique? Eius magni nam
                quibusdam vitae. Dolores error exercitationem non. Consequatur
                earum facere ipsam provident, unde vero.
            </p>
        </div>

    </div>
</section>
    );
}

export default creditCard;