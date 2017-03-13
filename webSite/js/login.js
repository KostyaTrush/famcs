/**
 * Created by kostya on 13.3.17.
 */

var user = null;

function choiceName(user_name) {
    if(typeof user_name == "string")
        return user_name;
}

function login() {
    if (user != null) {
        document.querySelector('.user').innerHTML = 'Hi, ' + user;
        document.querySelector('.addNews').style.visibility = 'visible';
    }
}

function task5(user_name) {
    user = choiceName(user_name);
    login();
}
