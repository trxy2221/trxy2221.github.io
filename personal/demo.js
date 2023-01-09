let cur = 0;

function showMenuItems (event) {
    // event.stopPropagation();
    console.log(cur);
    // let menuItems = document.querySelectorAll('figure>img');
    let menuItems = $('figure>img');
    if(cur!=menuItems.length-1) {
        $(menuItems[cur]).removeClass('cur');
        $(menuItems[cur]).addClass('ncur');
        // menuItems[cur].style.display = 'none';
        $(menuItems[cur+1]).removeClass('ncur');
        $(menuItems[cur+1]).addClass('cur');
        // menuItems[cur+1].style.display = 'inline-block';
        cur++;
    } else {
        $(menuItems[cur]).removeClass('cur');
        $(menuItems[cur]).addClass('ncur');
        // menuItems[cur].style.display = 'none';
        $(menuItems[0]).removeClass('ncur');
        $(menuItems[0]).addClass('cur');
        // menuItems[0].style.display = 'inline-block';
        cur = 0;
    }
}

window.onload = function () {
    let figures = $("figure>img");
    figures.on('click', showMenuItems);
};
