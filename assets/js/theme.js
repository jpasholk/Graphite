// var body = document.querySelector('body');
// const SWITCH = document.querySelector('.theme');

// function switchTheme() {
//     if (body.classList.contains("wht-bg")) {
//         localStorage.setItem("dark-mode", true);
//         body.classList.replace("wht-bg", "dk-grey-bg");
// //        body.classList.replace("blk-text", "wht-text");
//     }
//     else if (body.classList.contains("dk-grey-bg")) {
//         localStorage.removeItem("dark-mode");
//         body.classList.replace("dk-grey-bg", "wht-bg");
// //        body.classList.replace("wht-text", "blk-text");
//     };
// };

// if (localStorage.getItem("dark-mode")) {
//     switchTheme();
// };

// SWITCH.addEventListener("click", switchTheme, false);



// **************************************************************************
//Got it working, for the most part

//const body = document.querySelector('body');
//const links = document.querySelectorAll('article p a, article li a');
//
//document.querySelector('.theme').addEventListener("click", () => {
//    if (body.classList.contains("grey-bg")) {
//        body.classList.replace("grey-bg", "dk-grey-bg");
//        for(var i = 0; i < links.length; i++) { 
//            links[i].style.color = "#bac0ce";
//        };
//    }
//    else if (body.classList.contains("dk-grey-bg")) {
//        body.classList.replace("dk-grey-bg", "grey-bg");
//        for(var i = 0; i < links.length; i++) { 
//            links[i].style.color = "#61656e";
//        }
//    };
//});




// **************************************************************************


//Found this through Googling

//https://hashnode.com/post/what-are-some-ways-of-implementing-a-togglable-dark-mode-on-a-website-cj29zxf2x001eu3531okrty30
//document.querySelector(".js-change-theme").addEventListener("click", () => {
//  const body = document.querySelector("body");
//
//  if (body.classList.contains("t--light")) {
//    body.classList.remove("t--light");
//    body.classList.add("t--dark");
//  } else {
//    body.classList.remove("t--dark");
//    body.classList.add("t--light");
//  }
//});


// **************************************************************************


//Modified the colors

//document.body.style.backgroundColor = sessionStorage.getItem('bg');
//document.body.style.color = sessionStorage.getItem('cc');
//function theme() {
//     if ( sessionStorage.getItem('bg') === '#bac0ce') {
//        sessionStorage.setItem('bg', '#2f2c30');
//        sessionStorage.setItem('cc', '#bac0ce');
//     }
//    else if (sessionStorage.getItem('bg') == null || undefined) {
//        sessionStorage.setItem('bg', '#2f2c30');
//        sessionStorage.setItem('cc', '#bac0ce');
//    }
//    else if( sessionStorage.getItem('bg') === '#2f2c30') {
//        sessionStorage.setItem('bg', '#bac0ce');
//        sessionStorage.setItem('cc', '#2f2c30');
//    }
//document.body.style.backgroundColor = sessionStorage.getItem('bg');
//document.body.style.color = sessionStorage.getItem('cc');
//}


// **************************************************************************


//Started with this
//From: https://github.com/sharu725/hagura/blob/gh-pages/js/theme.js

//document.body.style.backgroundColor = sessionStorage.getItem('bg');
//document.body.style.color = sessionStorage.getItem('cc');
//function theme() {
//     if ( sessionStorage.getItem('bg') === 'rgb(255, 255, 255)') {
//        sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
//        sessionStorage.setItem('cc', '#777');
//     }
//    else if (sessionStorage.getItem('bg') == null || undefined) {
//        sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
//        sessionStorage.setItem('cc', '#777');
//    }
//    else if( sessionStorage.getItem('bg') === 'rgb(6, 23, 37)') {
//        sessionStorage.setItem('bg', 'rgb(255, 255, 255)');
//        sessionStorage.setItem('cc', '#333');
//    }
//document.body.style.backgroundColor = sessionStorage.getItem('bg');
//document.body.style.color = sessionStorage.getItem('cc');
//
//}
