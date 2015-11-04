if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 document.getElementById("sidebar").style.width = Math.round(document.documentElement.clientWidth * .1) + 'px';
}

var expand = 0;

document.getElementById("sidebar").addEventListener("click", function(){
 if(expand == 0) {
  document.getElementById("sidebar").style.width = Math.round(document.documentElement.clientWidth * 1) + 'px';
  expand = 1;
 }
 else {
  document.getElementById("sidebar").style.width = Math.round(document.documentElement.clientWidth * .1) + 'px';
  expand = 0;
 }
});

document.getElementById("about").style.textDecoration = "underline";
    
document.getElementById("about").addEventListener("click", function(){
        var source = "/about.html"
        document.getElementById('iframe').src = source;
        
        document.getElementById("about").style.textDecoration = "underline";
        document.getElementById("projects").style.textDecoration = "";
        document.getElementById("apps").style.textDecoration = "";
        document.getElementById("walls").style.textDecoration = "";
        document.getElementById("community").style.textDecoration = "";
      });
      document.getElementById("projects").addEventListener("click", function(){
        var source = "/index.html"
        document.getElementById('iframe').src = source;
        
        document.getElementById("about").style.textDecoration = "";
        document.getElementById("projects").style.textDecoration = "underline";
        document.getElementById("apps").style.textDecoration = "";
        document.getElementById("walls").style.textDecoration = "";
        document.getElementById("community").style.textDecoration = "";
      });
      document.getElementById("apps").addEventListener("click", function(){
        var source = "/index.html"
        document.getElementById('iframe').src = source;
        
        document.getElementById("about").style.textDecoration = "";
        document.getElementById("projects").style.textDecoration = "";
        document.getElementById("apps").style.textDecoration = "underline";
        document.getElementById("walls").style.textDecoration = "";
        document.getElementById("community").style.textDecoration = "";
      });
      document.getElementById("walls").addEventListener("click", function(){
        var source = "/wallpapers.html"
        document.getElementById('iframe').src = source;
        
        document.getElementById("about").style.textDecoration = "";
        document.getElementById("projects").style.textDecoration = "";
        document.getElementById("apps").style.textDecoration = "";
        document.getElementById("walls").style.textDecoration = "underline";
        document.getElementById("community").style.textDecoration = "";
      });
      document.getElementById("community").addEventListener("click", function(){
        var source = "/index.html"
        document.getElementById('iframe').src = source;
        
        document.getElementById("about").style.textDecoration = "";
        document.getElementById("projects").style.textDecoration = "";
        document.getElementById("apps").style.textDecoration = "";
        document.getElementById("walls").style.textDecoration = "";
        document.getElementById("community").style.textDecoration = "underline";
      });
