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
    articleModel.addArticle({
        id: ++articleModel.idItem,
        img: '1.png',
        title: document.querySelector('.add-title').value,
        summary: document.querySelector('.add-title').value,
        createdAt: new Date('2017-03-22T00:00:00'),
        author: user,
        content: document.querySelector('.add-content').value,
        tags: [
            document.querySelector('.add-tags').value
            ]
    });
    document.querySelector('.main-page').style.display = 'inline-block';
    document.querySelector('.add_news').style.display = 'none';
    articleModel.saveInStorage();
    renderArticles(0, 6);
}