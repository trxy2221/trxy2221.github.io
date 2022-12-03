var menuOpen = false;

function showMenuItem(event){
    event.stopPropagation();
    let menuItems = $('nav > a:not(:first-of-type)');
    if (menuOpen) {
        menuItems.css('display', 'none');
        $('nav > a > span').removeClass('rotated');
        menuOpen = false;
    } else {
        menuItems.css('display', 'inline');
        $('nav > a > span').addClass('rotated');
        menuOpen = true;
    }
    
}
function hideMenuItem(){
    let menuItems = $('nav > a:not(:first-of-type)');
    menuItems.css('display', 'none');
    menuOpen = false;
}
window.onload = function(){
    $('nav > a:first-of-type').on('click', showMenuItem);
    $(document).on('click', hideMenuItem);
}