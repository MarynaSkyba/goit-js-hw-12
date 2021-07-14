import './css/styles.css';
import API from './fetchCountries';
import countryCard from './countryCard.hbs';

const DEBOUNCE_DELAY = 300;
import * as _ from 'lodash';
import getRefs from './getRefs';

// import { formatDate } from 'tough-cookie';

const refs = getRefs();

refs.searchCountry.addEventListener('input', _.debounce(onSearch, DEBOUNCE_DELAY));

function onSearch (e) {
    e.preventDefault();
    const searchLetter = e.target.value;
    console.log(searchLetter)
    refs.countryCard.innerHTML = '';

    API.fetchCountries(searchLetter)
    .then(renderCountryCard)
    .catch(error => console.log(error))
    
    ;
}

function renderCountryCard (country){
    const markup = countryCard(country);
    console.log(markup);
    refs.countryCard.insertAdjacentHTML('beforeend', markup);
}