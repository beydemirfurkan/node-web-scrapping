const fetchItems = require('./fetch-data');
const writeToExcel = require('./write-to-excel');

fetchItems()
    .then(items => writeToExcel(items))
    .catch(error => console.error(error.message));
