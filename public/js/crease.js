/**
 * Created by kostya on 24.3.17.
 */

function increase() {
    var arr1 = document.querySelectorAll('.image');
    var arr2 = document.querySelectorAll('.box-thumb p.descript');
    var arr3 = document.querySelectorAll('.wrapper');
    for(var i = 0; i < arr1.length; i++)
    {
        arr1[i].setAttribute('width', '1000px');
        arr3[i].style.height = '100%';
        arr3[i].style.width = '90%';
        arr2[i].style.font = '300 1.9rem/140% "Exo 2", Tahoma, Verdana, Segoe, sans-serif';
        arr3[i].style.font = '300 1.3rem/140% "Exo 2", Tahoma, Verdana, Segoe, sans-serif';
    }
    document.querySelector('.decrease').style.visibility = 'visible';
    document.querySelector('.increase').style.visibility = 'hidden';
}

function decrease() {
    var arr1 = document.querySelectorAll('.image');
    var arr2 = document.querySelectorAll('.box-thumb p.descript');
    var arr3 = document.querySelectorAll('.wrapper');
    for(var i = 0; i < arr1.length; i++)
    {
        arr1[i].setAttribute('width', '360px');
        arr3[i].style.height = '24vmax';
        arr3[i].style.width = '28vmax';
        arr2[i].style.font = '300 1.3rem/140% "Exo 2", Tahoma, Verdana, Segoe, sans-serif';
        arr3[i].style.font = '300 1rem/140% "Exo 2", Tahoma, Verdana, Segoe, sans-serif';
    }
    document.querySelector('.decrease').style.visibility = 'hidden';
    document.querySelector('.increase').style.visibility = 'visible';
}