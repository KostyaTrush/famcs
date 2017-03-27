/**
 * Created by kostya on 26.3.17.
 */
function searchArticles() {
    var articles = [];
    document.querySelector('.button-pag').style.visibility = 'hidden';
    var obj = document.querySelector('.search_words').value;
    for (var i = 0; i < articleModel.newsLength(); i++) {
        if (articleModel.news[i].title.toLowerCase().indexOf(obj.toLowerCase()) != -1) {
            articles.push(articleModel.news[i]);
        } else if (articleModel.news[i].content.toLowerCase().indexOf(obj.toLowerCase()) != -1) {
            articles.push(articleModel.news[i]);
        }
    }
    if (articles.length == 0) {
        document.querySelector('.main-page').style.display = 'none';
        document.querySelector('.error-page').style.display = 'block';
    } else {
        document.querySelector('.error-page').style.display = 'none';
        document.querySelector('.main-page').style.display = 'inline-block';
        articleRenderer.removeArticlesFromDom();
        articleRenderer.insertArticlesInDOM(articles);
    }
}

function searchPolitictag() {
    var articles = [];
    document.querySelector('.button-pag').style.visibility = 'hidden';
    for (var i = 0; i < articleModel.newsLength(); i++) {
        if(articleModel.news[i].tags.indexOf('Политика') != -1)
        {
            articles.push(articleModel.news[i]);
        }
    }
    if (articles.length == 0) {
        document.querySelector('.main-page').style.display = 'none';
        document.querySelector('.error-page').style.display = 'block';
    } else {
        document.querySelector('.error-page').style.display = 'none';
        document.querySelector('.main-page').style.display = 'inline-block';
        articleRenderer.removeArticlesFromDom();
        articleRenderer.insertArticlesInDOM(articles);
    }
}

function searchEconomictag() {
    var articles = [];
    document.querySelector('.button-pag').style.visibility = 'hidden';
    for (var i = 0; i < articleModel.newsLength(); i++) {
        if(articleModel.news[i].tags.indexOf('Экономика') != -1)
        {
            articles.push(articleModel.news[i]);
        }
    }
    if (articles.length == 0) {
        document.querySelector('.main-page').style.display = 'none';
        document.querySelector('.error-page').style.display = 'block';
    } else {
        document.querySelector('.error-page').style.display = 'none';
        document.querySelector('.main-page').style.display = 'inline-block';
        articleRenderer.removeArticlesFromDom();
        articleRenderer.insertArticlesInDOM(articles);
    }
}

function searchSporttag() {
    var articles = [];
    document.querySelector('.button-pag').style.visibility = 'hidden';
    for (var i = 0; i < articleModel.newsLength(); i++) {
        if(articleModel.news[i].tags.indexOf('Спорт') != -1)
        {
            articles.push(articleModel.news[i]);
        }
    }
    if (articles.length == 0) {
        document.querySelector('.main-page').style.display = 'none';
        document.querySelector('.error-page').style.display = 'block';
    } else {
        document.querySelector('.error-page').style.display = 'none';
        document.querySelector('.main-page').style.display = 'inline-block';
        articleRenderer.removeArticlesFromDom();
        articleRenderer.insertArticlesInDOM(articles);
    }
}

function searchEnvironmenttag() {
    var articles = [];
    document.querySelector('.button-pag').style.visibility = 'hidden';
    for (var i = 0; i < articleModel.newsLength(); i++) {
        if(articleModel.news[i].tags.indexOf('Развлечения') != -1)
        {
            articles.push(articleModel.news[i]);
        }
    }
    if (articles.length == 0) {
        document.querySelector('.main-page').style.display = 'none';
        document.querySelector('.error-page').style.display = 'block';
    } else {
        document.querySelector('.error-page').style.display = 'none';
        document.querySelector('.main-page').style.display = 'inline-block';
        articleRenderer.removeArticlesFromDom();
        articleRenderer.insertArticlesInDOM(articles);
    }
}

function searchMusictag() {
    var articles = [];
    document.querySelector('.button-pag').style.visibility = 'hidden';
    for (var i = 0; i < articleModel.newsLength(); i++) {
        if(articleModel.news[i].tags.indexOf('Музыка') != -1)
        {
            articles.push(articleModel.news[i]);
        }
    }
    if (articles.length == 0) {
        document.querySelector('.main-page').style.display = 'none';
        document.querySelector('.error-page').style.display = 'block';
    } else {
        document.querySelector('.error-page').style.display = 'none';
        document.querySelector('.main-page').style.display = 'inline-block';
        articleRenderer.removeArticlesFromDom();
        articleRenderer.insertArticlesInDOM(articles);
    }
}