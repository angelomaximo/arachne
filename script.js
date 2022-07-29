function Layer1(topLayer1, bottomLayer) {
    this.topLayer1 = topLayer1;
    this.bottomLayer = bottomLayer;
}

function Layer2(topLayer1, topLayer2, bottomLayer) {
    this.topLayer1 = topLayer1;
    this.topLayer2 = topLayer2;
    this.bottomLayer = bottomLayer;
}

function Layer3(topLayer1, topLayer2, topLayer3, bottomLayer) {
    this.topLayer1 = topLayer1;
    this.topLayer2 = topLayer2;
    this.topLayer3 = topLayer3;
    this.bottomLayer = bottomLayer;
}

function Layer4(topLayer1, topLayer2, topLayer3, topLayer4, bottomLayer) {
    this.topLayer1 = topLayer1;
    this.topLayer2 = topLayer2;
    this.topLayer3 = topLayer3;
    this.topLayer4 = topLayer4;
    this.bottomLayer = bottomLayer;
}

const casual = new Layer1('T-Shirt', 'trousers')

function displayAll(...elem) {
    let gigaText = '';
    let arr = elem;

    for (let i = 0; i < arr.length; i++) {
        gigaText += `<div class="cloth">
                        TopLayer1: ${arr[i].topLayer1} <br>
                        Color: Black <br>
                        Bottom: ${arr[i].bottomLayer} <br>
                    </div>
                    <hr>`;
                    console.log(arr[i].topLayer1)
    }

    return gigaText;
}

document.getElementById('mutate').innerHTML = displayAll(casual);









const tShirtColors = ['white', 'off white', 'black', 'new navy', 'blue',
                'stone', 'graywood', 'nori green', 'dry leaf']
const tShirtLongSleeve = ['black', 'blue', 'nori green'];
const turtleNeck = ['black', 'navy', 'dark blue', 'gray', 'brown']
const sweater = ['wine'];

const shirt = ['white', 'gray', 'black', 'navy', 'dark blue']

const britishBlazer = ['black', 'navy', 'gray']

const italianBlazer = ['black', 'navy', 'gray','dark green']

// BOTTOM
const everydayShort = ['black', 'nori green'];
