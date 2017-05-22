/**
 * Created by kostya on 5.3.17.
 */

let articleModel = (function () {

    function getArticles(skip, top, filterConfig, news) {
        skip = skip || 0;
        top = top || 10;
        if (news.length < skip)
            return null;

        let newArr;
        if (!filterConfig)
            newArr = news.slice(skip, top);
        else {
            newArr = news.filter(function (item) {
                if (filterConfig.author && item.author !== filterConfig.author)
                    return false;
                if (filterConfig.createdAt && new Date(item.createdAt).getDay() != new Date(filterConfig.createdAt).getDay() && new Date(item.createdAt).getMonth() != new Date(filterConfig.createdAt).getMonth() && new Date(item.createdAt).getFullYear() != new Date(filterConfig.createdAt).getFullYear())
                    return false;
                if (filterConfig.tags && !filterConfig.tags.every(function (tag) {
                        return item.tags.some(function (tagArticle) {
                            return tag === tagArticle;
                        })
                    }))
                    return false;
                return true;
            });
            newArr = newArr.slice(skip, top)
        }
        return newArr;
    }

    function getArticle(id) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', '/news/' + id);
            req.onload = () => {
                if(req.status === 200){
                    resolve(JSON.parse(req.responseText));
                }
            };
            req.onerror = () => reject(new Error("getArticle crashed."));
            req.send();
        });

    }

    function validateArticle(obj) {
        if ((typeof obj.id == "number" && obj.id) && (typeof obj.title == "string" && obj.title) && (typeof obj.author == "string" && obj.author) && (typeof obj.content == "string" && obj.content) && (obj.tags && typeof obj.tags == "object") && (obj.summary && typeof obj.summary == "string") && (obj.createdAt && typeof obj.createdAt == "object")) {
            if (obj.tags.length > 0 && obj.title.length < 100 && obj.summary.length < 200) {
                return true;
            }
        } else {
            return false;
        }
    }

    function addArticle(obj) {
        // for (var i = 0; i < obj.tags.length; i++) {
        //     if (tags.indexOf(obj.tags[i]) == -1) {
        //         tags.push(obj.tags[i]);
        //     }
        // }
        // if (validateArticle(obj)) {
        //     news.unshift(obj);
        //     idItem++;
        //     return true;
        // } else {
        //     return false;
        // }
        return new Promise((resolve, reject) => {
           const req = new XMLHttpRequest();
           req.open('POST', '/news/');
           req.setRequestHeader('content-type', 'application/json');
           req.onload = () => {
               if(req.status === 200){
                   resolve(req.status)
               }
           };
           req.send(JSON.stringify(obj));
        });
    }

    function editArticle(id, obj) {
        return new Promise((resolve, reject) => {
           const req = new XMLHttpRequest();
            req.open('PUT', '/news/' + id);
            req.setRequestHeader('content-type', 'application/json');
            req.onload = () => {
                if(req.status === 200){
                    resolve(req.status)
                }
            };
            req.send(JSON.stringify(obj));
        });
    }

    function removeArticle(id) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('DELETE', '/news/' + id);
            req.onload = () => {
                if(req.status === 200){
                    resolve(req.status)
                }
            };
            req.send();
        });
    }

    function newsLength() {
        articleModel.getFromStorage().then(
            articles => {
                return articles.length;
            }
        );
    }

    function saveInStorage() {
        localStorage.setItem('tags', JSON.stringify(tags));
        localStorage.setItem('news', JSON.stringify(news));
    }

    function getFromDB() {
        return new Promise((resolve, reject) => {
           const req = new XMLHttpRequest();
           req.open('GET', '/news');
           req.onload = () => {
               if(req.status === 200){
                   resolve(JSON.parse(req.responseText));
               }
           };
            req.onerror = () => reject(new Error("getArticle crashed."));
            req.send();
        });
    }

    return {
        getArticles : getArticles,
        getArticle : getArticle,
        validateArticle : validateArticle,
        addArticle : addArticle,
        editArticle : editArticle,
        removeArticle : removeArticle,
        newsLength : newsLength,
        getFromStorage : getFromDB,
        saveInStorage : saveInStorage
    };
}());

