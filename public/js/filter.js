/**
 * Created by kostya on 26.3.17.
 */

function filterArticles() {
    let tags = document.querySelector('.filter-tags').value;
    let author = document.querySelector('.filter-author').value;
    let createdAt = document.querySelector('.filter-data2').value;
    let filterConfig = {};
    if(author)
        filterConfig.author = author;
    if(tags)
        filterConfig.tags = tags.split(", ");
    if(createdAt) {
        date = createdAt.split(".");
        filterConfig.createdAt = new Date(date[2], date[1] - 1, date[0]);
    }
    articleModel.getFromStorage().then(
        articles => {
            let filterNews =  articleModel.getArticles(0, articles.length, filterConfig, articles);
            document.querySelector('.button-pag').style.visibility = 'hidden';
            if (filterNews.length == 0) {
                document.querySelector('.main-page').style.display = 'none';
                document.querySelector('.error-page').style.display = 'block';
            } else {
                document.querySelector('.error-page').style.display = 'none';
                document.querySelector('.main-page').style.display = 'inline-block';
                articleRenderer.removeArticlesFromDom();
                articleRenderer.insertArticlesInDOM(filterNews);
            }
        }
    );
}