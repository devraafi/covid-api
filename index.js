const app = require('express')();
const covid = require('covid-data');

app.use('/id', async (req, res) => {
    const covidData = await covid.getData();
    res.json(covidData.id);
});

app.use('/global', async (req, res) => {
    const covidData = await covid.getData();
    res.json(covidData.global);
})

app.listen(8080, (e) => {
    console.log('Server running:8080');
});