// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const divHeader = document.createElement('div');
    divHeader.className = 'header';

    const headerDate = document.createElement('span');
    headerDate.className = 'date';
    headerDate.textContent = 'MARCH 28, 2020';
    divHeader.appendChild(headerDate);

    const headerH1 = document.createElement('h1');
    headerH1.textContent = 'Lambda Times';
    divHeader.appendChild(headerH1);

    const headerTemp = document.createElement('span');
    headerTemp.className = 'temp';
    headerTemp.textContent = '98°';
    divHeader.appendChild(headerTemp);

    return divHeader;
}

document.querySelector('.header-container').appendChild(Header());