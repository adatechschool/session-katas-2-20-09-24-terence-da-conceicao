/* possibilités : - 1 tableau pour chaque couleur, itérer dessus pour modifier les strings
pour chaque index afin de lui rajouter la valeur numérique (mais est-ce que les index d'un
tableau sont modifiables?)
- ou bien faire une grosse fonction en créant les index avec des interpolations ou
des regex, ou lui push un tableau qui se créer lui-même avec une range et des lettres
- ou juste une double boucle de tableaux de strings et concaténer les deux pour obtenir les
cartes en pushant vers un tableau mis en scope globale
*/



let deck = []

function createDeck () {

    let actualCard

    let values = ["1","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let colors = ["♠︎","♣︎","♡","♢"];

    //boucle de la couleur
    for (let i = 0; i < colors.length; i++) {
        console.log("On fait les ", colors[i])
        //boucle de la valeur
        for (let j = 0; j < values.length; j++) {
            actualCard = values[j] + colors[i] 
            deck.push(actualCard)
        }
    }
    console.log(deck)
    return
}

createDeck()


function shuffle(deckArg) {

    for (let i = 0; i < deckArg.length; i++) {
        let randomI =  Math.floor(Math.random() * (deckArg.length - 0));
        let temp = deckArg[i]; //garder en mémoire l'index actuel
        deckArg[i] = deckArg[randomI]; //remplacer l'index actuel par un index random
        deckArg[randomI] = temp; //l'index random devient l'index actuel. On a échangé 2 cartes
    }
    console.log(deckArg)

    //checker s'il n'y a pas de doublon. ECHEC CA NE MARCHE PAS
    // for (let i = 0; i < deckArg.length; i++) {
    //     for (let j = 1; j < deckArg.length - 2; j++) {
    //         if (deckArg[i] === deckArg[j]) {
    //             console.error('doublons dans le deck!', i , j)
    //         }
    //     }    
    // }
    return deckArg
}


    


   


shuffle(deck)







// ESSAI RATE
//function shuffle() {
//     console.log("test entrée shuffle")
    
//     for (let i = 0; i < deck; i++) {

//         // let randomIndex = Math.floor(Math.random() * (deck.length - 0));
//         // console.log("randomIndex = ", randomIndex)
//     //     if (deck.includes(deck[randomIndex])) {
//     //         console.log(randomIndex)
//     //         deck.push(deck[randomIndex])
            

//     //     } else {
//     //         console.log('ça ne marche pas')
//     //         shuffle()
//     //     }
//     // }
//     // console.log('deck = ', deck) 
//     // console.log("deck = ", deck)
// }}