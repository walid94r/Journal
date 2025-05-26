function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 

      let automobileContainer = document.getElementById(`automobile-container`)
      console.log(automobileContainer);

  

  let autoCard = document.createElement(`header`)
      

   let grandTitre = document.createElement(`h1`)
   
   let pPhrase = document.createElement(`p1`)
  
   let ptexteAppelAction = document.createElement(`p2`)
  
   let pTitre = document.createElement(`h2`)
  
   let pDescription = document.createElement(`p3`)
   
   let pDate = document.createElement(`p4`)
   
   let pTheme = document.createElement(`p5`)

   let pImage = document.createElement(`img`)
     

   
   
   grandTitre.textContent = data.journal.nomJournal;

   pPhrase.textContent = data.journal.phraseAccroche;

   ptexteAppelAction.textContent = data.journal.texteAppelAction;

   pTitre.textContent = data.journal.articlePrincipal.titre;

   pDescription.textContent = data.journal.articlePrincipal.description;

   pDate.textContent = data.journal.articlePrincipal.date;

   pTheme.textContent = data.journal.articlePrincipal.theme;




   autoCard.appendChild(grandTitre)

   autoCard.appendChild(pPhrase)

   autoCard.appendChild(ptexteAppelAction)

   autoCard.appendChild(pTitre)

   autoCard.appendChild(pDescription)

   autoCard.appendChild(pDate)

   autoCard.appendChild(pTheme)

   automobileContainer.appendChild(autoCard)
   
       

      let  articles = data.journal.articles
       

   articles.forEach( article => {

  

    let automobileCard = document.createElement(`div`)
      

   pTitre = document.createElement(`h3`)
   
   pDescription = document.createElement(`p3`)
  
   pDate = document.createElement(`p4`)
  
   pTheme = document.createElement(`p5`)

   pImage = document.createElement(`img`)
   



   pTitre.textContent = article.titre;

   pDate.textContent = article.date;
   
   pTheme.textContent = article.theme;

   pImage.src = article.image;

   pImage.alt = pTitre; 
   
     
   
   
      



   automobileCard.appendChild(pTitre)

   automobileCard.appendChild(pDate)

   automobileCard.appendChild(pTheme)
   
   automobileCard.appendChild(pImage)

        automobileContainer.appendChild(automobileCard) 
  

});

let themes = data.journal.themes
console.log(themes);

let voitureContainer = document.getElementById(`voiture-container`);
console.log(voitureContainer);




themes.forEach(theme => {
  

let voitureCard = document.createElement(`div`);




let pnom = document.createElement(`h3`);

pDescription = document.createElement(`p3`);


pnom.textContent = theme.nom;

pDescription.textContent = theme.description;


voitureCard.appendChild(pnom);

voitureCard.appendChild(pDescription);

voitureContainer.appendChild(voitureCard);

});





let auteurs = data.journal.auteurs;
console.log(auteurs);


let auteurContainer = document.getElementById(`auteur-container`);
console.log(auteurContainer);

auteurs.forEach(auteur => {
  





let auteurCard = document.createElement(`div`);


let Pprenom = document.createElement(`h4`);


let typeExperience = document.createElement(`p`);


let presentation = document.createElement(`p`);




Pprenom.textContent = auteur.prenom;

typeExperience.textContent = auteur.typeExperience;

presentation.textContent = auteur.presentation;




auteurCard.appendChild(Pprenom);

auteurCard.appendChild(typeExperience);
      
auteurCard.appendChild(presentation);

auteurContainer.appendChild(auteurCard);


});



       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici