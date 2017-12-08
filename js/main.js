var title = document.getElementById("a-title");
var text = document.getElementById("a-text");
var img = document.getElementById("a-img");
var i = 1;
var arrObj = [
    {
        title: "First",
        text: "First text",
    },
    {
        title: "Second",
        text: "Second text",
    },
    {
        title: "Third",
        text: "Third text",
    },
    {
        title: "Hard",
        text: "Bga text",
    },
];
title.innerHTML = arrObj[i].title;
text.innerHTML = arrObj[i].text;

function nextPage(){
    i++;
    if (i>arrObj.length - 1) {
        //alert ("Это последняя статья!"); 
        i = arrObj.length - 1;
        return;
        
    }

    title.innerHTML = arrObj[i].title;
    text.innerHTML = arrObj[i].text;
    //img.src = "img/223.jpg";
   // console.log(img);
}
function prevPage(){
    i--; 
    if (i<0) {
        //alert ("Это первая статья!"); 
        i = 0;
        return;
        
    }
    title.innerHTML = arrObj[i].title;
    text.innerHTML = arrObj[i].text;
}