const btns=document.querySelectorAll(".navbar-toggler-btn");for(let s=0;s<btns.length;s++){const t={open:"open-btn",close:"close-btn"};let n=t.open;btns[s].addEventListener("click",()=>{btns[s].classList.contains(t.open)?(btns[s].classList.remove(n),n=t.close):btns[s].classList.contains(t.close)&&(btns[s].classList.remove(n),n=t.open),btns[s].offsetWidth,btns[s].classList.add(n)})}