/**
 * Created by kostya on 24.3.17.
 */

function deletePost() {
    document.querySelector('.main-page').style.display = 'inline-block';
    document.querySelector('.full-news').style.display = 'none';
    let ID = document.querySelector('.f-news').getAttribute('id');
    console.log(ID);
    articleModel.removeArticle(ID).then(
        article => {
            articleModel.getFromStorage().then(
                resolve => {
                    let arts = resolve;
                    articleRenderer.init('.news');
                    /* Нарисуем статьи из массива GLOBAL_ARTICLES в DOM */
                    articleRenderer.removeArticlesFromDom();
                    articleRenderer.insertArticlesInDOM(arts);
                }
            );
        }
    )
}


function edit() {
    document.querySelector('.full-news').style.display = 'none';
    document.querySelector('.add_news').style.display = 'block';
    let id = document.querySelector('.f-news').getAttribute('id');
    let article = articleModel.getArticle(id);
    articleModel.getArticle(id).then(
        article => {
            document.querySelector('.add-title').value = article.title;
            document.querySelector('.add-content').value = article.content;
            document.querySelector('.add-tags').value = article.tags.join(', ');
            document.querySelector('.add-post').removeAttribute('onclick');
            document.querySelector('.add-post').textContent = 'Редактировать новость';
            document.querySelector('.add-post').setAttribute('onclick', 'editPost()');
        }
    )
}

function editPost() {
    let id = document.querySelector('.f-news').getAttribute('id');
    articleModel.editArticle(id, {
        title: document.querySelector('.add-title').value,
        summary: document.querySelector('.add-title').value,
        content: document.querySelector('.add-content').value,
        author: user
    }).then(
        article => {
            articleModel.getArticle(id).then(
                article => {
                    document.querySelector('.title').textContent = article.title;
                    document.querySelector('.content').textContent = article.content;
                    document.querySelector('.add_news').style.display = 'none';
                    document.querySelector('.full-news').style.display = 'block';
                    document.querySelector('.add-post').removeAttribute('onclick');
                    document.querySelector('.add-post').textContent = 'Опубликовать новость';
                    document.querySelector('.add-post').setAttribute('onclick', 'addPost()');
                }
            );
        }
    );
}