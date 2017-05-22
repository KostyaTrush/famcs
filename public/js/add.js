/**
 * Created by kostya on 24.3.17.
 */

function add() {
    document.querySelector('.main-page').style.display = 'none';
    document.querySelector('.add_news').style.display = 'block';
    document.querySelector('.add-title').value = '';
    document.querySelector('.add-content').value = '';
    document.querySelector('.add-tags').value = '';
}

function addPost() {
    console.log(document.querySelector('.add-title').value);
    articleModel.addArticle({title: document.querySelector('.add-title').value,
                             author: user,
                             content: document.querySelector('.add-content').value}).then(
        () => {
            articleModel.getFromStorage().then(
                resolve => {
                    let arts = resolve;
                    articleRenderer.init('.news');
                    /* Нарисуем статьи из массива GLOBAL_ARTICLES в DOM */
                    articleRenderer.removeArticlesFromDom();
                    articleRenderer.insertArticlesInDOM(arts);

                }
            )
        }
    );
    document.querySelector('.main-page').style.display = 'inline-block';
    document.querySelector('.add_news').style.display = 'none';
}