fetch("events.json")
    .then(response => {
        return response.json();
    }).then(events => {
        const eventsHTML = events.map(event => {
            return `<div class="mainCard">
                <div class="cardPicture">
                    <img class="article-image" src="${event.picture}" border="0" alt="">
                </div>
                <div class="mdl-card__title">
                    <h2 class="mdl-card__title-text">${event.heading}</h2>
                </div>
                <div class="mdl-card__supporting-text">
                    ${event.text}
                </div>
                <div class="mdl-card__actions mdl-card--border">
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="${event.link}" data-upgraded=",MaterialButton,MaterialRipple">Read more<span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></a>
                </div>
            </div>`;
        }).join("\n");
        const eventsContainer = document.getElementById('events');
        eventsContainer.innerHTML = eventsHTML;
    });
