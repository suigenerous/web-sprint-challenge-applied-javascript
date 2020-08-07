// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(function (response) {
      const bootstrapArr = response.data.articles.bootstrap;
      const javascriptArr = response.data.articles.javascript;
      const jqueryArr = response.data.articles.jquery;
      const nodeArr = response.data.articles.node;
      const technologyArr = response.data.articles.technology;

      function createCard(topicArrObj){
          const cardDiv = document.createElement('div');
          cardDiv.className = 'card';

          const headlineDiv = document.createElement('div');
          headlineDiv.className = 'headline';
          headlineDiv.textContent = topicArrObj.headline;
          cardDiv.appendChild(headlineDiv);

          const authorDiv = document.createElement('div');
          authorDiv.className = 'author';
          const imgDiv = document.createElement('img');
          imgDiv.className = 'img-container';
          imgDiv.src = topicArrObj.authorPhoto;
          authorDiv.appendChild(imgDiv);
          const authorSpan = document.createElement('span');
          authorSpan.textContent = `By ${topicArrObj.authorName}`;
          authorDiv.appendChild(authorSpan);
          cardDiv.appendChild(authorDiv);

          cardDiv.addEventListener('click', event =>{
              console.log(event.target.firstChild.textContent);
          } )

          document.querySelector('.cards-container').appendChild(cardDiv);
      }
      bootstrapArr.forEach(article => createCard(article));
      javascriptArr.forEach(article => createCard(article));
      jqueryArr.forEach(article => createCard(article));
      nodeArr.forEach(article => createCard(article));
      technologyArr.forEach(article => createCard(article));
  })
  .catch(function (error) {
    console.log(error);
  });