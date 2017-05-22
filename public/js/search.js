/**
 * Created by kostya on 26.3.17.
 */

function searchArticles() {
    let articles = [];
    articleModel.getFromStorage().then(
        news => {
            document.querySelector('.button-pag').style.visibility = 'hidden';
            let obj = document.querySelector('.search_words').value;
            for (let i = 0; i < news.length; i++) {
                if (news[i].title.toLowerCase().indexOf(obj.toLowerCase()) != -1) {
                    articles.push(news[i]);
                } else if (news[i].content.toLowerCase().indexOf(obj.toLowerCase()) != -1) {
                    articles.push(news[i]);
                }
            }
            if (articles.length == 0) {
                document.querySelector('.authorization').style.display = 'none';
                document.querySelector('.full-news').style.display = 'none';
                document.querySelector('.add_news').style.display = 'none';
                document.querySelector('.main-page').style.display = 'none';
                document.querySelector('.error-page').style.display = 'block';
            } else {
                document.querySelector('.authorization').style.display = 'none';
                document.querySelector('.full-news').style.display = 'none';
                document.querySelector('.add_news').style.display = 'none';
                document.querySelector('.error-page').style.display = 'none';
                document.querySelector('.main-page').style.display = 'inline-block';
                articleRenderer.removeArticlesFromDom();
                articleRenderer.insertArticlesInDOM(articles);
            }
        }
    );
}

function searchPolitictag() {
    let articles = [];
    articleModel.getFromStorage().then(
        news => {
            articleModel.getArticles(0, news.length, {}, news);
            document.querySelector('.button-pag').style.visibility = 'hidden';
            for (let i = 0; i < news.length; i++) {
                if (news[i].tags.indexOf('Политика') != -1) {
                    articles.push(news[i]);
                }
            }
            if (articles.length == 0) {
                document.querySelector('.authorization').style.display = 'none';
                document.querySelector('.full-news').style.display = 'none';
                document.querySelector('.add_news').style.display = 'none';
                document.querySelector('.main-page').style.display = 'none';
                document.querySelector('.error-page').style.display = 'block';
            } else {
                document.querySelector('.authorization').style.display = 'none';
                document.querySelector('.full-news').style.display = 'none';
                document.querySelector('.add_news').style.display = 'none';
                document.querySelector('.error-page').style.display = 'none';
                document.querySelector('.main-page').style.display = 'inline-block';
                articleRenderer.removeArticlesFromDom();
                articleRenderer.insertArticlesInDOM(articles);
            }
        }
    );
}

function searchEconomictag() {
    let articles = [];
    articleModel.getFromStorage().then(
        news => {
            articleModel.getArticles(0, news.length, {}, news);
            document.querySelector('.button-pag').style.visibility = 'hidden';
            for (let i = 0; i < news.length; i++) {
                if (news[i].tags.indexOf('Экономика') != -1) {
                    articles.push(news[i]);
                }
            }
            if (articles.length == 0) {
                document.querySelector('.authorization').style.display = 'none';
                document.querySelector('.full-news').style.display = 'none';
                document.querySelector('.add_news').style.display = 'none';
                document.querySelector('.main-page').style.display = 'none';
                document.querySelector('.error-page').style.display = 'block';
            } else {
                document.querySelector('.authorization').style.display = 'none';
                document.querySelector('.full-news').style.display = 'none';
                document.querySelector('.add_news').style.display = 'none';
                document.querySelector('.error-page').style.display = 'none';
                document.querySelector('.main-page').style.display = 'inline-block';
                articleRenderer.removeArticlesFromDom();
                articleRenderer.insertArticlesInDOM(articles);
            }
        }
    );
}

function searchSporttag() {
    let articles = [];
    articleModel.getFromStorage().then(
        news => {
            articleModel.getArticles(0, news.length, {}, news);
            document.querySelector('.button-pag').style.visibility = 'hidden';
            for (let i = 0; i < news.length; i++) {
                if(news[i].tags.indexOf('Спорт') != -1){
                    articles.push(news[i]);
                }
            }
            if (articles.length == 0) {
                document.querySelector('.authorization').style.display = 'none';
                document.querySelector('.full-news').style.display = 'none';
                document.querySelector('.add_news').style.display = 'none';
                document.querySelector('.main-page').style.display = 'none';
                document.querySelector('.error-page').style.display = 'block';
            } else {
                document.querySelector('.authorization').style.display = 'none';
                document.querySelector('.full-news').style.display = 'none';
                document.querySelector('.add_news').style.display = 'none';
                document.querySelector('.error-page').style.display = 'none';
                document.querySelector('.main-page').style.display = 'inline-block';
                articleRenderer.removeArticlesFromDom();
                articleRenderer.insertArticlesInDOM(articles);
            }
        }
    );
}

function searchEnvironmenttag() {
    let articles = [];
    articleModel.getFromStorage().then(
        news => {
            articleModel.getArticles(0, news.length, {}, news);
            document.querySelector('.button-pag').style.visibility = 'hidden';
            for (let i = 0; i < news.length; i++) {
                if(news[i].tags.indexOf('Развлечения') != -1)
                {
                    articles.push(news[i]);
                }
            }
            if (articles.length == 0) {
                document.querySelector('.authorization').style.display = 'none';
                document.querySelector('.full-news').style.display = 'none';
                document.querySelector('.add_news').style.display = 'none';
                document.querySelector('.main-page').style.display = 'none';
                document.querySelector('.error-page').style.display = 'block';
            } else {
                document.querySelector('.authorization').style.display = 'none';
                document.querySelector('.full-news').style.display = 'none';
                document.querySelector('.add_news').style.display = 'none';
                document.querySelector('.error-page').style.display = 'none';
                document.querySelector('.main-page').style.display = 'inline-block';
                articleRenderer.removeArticlesFromDom();
                articleRenderer.insertArticlesInDOM(articles);
            }
        }
    );
}

function searchMusictag() {
    let articles = [];
    articleModel.getFromStorage().then(
        news => {
            articleModel.getArticles(0, news.length, {}, news);
            document.querySelector('.button-pag').style.visibility = 'hidden';
            for (let i = 0; i < news.length; i++) {
                if(news[i].tags.indexOf('Политика') != -1){
                    articles.push(news[i]);
                }
            }
            if (articles.length == 0) {
                document.querySelector('.authorization').style.display = 'none';
                document.querySelector('.full-news').style.display = 'none';
                document.querySelector('.add_news').style.display = 'none';
                document.querySelector('.main-page').style.display = 'none';
                document.querySelector('.error-page').style.display = 'block';
            } else {
                document.querySelector('.authorization').style.display = 'none';
                document.querySelector('.full-news').style.display = 'none';
                document.querySelector('.add_news').style.display = 'none';
                document.querySelector('.error-page').style.display = 'none';
                document.querySelector('.main-page').style.display = 'inline-block';
                articleRenderer.removeArticlesFromDom();
                articleRenderer.insertArticlesInDOM(articles);
            }
        }
    );
}