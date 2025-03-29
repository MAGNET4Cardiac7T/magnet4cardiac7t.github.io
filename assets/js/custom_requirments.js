
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


// Req 3: Make the sidebar disappear when clicked on the hamburger button.
let sideBarMenuToggleBtn = $('#sidebar-menu-toggle')[0];
let sideBarNav = $('#sidebar-nav');
let navigationItems = $('.nav__items');
let sidebarToggled = false;

let toggleHandler = (e) => {

    if ( navigationItems.css('opacity') == 0 && sidebarToggled == false ) {
        navigationItems.css('max-height', 'max-content');
        navigationItems.css('opacity', '100');
    }
    else {
        sideBarNav.slideToggle();
    }

    sidebarToggled = !sidebarToggled;

};


sideBarMenuToggleBtn.onclick = toggleHandler;


// Req 4: Hide/unhide more blog items if clicked on the "More" link

let hiddenBlogItems = $('.hidden_blog_item');
let moreLink = $('#blog_more_link')[0];
let blogItemsVisible = false;

moreLink.onclick = (e) => {
  for (let i = 0; i < hiddenBlogItems.length; i++){
      if (!blogItemsVisible){
          moreLink.innerHTML = 'Show Less'
          hiddenBlogItems[i].classList.remove('hidden');
      }
      else {
          moreLink.innerHTML = 'Show More'
          hiddenBlogItems[i].classList.add('hidden');
      }
  }

  blogItemsVisible = !blogItemsVisible;

};


// Deployment ID: AKfycbwPytHimgitFfUgjYfI3rytATE94LLBCdBXLPJZDCyEu0LrGbqebaeS0itp8AudAwdR
// Web App URL : https://script.google.com/macros/s/AKfycbwPytHimgitFfUgjYfI3rytATE94LLBCdBXLPJZDCyEu0LrGbqebaeS0itp8AudAwdR/exec


function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const email = data.get('email');
  const name = data.get('name');
  const message = data.get('message');

  const json_data = JSON.stringify({'email': email, 'name': name, 'message': message});

  $.post("https://script.google.com/macros/s/AKfycbyu8ERp-DXzkeiXwugR_z-j3ZNbUGIPRmrXg95RazDqzjDIH4jRyY4JjT_PwIz-QjXv/exec", json_data).done( () => {
      alert('Thank you. We have recorded your message.');
  });
}

const form = document.querySelector('form');
if (form){
    form.addEventListener('submit', handleSubmit);
}






// Requirement: To make calendar events clickable and navigate to the corresponding event details on detailed_program_schedule page.
const fullCalendarElement = document.querySelector('full-calendar');
if (fullCalendarElement) {

    const all_events = fullCalendarElement.options.events;
    const all_events_elements = fullCalendarElement.shadowRoot.querySelectorAll('.fc-event-time');
    for (let i = 0; i < all_events_elements.length; i++) {
        all_events_elements[i].parentElement.parentElement.parentElement.href = '/spring_school_2025/detailed_program_schedule/?event_id=' + all_events[i]['id'];
    }
}

s = new URLSearchParams(window.location.search)
if (s.get('event_id')){
    let event_id = s.get('event_id');
    const event = $(`[id=${event_id}]`);
    setTimeout(() => {
        event[0].scrollIntoView();
    }, 200);
}



const pdfFiles = [
    // { url: "/assets/posters/test.pdf", name: "Document 1" },
];

function renderPDF(url, canvasElement) {
    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(pdf => {
        pdf.getPage(1).then(page => {
            const scale = 1.5;
            const viewport = page.getViewport({ scale });
            const context = canvasElement.getContext('2d');
            canvasElement.height = viewport.height;
            canvasElement.width = viewport.width;

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);
        });
    });
}

function loadPDFs() {
    const grid = document.getElementById("pdf-grid");

    pdfFiles.forEach(file => {
        const box = document.createElement("div");
        box.classList.add("pdf-box");

        const canvas = document.createElement("canvas");
        renderPDF(file.url, canvas);

        const button = document.createElement("button");
        button.textContent = "Download";
        button.onclick = () => window.open(file.url, "_blank");
        button.classList.add("btn","btn-primary");

        box.appendChild(canvas);
        box.appendChild(button);
        grid.appendChild(box);
    });
}

loadPDFs();
