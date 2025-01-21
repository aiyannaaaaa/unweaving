var textPath = document.querySelector("#text-path");

var textContainer = document.querySelector("#text-container");

var path = document.querySelector(textPath.getAttribute('href'));

var pathLength = path.getTotalLength();
console.log("path length: " + pathLength);

function updateTextPathOffset(offset){
    textPath.setAttribute('startOffset', offset);
}

updateTextPathOffset(10);

function onScroll(){
    requestAnimationFrame(function(){
        var rect = textContainer.getBoundingClientRect();
        console.log("rect y: " + rect.y );
        console.log("rect x: " + rect.x );
        var scrollPercent = (rect.y+rect.x) / window.innerHeight;
        console.log("scroll percent: " + scrollPercent);
   
        updateTextPathOffset(scrollPercent * pathLength*.5 );
    });
}

window.addEventListener('scroll', onScroll);
