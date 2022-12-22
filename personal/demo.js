let cur = 0;

function showMenuItems (event) {
    // event.stopPropagation();
    console.log(cur);
    let menuItems = document.querySelectorAll('figure>img');
    if(cur!=menuItems.length-1) {
        menuItems[cur].style.display = 'none';
        menuItems[cur+1].style.display = 'inline-block';
        cur++;
    } else {
        menuItems[cur].style.display = 'none';
        menuItems[0].style.display = 'inline-block';
        cur = 0;
    }
}

window.onload = function () {
    let figures = $("figure>img");
    // while(1) setTimeout(function(){ showMenuItems() }, 3000)
    figures.on('click', showMenuItems);
};

// window.onload = function () {
//     let figures = $("img");
//     let alle = $("*").not("div:first");
//     figures.on('click', showMenuItems);
//     alle.on('click', hideMenuItems);
// };


// function hideMenuItems () {
//     let menuItems = 
//         document.querySelectorAll('div:not(:first-of-type)');
//     for(let i=0; i<menuItems.length; i++) {
//         let item = menuItems[i];
//         item.style.display = 'none';
//     }
// }