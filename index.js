const app = require('express')();
const covid = require('covid-data');
const PORT = process.env.PORT || 4000;


app.use('/', (req, res) => {
    res.send('Server active');
});

app.use('/id', async (req, res) => {
    const covidData = await covid.getData();
    res.json(covidData.id);
});

app.use('/global', async (req, res) => {
    const covidData = await covid.getData();
    res.json(covidData.global);
})

app.listen(PORT, (e) => {
    console.log(`Server running:${PORT}`);
});