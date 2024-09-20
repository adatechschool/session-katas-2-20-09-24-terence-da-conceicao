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
