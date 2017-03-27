/**
 * Created by kostya on 24.3.17.
 */
function deletePost() {
    articleModel.removeArticle(document.querySelector('.f-news').getAttribute('id'));
    document.querySelector('.main-page').style.display = 'inline-block';
    document.querySelector('.full-news').style.display = 'none';
    articleModel.saveInStorage();
    renderArticles(0, 6);
}


function edit() {
    document.querySelector('.full-news').style.display = 'none';
    document.querySelector('.add_news').style.display = 'block';
    var id = document.querySelector('.f-news').getAttribute('id');
    var article = articleModel.getArticle(id);
    document.querySelector('.add-title').value = article.title;
    document.querySelector('.add-content').value = article.content;
    document.querySelector('.add-tags').value = article.tags.join(', ');
    document.querySelector('.add-post').removeAttribute('onclick');
    document.querySelector('.add-post').textContent = 'Редактировать новость';
    document.querySelector('.add-post').setAttribute('onclick', 'editPost()');
}

function editPost() {
    var id = document.querySelector('.f-news').getAttribute('id');
    articleModel.editArticle(id, {
        title: document.querySelector('.add-title').value,
        summary: document.querySelector('.add-title').value,
        content: document.querySelector('.add-content').value
    });
    var article = articleModel.getArticle(id);
    document.querySelector('.title').textContent = article.title;
    document.querySelector('.content').textContent = article.content;
    document.querySelector('.add_news').style.display = 'none';
    document.querySelector('.full-news').style.display = 'block';
    articleModel.saveInStorage();
    renderArticles(0, 6);
}