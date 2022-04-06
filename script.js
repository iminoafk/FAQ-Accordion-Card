// séléctionne les réponses
const spans = document.querySelectorAll('span');
 
// séléctionne les questions
const p = document.querySelectorAll('p');
 
// séléctionne les questions icons
const arrows = document.getElementsByClassName("arrow");
 
// pour chaque questions:
for (let i = 0; i < p.length; i++) {
 
    let element = p[i];
     
    // cache la réponse
    spans[i].classList.add('hidden');
     
    // ajoute un écouteur de click sur la question:
    element.addEventListener('click', () => {
     
        // les questions qui sont active on une class "dark"
        // ici tu devrais sélectionner  "p.dark"
        // pour s'avoir si une question et déjà ouverte
         
        // vérifie si une question et déjà ouverte:
         
        const questionOpen = document.querySelector('p.dark');
         
        // si une question ouverte et trouvée
        if(questionOpen !== null) {
            // ferme la question ouverte:
             
            // séléctionne la réponse associé à la question:
            questionOpen.querySelector('span').classList.toggle('hidden');
             
            // séléctionne l'icon associé à la question
            questionOpen.querySelector('.arrow').classList.toggle('flip');
             

            questionOpen.classList.toggle('dark');
        }
         
         
        // affiche la réponse de la question cliquer:
         
        // affiche la réponse associé
        spans[i].classList.toggle('hidden');
         
        // change l'état de l'icon
        arrows[i].classList.toggle('flip');
         
        // change le style de la question
        p[i].classList.toggle('dark');
    });
}
