/**
 * Created by kostya on 23.3.17.
 */
function findNews(el) {
    var article = articleModel.getArticle(el.dataset.id);
    document.querySelector('.main-page').style.display = 'none';
    document.querySelector('.full-news').style.display = 'block';
    document.querySelector('.f-news').setAttribute('id', article.id);
    document.querySelector('.title').textContent = article.title;
    document.querySelector('.fimage').setAttribute('src', article.img);
    document.querySelector('.content').textContent = article.content;
    document.querySelector('.ath').textContent = article.author;
    document.querySelector('.dat').textContent = formatDate(article.createdAt);
    document.querySelector('.ftag').textContent = article.tags.join(', ');
    window.scrollTo(0, 0);
    if (!user) {
        document.querySelector('.edit').style.visibility = 'hidden';
        document.querySelector('.del').style.visibility = 'hidden';
    }else
    {
        document.querySelector('.edit').style.visibility = 'visible';
        document.querySelector('.del').style.visibility = 'visible';
    }
}

function formatDate(d) {
    return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear() + ' ' +
        d.getHours() + ':' + d.getMinutes();
}