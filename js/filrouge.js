

ajaxGet("http://145.239.32.254:8081/basketball/equipes", function (reponse) {
   
// Transforme la réponse en tableau d'objets JavaScript
    var equipes = JSON.parse(reponse);
   
 // fonction equipe
    equipes.forEach(function (equipe) {
       
 //creation de la div
        var divJoueurs = document.createElement ("div");
        divJoueurs.id = equipe.nom;
        divJoueurs.classList.add("equipes") 
        document.getElementById("blocPage").appendChild(divJoueurs);

//creation id equipe
       var idEquipe = equipe.id ;

//creation de ul
        var ulJoueur = document.createElement("ul"); 
        ulJoueur.id = "ul" + equipe.nom;
        document.getElementById(equipe.nom).appendChild(ulJoueur); 
       
 // creation de li nom equipe
        var liJoueurs = document.createElement("li");
        liJoueurs.textContent = equipe.nom;
        liJoueurs.title = "NOM DE L'EQUIPE";
        
        document.getElementById("ul" + equipe.nom).appendChild (liJoueurs);

 // creation de li localisation
        var liLocalisations = document.createElement("li");
        liLocalisations.textContent = equipe.localisations;
        liLocalisations.title = "LOCALISATION"
        document.getElementById("ul" + equipe.nom).appendChild(liLocalisations);

        // creation de la division
        var liDivision = document.createElement("li");
        liDivision.textContent = equipe.division ;
        liDivision.title = "DIVISION DE L'EQUIPE" ;
        document.getElementById("ul" + equipe.nom).appendChild(liDivision);

 // creation de la date de cration
        let liCreation = document.createElement("li")
        liCreation.textContent = equipe.creation ;
        liCreation.title = "DATE DE CREATION"
        document.getElementById("ul" + equipe.nom).appendChild(liCreation);

 //creation des couleurs
        var liCouleur = document.createElement("li");
        liCouleur.textContent = equipe.couleurs ;
        liCouleur.title = "COULEURS"
        document.getElementById("ul" + equipe.nom).appendChild(liCouleur); 

      
        
//creation du logo
        var liLogo = document.createElement("p");
        liLogo.id = "li" + idEquipe
        document.getElementById("ul" + equipe.nom).appendChild(liLogo);
       
        var aLogo = document.createElement("img");
        aLogo.src = equipe.logo ;
        aLogo.textContent = equipe.logo ;
        aLogo.id = "img";
        document.getElementById("ul" + equipe.nom).appendChild(aLogo);

// effectif de lequipe
        var effectif = document.createElement ("nav");
        effectif.textContent = "EFFECTIF DE L'EQUIPE :" ;
        effectif.id = "effectif" + equipe.nom;
        document.getElementById("ul" + equipe.nom).appendChild(effectif);
 
//fonction pour les joueurs        
        ajaxGet("http://145.239.32.254:8081/basketball/joueurs", function (reponse) {
            // Transforme la réponse en tableau d'objets JavaScript
            var joueurs = JSON.parse(reponse);
            
            joueurs.forEach(function (joueur) {
             
                if (joueur.equipe === equipe.id ) {
                    console.log (joueur.nom)
                    console.log(joueur.position);
                    
                    //nom du joueur
                    var liNomJoueur = document.createElement("li");
                    liNomJoueur.textContent = joueur.nom
                    liNomJoueur.title = "NOM DU JOUEUR";
                    liNomJoueur.classList.add("joueurs");
                    document.getElementById("ul" + equipe.nom).appendChild(liNomJoueur)

                  //poste
                    var liPosteJoueur = document.createElement("li");
                    liPosteJoueur.textContent = joueur.position
                    liPosteJoueur.title = "POSTE";
                    liPosteJoueur.classList.add("joueurs");
                    document.getElementById("ul" + equipe.nom).appendChild(liPosteJoueur)

                    //numero
                    var liNumero = document.createElement("li");
                    liNumero.textContent = joueur.No
                    liNumero.title = "NUMERO";
                    liNumero.classList.add("joueurs");
                    document.getElementById("ul" + equipe.nom).appendChild(liNumero)

                    //taille
                    var liTaille = document.createElement("li");
                    liTaille.textContent = joueur.taille + "cm"
                    liTaille.title = "TAILLE";
                    liTaille.classList.add("joueurs");
                    document.getElementById("ul" + equipe.nom).appendChild(liTaille)

                    //poid
                    var liPoid = document.createElement("li");
                    liPoid.textContent = joueur.poid
                    liPoid.title = "POID";
                    liPoid.classList.add("joueurs");
                    document.getElementById("ul" + equipe.nom).appendChild(liPoid)


                }});
            })
    })
    
    });

/*ajaxGet("http://145.239.32.254:8081/basketball/joueurs", function (reponse) {
    // Transforme la réponse en tableau d'objets JavaScript
    var joueurs = JSON.parse(reponse);
    // Affiche le titre de chaque film
    joueurs.forEach(function (joueur) {

        //creation de la div
        var divJoueurs = document.createElement ("div");
        divJoueurs.id = joueur.nom;
        divJoueurs.classList.add("joueurs") 
        document.getElementById("blocPage").appendChild(divJoueurs);
      
        //creation de ul
        var ulJoueur = document.createElement("ul"); 
        ulJoueur.id = "ul" + joueur.nom
        ulJoueur.style.color = "red" ;
        document.getElementById(joueur.nom).appendChild(ulJoueur); 
       
        // creation de li nom equipe
        var liJoueurs = document.createElement("li");
        var idJoueurs = joueur.id ;
     liJoueurs.textContent = joueur.nom;
     liJoueurs.title = "NOM DE L'EQUIPE"
        document.getElementById(blocPage).appendChild(liJoueurs);
    
    })
});
*/

   

