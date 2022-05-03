const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

let articles = [
	{
		id: uuid(),
		title: 'Article 1',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore quasi molestiae aliquid necessitatibus veniam.',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda vitae eos sapiente suscipit dolorem quaerat labore perspiciatis, fugit repudiandae dolores? Quasi non repellat, ipsam pariatur, eius fugit quia quam natus in accusantium voluptatem quas esse! Qui dolores consequatur odit id nemo fuga eaque ullam atque. Asperiores voluptatem in tenetur.',
	},
	{
		id: uuid(),
		title: 'Article 2',
		description:
			'Aliquid necessitarem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore quasi molestiae veniam.',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda vitae eos sapiente suscipit dolorem quaerat labore perspiciatis, fugit repudiandae dolores? Quasi non repellat, ipsam pariatur, eius fugit quia quam natus in accusantium voluptatem quas esse! Qui dolores consequatur odit id nemo fuga eaque ullam atque. Asperiores voluptatem in tenetur.',
	},
	{
		id: uuid(),
		title: 'Article 3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore quasi molestiae aliquid necessitatibus veniam.',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda vitae eos sapiente suscipit dolorem quaerat labore perspiciatis, fugit repudiandae dolores? Quasi non repellat, ipsam pariatur, eius fugit quia quam natus in accusantium voluptatem quas esse! Qui dolores consequatur odit id nemo fuga eaque ullam atque. Asperiores voluptatem in tenetur.',
	},
	{
		id: uuid(),
		title: 'Article 4',
		description:
			'Aliquid necessitarem ipsum dolor sit amet consectetur adipisicing elit. Quaerat labore quasi molestiae veniam.',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda vitae eos sapiente suscipit dolorem quaerat labore perspiciatis, fugit repudiandae dolores? Quasi non repellat, ipsam pariatur, eius fugit quia quam natus in accusantium voluptatem quas esse! Qui dolores consequatur odit id nemo fuga eaque ullam atque. Asperiores voluptatem in tenetur.',
	},
];

// render index page to see all articles
router.get('/', (req, res) => {
	res.render('articles/index', { articles });
});

// render read pages
router.get('/:id/read', (req, res) => {
	const { id } = req.params;
	const article = articles.find(article => article.id === id);
	res.render('articles/read', { article, id });
});

// render new page when adding new article
router.get('/new', (req, res) => {
	res.render('articles/new');
});

// add the new article to the articles
router.post('/', (req, res) => {
	const { title, description, text } = req.body;
	if ((title, description, text)) {
		const newArticle = { id: uuid(), title, description, text };
		articles.push(newArticle);
	}
	res.redirect('/articles');
});

// render edit page to edit article
router.get('/:id/edit', (req, res) => {
	const { id } = req.params;
	const article = articles.find(article => article.id === id);
	res.render('articles/edit', { article });
});

// update the edited arcticle
router.patch('/:id/read', (req, res) => {
	const { id } = req.params;
	const { title, description, text } = req.body;
	const article = articles.find(article => article.id === id);
	article.title = title;
	article.description = description;
	article.text = text;
	res.redirect(`/articles/${id}/read`);
});

// delete article
router.delete('/:id/read', (req, res) => {
	const { id } = req.params;
	articles = articles.filter(article => article.id !== id);

	res.redirect('/articles');
});

module.exports = router;
