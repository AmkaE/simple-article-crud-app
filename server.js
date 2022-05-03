const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
require('dotenv').config();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use('/articles', require('./routes/articleRoutes'));

app.get('/', (req, res) => {
	res.send(
		'<h1><a href="/articles">Simple Articles CRUD</a href="/articles"></h1>',
	);
});

app.listen(port, () => console.log(`Server started at ${port}`));
