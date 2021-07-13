import countryCard from './countryCard.hbs'

const refs = {
    countryCard: document.querySelector('.country-info'),
  }
  
  fetchCountries()
  .then(renderCountryCard)
  
  function fetchCountries () {
      return fetch('https://restcountries.eu/rest/v2/alpha/col')
  .then(response => {return response.json();})
  
  }
  
  function renderCountryCard (country){
      const markup = countryCard(country);
      refs.countryCard.innerHTML = markup;
  }
  