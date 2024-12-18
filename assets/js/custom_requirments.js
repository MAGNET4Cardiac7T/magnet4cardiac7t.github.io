
// Req 1: https://chat.informatik.uni-wuerzburg.de/direct/DvhEZoMSWXK25fR94pFQ6ZHb6pNnLgY5oX?msg=7iRQKqBTTarKrJP3N
let nav_links = $('li.masthead__menu-item a');
for(let i = 0; i < nav_links.length; i++){
    let label = nav_links[i].innerHTML;
    if (label === 'Spring School 2025'){
        nav_links[i].style.fontWeight =  "bold";
        nav_links[i].style.color =  "black";
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


// req
let fullCalendarElement = document.querySelector('full-calendar')
fullCalendarElement.options = {
    initialView: 'timeGridWeek',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,timeGridDay'
      },
    events: [{
        title: 'My name is khan',
        start: '2024-12-18T16:00:00',
        end: '2024-12-18T19:00:00'
    }]
}
