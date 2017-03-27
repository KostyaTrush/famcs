/**
 * Created by kostya on 26.3.17.
 */
function filterArticles() {
    var articles = articleModel.getArticles(0, articleModel.newsLength(), {
        author: document.querySelector('.filter-author').value,
        dateAfter: document.querySelector('.filter-data1').value,
        dateBefore: document.querySelector('.filter-data2').value,
        tags: [
            document.querySelector('.filter-tags').value
        ]
    });
    document.querySelector('.button-pag').style.visibility = 'hidden';
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