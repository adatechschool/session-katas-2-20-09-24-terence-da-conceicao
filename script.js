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
    
}

createDeck()
