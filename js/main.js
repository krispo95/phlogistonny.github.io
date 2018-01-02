var ARTICLES_KEY = "articles";

var articles = localStorage.getItem(ARTICLES_KEY);
if (articles == null) {
    articles = [
        {
            title: "First",
            text: "First text",
        },
    ];
} else {
    articles = JSON.parse(articles);
}

var title = document.getElementById("a-title");
var text = document.getElementById("a-text");
var img = document.getElementById("a-img");
var popup = document.getElementById("a-popup");
var inputArticle = document.getElementById("input-article");
var inputTitle = document.getElementById("input-title");

var selectedArticle = 0;
title.innerHTML = articles[selectedArticle].title;
text.innerHTML = articles[selectedArticle].text;

function nextPage() {
    selectedArticle++;
    if (selectedArticle > articles.length - 1) {
        //alert ("Это последняя статья!"); 
        selectedArticle = articles.length - 1;
        return;

    }

    title.innerHTML = articles[selectedArticle].title;
    text.innerHTML = articles[selectedArticle].text;
    //img.src = "img/223.jpg";
    // console.log(img);
}
function prevPage() {
    selectedArticle--;
    if (selectedArticle < 0) {
        //alert ("Это первая статья!"); 
        selectedArticle = 0;
        return;

    }
    title.innerHTML = articles[selectedArticle].title;
    text.innerHTML = articles[selectedArticle].text;
}
function showPopup() {
    popup.style.visibility = "visible"
}
function closePopup() {
    popup.style.visibility = "hidden"
}
function addArticle() {
    articles.push({
        title: inputTitle.value,
        text: inputArticle.value,
    });
    localStorage.setItem(ARTICLES_KEY, JSON.stringify(articles));
    closePopup();
    selectedArticle = articles.length - 1;
}