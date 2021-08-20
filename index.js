const fetch = require('sync-fetch');
const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor() {
        super({ title: "Home", sName: "Jaishil Bhavsar" });
    }
    render(sPage) {
        const oJson = fetch("https://assignment2-5b7cb-default-rtdb.firebaseio.com/meals.json").json();
        // console.log(oJson);
        let sResult = "<div class='container'><h1>Upcoming Popup Meals</h1>";
        let n = 0;
        Object.keys(oJson).map((key) => {
            console.log(key);
            if (key != 'users') {
                const oEntity = oJson[key];
                console.log(oEntity);
                oEntity.id = key;
                sResult += `
            <h2>${oEntity.title}</h2>
            <p><img src="${oEntity.featured_image}" alt="${oEntity.title}"</p>
            <p>Description: ${oEntity.full_description}</p>
            <p>Location: ${oEntity.location}</p>
            <p>Cost: ${oEntity.cost}</p>
            <p>date:${oEntity.date}</p>
            <form>
                <button id="button_${n++}" disabled class="paypal_button" data-cost="12.99">
                Order now
                </button>
                
                </form>
                `;
            }
        });
        sResult += '</div>'
        return sResult;
    }
}