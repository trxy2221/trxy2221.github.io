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
    figures.on('click', showMenuItems);
};
