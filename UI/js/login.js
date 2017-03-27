/**
 * Created by kostya on 13.3.17.
 */
var user = localStorage.getItem('user');

if(user){
    document.querySelector('.user').innerHTML = 'Здравствуйте, ' + user;
    document.querySelector('.add-news').style.visibility = 'visible';
    document.querySelector('.main-page').style.display = 'inline-block';
    document.querySelector('.authorization').style.display = 'none';
    document.querySelector('.out').style.visibility = 'visible';
    document.querySelector('.login-button').style.marginLeft = '130px';
}

function login() {
    var name = document.querySelector('.login').value;
    var password = document.querySelector('.psswrd').value;
    if (userModel.check(name, password)) {
        user = name;
        localStorage.setItem('user', user);
        document.querySelector('.user').innerHTML = 'Здравствуйте, ' + user;
        document.querySelector('.add-news').style.visibility = 'visible';
        document.querySelector('.main-page').style.display = 'inline-block';
        document.querySelector('.authorization').style.display = 'none';
        document.querySelector('.out').style.visibility = 'visible';
        document.querySelector('.login-button').style.marginLeft = '130px';
    }else {
        alert('НЕВЕРНЫЕ ДАННЫЕ')
    }
}

function openMainPage() {
    if(user)
    {
        document.querySelector('.main-page').style.display = 'inline-block';
        document.querySelector('.authorization').style.display = 'none';
        document.querySelector('.add-news').style.visibility = 'visible';
        document.querySelector('.login-button').style.marginLeft = '1   30px';
        document.querySelector('.full-news').style.display = 'none';
        document.querySelector('.add_news').style.display = 'none';
        renderArticles(0, 6);
    }
    else{
        document.querySelector('.main-page').style.display = 'inline-block';
        document.querySelector('.authorization').style.display = 'none';
        document.querySelector('.add-news').style.visibility = 'hidden';
        document.querySelector('.login-button').style.marginLeft = '330px';
        document.querySelector('.full-news').style.display = 'none';
        document.querySelector('.add_news').style.display = 'none';
        renderArticles(0, 6);
    }
}

function openAuthorization() {
    localStorage.removeItem('user');
    user = localStorage.getItem('user');
    document.querySelector('.user').innerHTML = 'Войти';
    document.querySelector('.out').style.visibility = 'hidden';
    document.querySelector('.login').value = '';
    document.querySelector('.psswrd').value = '';
    document.querySelector('.main-page').style.display = 'none';
    document.querySelector('.authorization').style.display = 'block';
    document.querySelector('.login-button').style.marginLeft = '330px';
}
var viewNews = 6;

function showMore() {
    if(articleModel.newsLength()-viewNews >= 6) {
        renderArticles(articleModel.newsLength() - 6 - viewNews, 6);
    }else{
        renderArticles(0, articleModel.newsLength());
        document.querySelector('.button-pag').style.visibility = 'hidden';
    }
    viewNews += 6;
}

function task5(user_name) {
    user = choiceName(user_name);
    login();
}

var userModel = (function () {
    var users = [
        {
            userName: 'Труш',
            password: 'босс'
        },
        {
            userName: 'Фомкин',
            password: 'раб'
        },
        {
            userName: 'Анечка',
            password: 'дэнсер'
        }
    ];

    function check(name, psswrd) {
        for(var i =0 ;i < users.length;i++)
        {
            if(users[i].userName === name && users[i].password === psswrd){
                return true;
            }
        }
        return false;
    }

    return {
        check : check
    }
}());