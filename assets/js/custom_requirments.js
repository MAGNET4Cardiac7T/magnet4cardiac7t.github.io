
// Req 1: https://chat.informatik.uni-wuerzburg.de/direct/DvhEZoMSWXK25fR94pFQ6ZHb6pNnLgY5oX?msg=7iRQKqBTTarKrJP3N
let nav_links = $('li.masthead__menu-item a');
for(let i = 0; i < nav_links.length; i++){
    let label = nav_links[i].innerHTML;
    if (label === 'Spring School 2025'){
        nav_links[i].style.fontWeight =  "bold";
    }
}


// Req 2: Making the sidebar nav links to be underlined when the cursor hovers over them
let side_bar_nav_links = $('ul.nav__items li ul li');
for(let i = 0; i < side_bar_nav_links.length; i++) {

    side_bar_nav_links[i].onmouseenter = (e) => {
        side_bar_nav_links[i].style.textDecoration = "underline";
    };

    side_bar_nav_links[i].onmouseleave =  (e) => {
        side_bar_nav_links[i].style.textDecoration = "none";
    };
}