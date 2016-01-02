

(function myBlog(){

  var app = {
    myDOMapi: domApiFunc(),
    addSections: addSectionsFunc,
    mainContainer: null,
    init: init    
}

app.init();

function init() {

  var xmlhttp = new XMLHttpRequest();
  var url = "app/blogs.txt";
    
  xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var myArr = JSON.parse(xmlhttp.responseText);
       // this.addSections(myArr);
       console.log(myArr);
      }
    };
    xmlhttp.open("GET", url, true);
    
    xmlhttp.send();
}

function addSectionsFunc(sections){
   this.mainContainer = this.myDOMapi.getSectionContainer('article_container');
  
    function addItemHTML(item){
      this.mainContainer.innerHTML += item;
    }

    this.myDOMapi.addItems(sections, addItemHTML.bind(this));
}

function domApiFunc(){
  function getSectionContainer(id){
    return document.getElementById(id);
  }
  function addItems(items, callBack){
    for (var i = 0; i < items.length; i++) {
        callBack('<section><header class="article_header spase_between"><section><header class="article_header spase_between"><h4 class="title">'+items[i].title+'</h4><a href="#"><div class="icon"><span class="icon-file-text2"></div></span></a></header></section>');
    };
  }
  var publicAPI = {
    getSectionContainer: getSectionContainer,
    addItems: addItems
  }
  return publicAPI;
};

})();