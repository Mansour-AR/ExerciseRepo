// defined variables and objects for XMLHttpRequest

var xhr = new XMLHttpRequest();
var url = './news_article.json';

// defined URL and request set up

xhr.open('GET', url, true);

// specify response type

xhr.responseType = 'json';

// function to handle onload event

xhr.onload = function() { 
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('news-container');

    articles.forEach(function(article) {
        const articleElement = document.createElement('article');

                const titleElement = document.createElement('h2');
                titleElement.textContent = article.title;

                const contentElement = document.createElement('p');
                contentElement.textContent = article.content;

                articleElement.appendChild(titleElement);
                articleElement.appendChild(contentElement);

                articlesDiv.appendChild(articleElement);
 });

}
 
 xhr.send();
