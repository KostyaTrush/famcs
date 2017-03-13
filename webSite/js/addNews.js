/**
 * Created by kostya on 5.3.17.
 */

var articleModel = (function () {
    var idItem = 0;
    var news = [
        {
            id: ++idItem,
            title: 'ANREW REYNOLDS VS STREET',
            img: '<img src="1.png" alt=":(" height="200" width="320">',
            summary: 'ANREW REYNOLDS VS STREET ON THE AMERICA',
            createdAt: new Date('2017-02-27T00:00:00'),
            author: 'Trush Kostya',
            content: 'ghuidghnwepvuejfsdhfnweilfjksdfbwefhkwGISDBGWEGTHYGDAKKKEUDUDKSEJGFOWE',
            tags: [
                "Спорт",
                "Экономика"
            ]
        },
        {
            id: ++idItem,
            title: 'DONALD TRUMP PUMP PUMP',
            img: '<img src="2.jpg" alt=":(" height="200" width="320">',
            summary: 'DONALD TRUMP PUMP PUMP IN THE CAR',
            createdAt: new Date('2017-03-03T23:00:00'),
            author: 'Fomichev Pavel',
            content: 'fsdfsdgsdgweoihgsdkngeoghdfgherghdfjgheriger',
            tags: [
                "Политика",
                "Экономика"
            ]
        },
        {
            id: ++idItem,
            title: 'ANREW REYNOLDS VS STREET',
            img: '<img src="1.png" alt=":(" height="200" width="320">',
            summary: 'ANREW REYNOLDS VS STREET ON THE AMERICA',
            createdAt: new Date('2017-02-27T00:00:00'),
            author: 'Trush Kostya',
            content: 'ghuidghnwepvuejfsdhfnweilfjksdfbwefhkwGISDBGWEGTHYGDAKKKEUDUDKSEJGFOWE',
            tags: [
                "Спорт",
                "Экономика"
            ]
        },
        {
            id: ++idItem,
            title: 'DONALD TRUMP PUMP PUMP',
            img: '<img src="2.jpg" alt=":(" height="200" width="320">',
            summary: 'DONALD TRUMP PUMP PUMP IN THE CAR',
            createdAt: new Date('2017-03-03T23:00:00'),
            author: 'Fomichev Pavel',
            content: 'fsdfsdgsdgweoihgsdkngeoghdfgherghdfjgheriger',
            tags: [
                "Политика",
                "Экономика"
            ]
        },
        {
            id: ++idItem,
            title: 'ANREW REYNOLDS VS STREET',
            img: '<img src="1.png" alt=":(" height="200" width="320">',
            summary: 'ANREW REYNOLDS VS STREET ON THE AMERICA',
            createdAt: new Date('2017-02-27T00:00:00'),
            author: 'Trush Kostya',
            content: 'ghuidghnwepvuejfsdhfnweilfjksdfbwefhkwGISDBGWEGTHYGDAKKKEUDUDKSEJGFOWE',
            tags: [
                "Спорт",
                "Экономика"
            ]
        },
        {
            id: ++idItem,
            title: 'DONALD TRUMP PUMP PUMP',
            img: '<img src="2.jpg" alt=":(" height="200" width="320">',
            summary: 'DONALD TRUMP PUMP PUMP IN THE CAR',
            createdAt: new Date('2017-03-03T23:00:00'),
            author: 'Fomichev Pavel',
            content: 'fsdfsdgsdgweoihgsdkngeoghdfgherghdfjgheriger',
            tags: [
                "Политика",
                "Экономика"
            ]
        }
    ];

    var tags = ["Спорт", "Политика", "Экономика", "Музыка"];

    function contains(obj, news) {
        var h = 0;
        for (var i = 0; i < obj.tags.length; i++) {
            if (news.tags.indexOf(obj.tags[i]) != -1) {
                h++;
            }
        }
        if (h === obj.tags.length) {
            return true;
        } else {
            return false;
        }
    }

    function getArticles(skip, top, filterConfig) {
        if (skip > idItem) {
            return null;
        } else {
            var newArr = [];
            var j = 0;
            for (var i = skip; i < news.length; i++) {
                if (filterConfig == undefined) {
                    newArr[j] = news[i];
                    j++;
                } else {
                    if (filterConfig.dataBefore == undefined && filterConfig.dataAfter == undefined) {
                        if (filterConfig.author == undefined) {
                            if (contains(filterConfig, news[i])) {
                                newArr[j] = news[i];
                                j++;
                            }
                        } else if (filterConfig.tags == undefined) {
                            if (news[i].author == filterConfig.author) {
                                newArr[j] = news[i];
                                j++;
                            }
                        } else if (filterConfig.author != undefined && filterConfig.tags != undefined) {
                            if (news[i].author == filterConfig.author) {
                                if (contains(filterConfig, news[i])) {
                                    newArr[j] = news[i];
                                    j++;
                                }
                            }
                        }
                    } else if (filterConfig.dataBefore != undefined && filterConfig.dataAfter != undefined) {
                        if (filterConfig.dataBefore >= news[i].createdAt && filterConfig.dataAfter <= news[i].createdAt) {
                            if (filterConfig.author == undefined) {
                                if (contains(filterConfig, news[i])) {
                                    newArr[j] = news[i];
                                    j++;
                                }
                            } else if (filterConfig.tags == undefined) {
                                if (news[i].author == filterConfig.author) {
                                    newArr[j] = news[i];
                                    j++;
                                }
                            } else if (filterConfig.author != undefined && filterConfig.tags != undefined) {
                                if (news[i].author == filterConfig.author) {
                                    if (contains(filterConfig, news[i])) {
                                        newArr[j] = news[i];
                                        j++;
                                    }
                                }
                            }
                        }
                    } else if (filterConfig.dataBefore != undefined && filterConfig.dataAfter == undefined) {
                        if (filterConfig.dataBefore >= news[i].createdAt) {
                            if (filterConfig.author == undefined) {
                                if (contains(filterConfig, news[i])) {
                                    newArr[j] = news[i];
                                    j++;
                                }
                            } else if (filterConfig.tags == undefined) {
                                if (news[i].author == filterConfig.author) {
                                    newArr[j] = news[i];
                                    j++;
                                }
                            } else if (filterConfig.author != undefined && filterConfig.tags != undefined) {
                                if (news[i].author == filterConfig.author) {
                                    if (contains(filterConfig, news[i])) {
                                        newArr[j] = news[i];
                                        j++;
                                    }
                                }
                            }
                        }
                    } else if (filterConfig.dataBefore == undefined && filterConfig.dataAfter != undefined) {
                        if (filterConfig.dataAfter <= news[i].createdAt) {
                            if (filterConfig.author == undefined) {
                                if (contains(filterConfig, news[i])) {
                                    newArr[j] = news[i];
                                    j++;
                                }
                            } else if (filterConfig.tags == undefined) {
                                if (news[i].author == filterConfig.author) {
                                    newArr[j] = news[i];
                                    j++;
                                }
                            } else if (filterConfig.author != undefined && filterConfig.tags != undefined) {
                                if (news[i].author == filterConfig.author) {
                                    if (contains(filterConfig, news[i])) {
                                        newArr[j] = news[i];
                                        j++;
                                    }
                                }
                            }
                        }
                    }
                }
                if (j >= top) {
                    break;
                }
            }
            return newArr;
        }
    }

    function getArticle(id) {
        for (var i = 0; i < news.length; i++) {
            if (news[i].id == id) {
                return news[i];
            }
        }
    }

    function validateArticle(obj) {
        if ((typeof obj.id == "number" && obj.id != undefined) && (typeof obj.title == "string" && obj.title != undefined) && (typeof obj.author == "string" && obj.author != undefined) && (typeof obj.content == "string" && obj.content != undefined) && (obj.tags != undefined && typeof obj.tags == "object") && (obj.summary != undefined && typeof obj.summary == "string") && (obj.createdAt != undefined && typeof obj.createdAt == "object")) {
            if (obj.tags.length > 0 && obj.title.length < 100 && obj.summary.length < 200) {
                return true;
            }
        } else {
            return false;
        }
    }

    function addArticle(obj) {
        for (var i = 0; i < obj.tags.length; i++) {
            if (tags.indexOf(obj.tags[i]) == -1) {
                tags.push(obj.tags[i]);
            }
        }
        if (validateArticle(obj)) {
            news.push(obj);
            idItem++;
            return true;
        } else {
            return false;
        }
    }

    function print() {
        if (addArticle({
                id: 3,
                title: 'dfP',
                summary: "deep filter Page",
                createdAt: new Date('2017-03-03T23:00:00'),
                author: 'tatrchuk',
                content: 'hello world',
                tags: ['Баня']
            })) {
                if (editArticle(3, {title: 'hello'})) {
                removeArticle(3);
                addTag(1, "Музыка");
                removeTag(2, "Экономика");
                tags.forEach(function (item, i, tags) {
                    console.log(item + " ");
                })
                news.forEach(function (item, i, news) {
                    console.log(item.id + " " + item.title + " " + item.summary + " " + item.createdAt + " " + item.author + " " + item.content + " " + item.tags);
                });
            }
        }
    }

    function editArticle(id, obj) {
        if (obj.author != undefined || obj.id != undefined || obj.createdAt != undefined || obj.tags != undefined) {
            return false;
        } else {
            for (var i = 0; i < news.length; i++) {
                if (id === news[i].id) {
                    if (validateArticle(news[i])) {
                        if (obj.title != undefined && obj.content != undefined && obj.summary != undefined) {
                            news[i].title = obj.title;
                            news[i].content = obj.content;
                            news[i].summary = obj.summary;
                            return true;
                        } else if (obj.title == undefined && obj.content != undefined && obj.summary == undefined) {
                            news[i].content = obj.content;
                            return true;
                        } else if (obj.title != undefined && obj.content == undefined && obj.summary == undefined) {
                            news[i].title = obj.title;
                            return true;
                        } else if (obj.title == undefined && obj.content == undefined && obj.summary != undefined) {
                            news[i].summary = obj.summary;
                            return true;
                        } else if (obj.title != undefined && obj.content == undefined && obj.summary != undefined) {
                            news[i].summary = obj.summary;
                            news[i].title = obj.title;
                            return true;
                        } else if (obj.title == undefined && obj.content != undefined && obj.summary != undefined) {
                            news[i].summary = obj.summary;
                            news[i].content = obj.content;
                            return true;
                        } else if (obj.title != undefined && obj.content != undefined && obj.summary == undefined) {
                            news[i].title = obj.title;
                            news[i].content = obj.content;
                            return true;
                        }
                    }
                }
            }
        }
    }


    function removeArticle(id) {
        for (var i = 0; i < news.length; i++) {
            if (news[i].id == id) {
                news.splice(i, 1);
                idItem--;
                return true;
            }
        }
        return false;
    }

    function addTag(id, tag) {
        if (tags.indexOf(tag) != -1) {
            for (var i = 0; i < news.length; i++) {
                if (news[i].id == id) {
                    news[i].tags.push(tag);
                    return true;
                }
            }
        }
        return false;
    }

    function removeTag(id, tag) {
        for (var i = 0; i < news.length; i++) {
            if (news[i].id == id) {
                for (var j = 0; j < tags.length; j++) {
                    if (news[i].tags[j] === tag) {
                        news[i].tags.splice(j, 1);
                        return true;
                    }
                }
            }
        }
        return false;
    }

    function newsLength() {
        return news.length;
    }

    return {
        getArticles : getArticles,
        getArtcile : getArticle,
        validateArticle : validateArticle,
        addArticle : addArticle,
        editArticle : editArticle,
        removeArticle : removeArticle,
        addTag : addTag,
        removeTag : removeTag,
        newsLength : newsLength
    };
}());

