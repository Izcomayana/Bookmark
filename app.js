const PageState = function () {
  let currentState = new simpleBookmark(this);

  this.init = function () {
    this.change(new simpleBookmark);
  }

  this.change = function (state) {
    currentState = state;
  }
}

// Mobile Nav Page
const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

let showMenu = false;

hamburgerIcon.addEventListener('click', toggleMenu);

function toggleMenu () {
  if(!showMenu) {
    hamburger.classList.add('open');
    mobileNav.classList.add('open');

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');

    showMenu = false;
  }
}

// Simple Bookmarking Page
const simpleBookmark =  function (page) {
  document.querySelector('.bookmark-click-header').textContent = 'Bookmark in one click';
  document.querySelector('.paragraph-3').innerHTML = `
    <p class="paragraph-3">
      Organize your bookmarks however you like. Our simple drag-and-drop
      interface gives you complete control over how you manage your
      favourite sites.
    </p>
  `;
};

// Speedy Search Page
const speedySearch = function (page) {
  document.querySelector('.bookmark-click-header').textContent = 'Intelligent search';
  document.querySelector('.paragraph-3').innerHTML = `
    <p class="paragraph-3">
      Our powerful search feature will help you find saved sites in no
      time at all. No need to trawl through all of your bookmarks.
    </p>
  `;
};

// Sharing Bookmark Page
const shareBookmark = function (page) {
  document.querySelector('.bookmark-click-header').textContent = 'Share your bookmarks';
  document.querySelector('.paragraph-3').innerHTML = `
    <p class="paragraph-3">
      Easily share your bookmarks and collections with others. Create a
      shareable link that you can send at the click of a button.
    </p>
  `;
};

// Instantiate pageState
const page = new PageState();

// Init page state
page.init();

// UI Vars
const simpleBookmarking = document.querySelector('.link1'),
      speedySearching = document.querySelector('.link2'),
      easySharing = document.querySelector('.link3');

// Simple Bookmarking
simpleBookmarking.addEventListener('click', (e) => {
  page.change(new simpleBookmark);

  e.preventDefault();
});

// Speedy Searching
speedySearching.addEventListener('click', (e) => {
    page.change(new speedySearch);


  e.preventDefault();
});

// Easy Sharing
easySharing.addEventListener('click', (e) => {
  page.change(new shareBookmark);

  e.preventDefault();
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
