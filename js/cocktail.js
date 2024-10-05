let currentIndex = 0;

fetch('cocktail.json')
    .then(response => response.json()) 
    .then(data => {
        const cocktails = data.cocktails;
        const cocktailList = document.getElementById('cocktail-list');

        cocktails.forEach((cocktail, index) => {
            const cocktailDiv = document.createElement('div');
            cocktailDiv.classList.add('cocktail-container', 'mySlides');
            
            const cocktailContent = document.createElement('div');
            cocktailContent.classList.add('cocktail-content');

            const cocktailImg = document.createElement('img');
            cocktailImg.src = cocktail.image;
            cocktailImg.alt = cocktail.name;
            cocktailImg.classList.add('cocktail-image');
            cocktailContent.appendChild(cocktailImg);

            const cocktailDetails = document.createElement('div');
            cocktailDetails.classList.add('cocktail-details');

            const cocktailTitle = document.createElement('h1');
            cocktailTitle.innerText = cocktail.name;
            cocktailDetails.appendChild(cocktailTitle);
     
            const ingredientsTitle = document.createElement('h2');
            ingredientsTitle.innerHTML = `<strong>材料：</strong><br>` ;
            const ingredientsList = document.createElement('ul');
            cocktail.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.innerText = `${ingredient.name}: ${ingredient.amount}`;
                ingredientsList.appendChild(listItem);
            });
            cocktailDetails.appendChild(ingredientsTitle);
            cocktailDetails.appendChild(ingredientsList);

            const methodTitle = document.createElement('h2');
            const methodParagraph = document.createElement('ol');

            methodTitle.innerHTML = `<strong>做法：</strong><br>`;
            cocktail.method.forEach(method => {
                const listItem = document.createElement('li');
                listItem.innerText = `${method}`;
                methodParagraph.appendChild(listItem);
            });
            cocktailDetails.appendChild(methodTitle);
            cocktailDetails.appendChild(methodParagraph);

            cocktailContent.appendChild(cocktailDetails);
            cocktailDiv.appendChild(cocktailContent);
            cocktailList.appendChild(cocktailDiv);

 
            if (index === 0) {
                cocktailDiv.classList.add('active');
            }
        });


        showSlides();
    })
    .catch(error => console.error('Error fetching cocktail data:', error));

function showSlides() {
    const slides = document.querySelectorAll('.mySlides');
    

    slides[currentIndex].classList.remove('active');
    
    slides[currentIndex].style.display = 'none'; 

    

    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; 
    }

    slides[currentIndex].style.display = 'block'; 
    setTimeout(() => {
        slides[currentIndex].classList.add('active'); 
    }, 50); 
    setTimeout(showSlides, 5000);
}