let articleRenderer = (function () {
    let ARTICLE_TEMPLATE;
    let ARTICLE_LIST_NODE;

    function init(name) {
        /* DOM Загрузился.
         Можно найти в нем нужные элементы и сохранить в переменные */
        ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector(name);
    }

    function insertArticlesInDOM(articles) {
        /* для массива объектов статей получим соотвествующие HTML элементы */
        let articlesNodes = renderArticles(articles);
        /* вставим HTML элементы в '.article-list' элемент в DOM. */
        articlesNodes.forEach(function (node) {
            ARTICLE_LIST_NODE.appendChild(node);
        });
    }

    function removeArticlesFromDom () {
        ARTICLE_LIST_NODE.innerHTML = '';
    }

    function renderArticles(articles) {
        /* каждый объект article из массива преобразуем в HTML элемент */
        return articles.map(function (article) {
            return renderArticle(article);
        });
    }

    function renderArticle(article) {
        /*
         Используем template из DOM, заполним его данными конкретной статьи - article.
         Этот код можно сделать лучше ...
         */
        let template = ARTICLE_TEMPLATE;
        template.content.querySelector('.wrapper').dataset.id = article._id;
        template.content.querySelector('.image').setAttribute('src', article.img);
        template.content.querySelector('.descript').textContent = article.title;
       // template.content.querySelector('.article-list-item-summary').textContent = article.summary;
        template.content.querySelector('.article-list-item-author').textContent = article.author;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(new Date(article.createdAt));
        template.content.querySelector('.tag').textContent = article.tags.join(', ');
            /*
         Склонируем полученный контент из template и вернем как результат
         */
        return template.content.querySelector('.wrapper').cloneNode(true);
    }

    /* Date -> 16/05/2015 09:50 */
    function formatDate(d) {
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' +
            d.getHours() + ':' + d.getMinutes();
    }

    return {
        init: init,
        insertArticlesInDOM: insertArticlesInDOM,
        removeArticlesFromDom: removeArticlesFromDom
    };
}());

/*
 Функция startApp вызовется, когда браузер полностью загрузит и распарсит исходный HTML (index.html)
 DOMContentLoaded – означает, что все DOM-элементы разметки уже созданы,
 можно их искать, вешать обработчики, создавать интерфейс, но при этом, возможно,
 ещё не догрузились какие-то картинки или стили.
 */
document.addEventListener('DOMContentLoaded', startApp);


function startApp() {
    /* DOM Загрузился.
     Можно найти в нем нужные элементы и сохранить в переменные */
    if (!localStorage.getItem('news')) {
        articleModel.saveInStorage();
    }
    articleModel.getFromStorage().then(
        resolve => {
            let arts = resolve;
            articleRenderer.init('.news');
            /* Нарисуем статьи из массива GLOBAL_ARTICLES в DOM */
            articleRenderer.removeArticlesFromDom();
            if (arts.length < 6) {
                articleRenderer.insertArticlesInDOM(arts);
            } else {
                articleRenderer.insertArticlesInDOM(arts);
            }
        }
    )
}

/* Глобальная Функция для проверки. Свяжет модель и отображения */
// function renderArticles(skip, top) {
//     // 1. Удалим статьи из HTML
//     articleRenderer.removeArticlesFromDom();
//
//     // 2. Достанем статьи из модели
//     var articles = articleModel.getArticles(skip, top);
//     if(articleModel.newsLength() > 6)
//     {
//         document.querySelector('.button-pag').style.visibility = 'visible';
//     }
//     // 3. Отобразим статьи
//     articleRenderer.insertArticlesInDOM(articles);
// }

function task2() {
    articleModel.addArticle({
        id: ++articleModel.idItem,
        title: 'ANREW REYNOLDS VS STREET',
        img: '<img src="1.png"><p class="descript"></p>',
        summary: 'ANREW REYNOLDS VS STREET ON THE AMERICA',
        createdAt: new Date('2017-02-27T00:00:00'),
        author: 'Trush Kostya',
        content: 'ghuidghnwepvuejfsdhfnweilfjksdfbwefhkwGISDBGWEGTHYGDAKKKEUDUDKSEJGFOWE',
        tags: [
            "Спорт",
            "Экономика"
        ]
    });
    startApp();
}

function task3() {
    articleModel.removeArticle(4);
    startApp();

}

function task4() {
    articleModel.editArticle(3, {title: '10 PJ'})
    startApp();
}
