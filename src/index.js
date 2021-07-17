import './styles.css';
import API from './apiService.js';
const Handlebars = require("handlebars");
import cardTmp from './card_template.hbs';

const refs = {
    container: document.querySelector('.js-container'),
    form: document.querySelector('#search-form'),
    loadBtn: document.querySelector('.load-more-button'),
}

refs.form.addEventListener('submit', onSearchFormSubmit);
// refs.loadBtn.addEventListener('click', onLoadBtnClick);

hideLoadBtn();

function onSearchFormSubmit(event) {
    event.preventDefault();

    const query = event.target.query.value;

    API.fetchImageByKeyWord(query).then(query => {
        renderImageCard(query);
        showLoadBtn();
    });
}


function renderImageCard(query) {
    const imageMarkup = cardTmp(query);
    refs.container.innerHTML = imageMarkup;
}

function showLoadBtn() {
    refs.loadBtn.classList.remove('is-hidden');
}

function hideLoadBtn() {
    refs.loadBtn.classList.add('is-hidden');
}