var articleRenderer = (function () {
    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;

    function init(numberCol) {
        /* DOM Загрузился.
         Можно найти в нем нужные элементы и сохранить в переменные */
        ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector(numberCol);
    }

    function insertArticlesInDOM(articles) {
        /* для массива объектов статей получим соотвествующие HTML элементы */
        var articlesNodes = renderArticles(articles);
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
        var template = ARTICLE_TEMPLATE;
        template.content.querySelector('.article-list-item').dataset.id = article.id;
        template.content.querySelector('.article-list-item-title').textContent = article.title;
       // template.content.querySelector('.article-list-item-summary').textContent = article.summary;
        template.content.querySelector('.article-list-item-author').textContent = article.author;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);
        template.content.querySelector('.firstTag').textContent = article.tags[0];
        template.content.querySelector('.secondTag').textContent = article.tags[1];
        template.content.querySelector('.thirdTag').textContent = article.tags[2];
        template.content.querySelector('.fourthTag').textContent = article.tags[3];
        template.content.querySelector('.fivthTag').textContent = article.tags[4];
        template.content.querySelector('.article-list-item-img').innerHTML = article.img;
        /*
         Склонируем полученный контент из template и вернем как результат
         */
        return template.content.querySelector('.article-list-item').cloneNode(true);
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
    articleRenderer.init('.news');
    /* Нарисуем статьи из массива GLOBAL_ARTICLES в DOM */
    renderArticles(0, articleModel.newsLength());
}

/* Глобальная Функция для проверки. Свяжет модель и отображения */
function renderArticles(skip, top) {
    // 1. Удалим статьи из HTML
    articleRenderer.removeArticlesFromDom();

    // 2. Достанем статьи из модели
    var articles = articleModel.getArticles(skip, top);

    // 3. Отобразим статьи
    articleRenderer.insertArticlesInDOM(articles);
}

function task2() {
    articleModel.addArticle({
        id: 7,
        title: 'ANREW REYNOLDS VS STREET',
        img: '<img src="1.png" alt=":(" height="200" width="320">',
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
