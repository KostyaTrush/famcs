/**
 * Created by kostya on 5.3.17.
 */

var articleModel = (function () {
    var idItem = 0;
    var news = [
        {
            id: ++idItem,
            title: 'ANREW REYNOLDS VS STREET',
            img: '2.jpg',
            summary: 'ANREW REYNOLDS VS STREET ON THE AMERICA',
            createdAt: new Date('2017-02-27T00:00:00'),
            author: 'Trush Kostya',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam ',
            tags: [
                "Спорт"
            ]
        },
        {
            id: ++idItem,
            title: 'DONALD TRUMP PUMP PUMP',
            img: '2.jpg',
            summary: 'DONALD TRUMP PUMP PUMP IN THE CAR',
            createdAt: new Date('2017-03-03T23:00:00'),
            author: 'Fomichev Pavel',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam ',
            tags: [
                "Политика",
                "Экономика"
            ]
        },
        {
            id: ++idItem,
            title: 'ANREW REYNOLDS VS STREET',
            img: '1.png',
            summary: 'ANREW REYNOLDS VS STREET ON THE AMERICA',
            createdAt: new Date('2017-02-27T00:00:00'),
            author: 'Trush Kostya',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam ',
            tags: [
                "Спорт",
                "Экономика"
            ]
        },
        {
            id: ++idItem,
            title: 'DONALD TRUMP PUMP PUMP',
            img: '2.jpg',
            summary: 'DONALD TRUMP PUMP PUMP IN THE CAR',
            createdAt: new Date('2017-03-03T23:00:00'),
            author: 'Fomichev Pavel',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam ',
            tags: [
                "Политика",
                "Экономика"
            ]
        },
        {
            id: ++idItem,
            title: 'ANREW REYNOLDS VS STREET',
            img: '1.png',
            summary: 'ANREW REYNOLDS VS STREET ON THE AMERICA',
            createdAt: new Date('2017-02-27T00:00:00'),
            author: 'Trush Kostya',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam ',
            tags: [
                "Спорт",
                "Экономика"
            ]
        },
        {
            id: ++idItem,
            title: 'DONALD TRUMP PUMP PUMP',
            img: '2.jpg',
            summary: 'DONALD TRUMP PUMP PUMP IN THE CAR',
            createdAt: new Date('2017-03-03T23:00:00'),
            author: 'Fomichev Pavel',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam ',
            tags: [
                "Политика",
                "Экономика"
            ]
        },
        {
            id: ++idItem,
            title: 'LIZA IS MINE',
            img: '2.jpg',
            summary: 'DONALD TRUMP PUMP PUMP IN THE CAR',
            createdAt: new Date('2017-03-03T23:00:00'),
            author: 'Fomichev Pavel',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam ',
            tags: [
                "Политика",
                "Экономика"
            ]
        }
    ];

    var tags = ["Спорт", "Политика", "Экономика", "Музыка"];
    //
    // function contains(obj, news) {
    //     var h = 0;
    //     for (var i = 0; i < obj.tags.length; i++) {
    //         if (news.tags.indexOf(obj.tags[i]) != -1) {
    //             h++;
    //         }
    //     }
    //     if (h === obj.tags.length) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    function getArticles(skip, top, filterConfig) {
        skip = skip || 0;
        top = top || 10;
        if (news.length < skip)
            return null;

        var newArr;
        if (!filterConfig)
            newArr = news.slice(skip, top);
        else {
            newArr = news.filter(function (item) {
                if (filterConfig.author && item.author !== filterConfig.author)
                    return false;
                if (filterConfig.createdAt && item.createdAt.toDateString() >= filterConfig.dateAfter.toDateString() && item.createdAt.toDateString() <= filterConfig.dateBefore.toDateString())
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

    // function getArticles(skip, top, filterConfig) {
    //     if (skip > idItem) {
    //         return null;
    //     } else {
    //         var newArr = [];
    //         var j = 0;
    //         for (var i = skip; i < news.length; i++) {
    //             if (filterConfig == undefined) {
    //                 newArr[j] = news[i];
    //                 j++;
    //             } else {
    //                 if (filterConfig.dataBefore == undefined && filterConfig.dataAfter == undefined) {
    //                     if (filterConfig.author == undefined) {
    //                         if (contains(filterConfig, news[i])) {
    //                             newArr[j] = news[i];
    //                             j++;
    //                         }
    //                     } else if (filterConfig.tags == undefined) {
    //                         if (news[i].author == filterConfig.author) {
    //                             newArr[j] = news[i];
    //                             j++;
    //                         }
    //                     } else if (filterConfig.author != undefined && filterConfig.tags != undefined) {
    //                         if (news[i].author == filterConfig.author) {
    //                             if (contains(filterConfig, news[i])) {
    //                                 newArr[j] = news[i];
    //                                 j++;
    //                             }
    //                         }
    //                     }
    //                 } else if (filterConfig.dataBefore != undefined && filterConfig.dataAfter != undefined) {
    //                     if (filterConfig.dataBefore >= news[i].createdAt && filterConfig.dataAfter <= news[i].createdAt) {
    //                         if (filterConfig.author == undefined) {
    //                             if (contains(filterConfig, news[i])) {
    //                                 newArr[j] = news[i];
    //                                 j++;
    //                             }
    //                         } else if (filterConfig.tags == undefined) {
    //                             if (news[i].author == filterConfig.author) {
    //                                 newArr[j] = news[i];
    //                                 j++;
    //                             }
    //                         } else if (filterConfig.author != undefined && filterConfig.tags != undefined) {
    //                             if (news[i].author == filterConfig.author) {
    //                                 if (contains(filterConfig, news[i])) {
    //                                     newArr[j] = news[i];
    //                                     j++;
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 } else if (filterConfig.dataBefore != undefined && filterConfig.dataAfter == undefined) {
    //                     if (filterConfig.dataBefore >= news[i].createdAt) {
    //                         if (filterConfig.author == undefined) {
    //                             if (contains(filterConfig, news[i])) {
    //                                 newArr[j] = news[i];
    //                                 j++;
    //                             }
    //                         } else if (filterConfig.tags == undefined) {
    //                             if (news[i].author == filterConfig.author) {
    //                                 newArr[j] = news[i];
    //                                 j++;
    //                             }
    //                         } else if (filterConfig.author != undefined && filterConfig.tags != undefined) {
    //                             if (news[i].author == filterConfig.author) {
    //                                 if (contains(filterConfig, news[i])) {
    //                                     newArr[j] = news[i];
    //                                     j++;
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 } else if (filterConfig.dataBefore == undefined && filterConfig.dataAfter != undefined) {
    //                     if (filterConfig.dataAfter <= news[i].createdAt) {
    //                         if (filterConfig.author == undefined) {
    //                             if (contains(filterConfig, news[i])) {
    //                                 newArr[j] = news[i];
    //                                 j++;
    //                             }
    //                         } else if (filterConfig.tags == undefined) {
    //                             if (news[i].author == filterConfig.author) {
    //                                 newArr[j] = news[i];
    //                                 j++;
    //                             }
    //                         } else if (filterConfig.author != undefined && filterConfig.tags != undefined) {
    //                             if (news[i].author == filterConfig.author) {
    //                                 if (contains(filterConfig, news[i])) {
    //                                     newArr[j] = news[i];
    //                                     j++;
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //             if (j >= top) {
    //                 break;
    //             }
    //         }
    //         return newArr;
    //     }
    // }

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
            news.unshift(obj);
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
                if (id == news[i].id) {
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

    function saveInStorage() {
        localStorage.setItem('tags', JSON.stringify(tags));
        localStorage.setItem('news', JSON.stringify(news));
    }

    function getFromStorage() {
        news = JSON.parse(localStorage.getItem('news'));
        for(var i = 0; i < newsLength(); i++)
        {
            news[i].createdAt = new Date(news[i].createdAt);
            news[i].id = (Number)(news[i].id);
        }
        tags = JSON.parse(localStorage.getItem('tags'));
    }

    return {
        news : news,
        getArticles : getArticles,
        getArticle : getArticle,
        validateArticle : validateArticle,
        addArticle : addArticle,
        editArticle : editArticle,
        removeArticle : removeArticle,
        addTag : addTag,
        removeTag : removeTag,
        newsLength : newsLength,
        idItem : idItem,
        getFromStorage : getFromStorage,
        saveInStorage : saveInStorage
    };
}());

var articleRenderer = (function () {
    var ARTICLE_TEMPLATE;
    var ARTICLE_LIST_NODE;

    function init(name) {
        /* DOM Загрузился.
         Можно найти в нем нужные элементы и сохранить в переменные */
        ARTICLE_TEMPLATE = document.querySelector('#template-article-list-item');
        ARTICLE_LIST_NODE = document.querySelector(name);
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
        template.content.querySelector('.wrapper').dataset.id = article.id;
        template.content.querySelector('.image').setAttribute('src', article.img);
        template.content.querySelector('.descript').textContent = article.title;
       // template.content.querySelector('.article-list-item-summary').textContent = article.summary;
        template.content.querySelector('.article-list-item-author').textContent = article.author;
        template.content.querySelector('.article-list-item-date').textContent = formatDate(article.createdAt);
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
    if(!localStorage.getItem('news'))
    {
        articleModel.saveInStorage();
    }
    articleModel.getFromStorage();
    articleRenderer.init('.news');
    /* Нарисуем статьи из массива GLOBAL_ARTICLES в DOM */
    renderArticles(0, 6);
}

/* Глобальная Функция для проверки. Свяжет модель и отображения */
function renderArticles(skip, top) {
    // 1. Удалим статьи из HTML
    articleRenderer.removeArticlesFromDom();

    // 2. Достанем статьи из модели
    var articles = articleModel.getArticles(skip, top);
    if(articleModel.newsLength() > 6)
    {
        document.querySelector('.button-pag').style.visibility = 'visible';
    }
    // 3. Отобразим статьи
    articleRenderer.insertArticlesInDOM(articles);
}

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
