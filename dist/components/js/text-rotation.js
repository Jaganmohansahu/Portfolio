"use strict";var words=document.querySelectorAll(".word");words.forEach((function(e){var t=e.textContent.split("");e.textContent="",t.forEach((function(t){var r=document.createElement("span");r.textContent=t,r.className="letter",e.append(r)}))}));var currentWordIndex=0,maxWordIndex=words.length-1;words[currentWordIndex].style.opacity="1";var rotateText=function(){var e=words[currentWordIndex],t=currentWordIndex===maxWordIndex?words[0]:words[currentWordIndex+1];Array.from(e.children).forEach((function(e,t){setTimeout((function(){e.className="letter out"}),80*t)})),t.style.opacity="1",Array.from(t.children).forEach((function(e,t){e.className="letter behind",setTimeout((function(){e.className="letter in font-weight-bold"}),340+80*t)})),currentWordIndex=currentWordIndex===maxWordIndex?0:currentWordIndex+1};rotateText(),setInterval(rotateText,4e3);