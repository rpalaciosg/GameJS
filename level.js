const ACTORS = {
    'o': Coin,
    '@': Player,
    '=': Lava,
    '|': Lava,
    'v': Lava
};
const MAX_STEP = 0.05;

function Level(plan) {
    this.width = plan[0].length;
    this.height = plan.length;
    this.status = null;
    this.finishDelay = null; //tiempo en que jugador muere y se reinicia el nivel

    this.grid = [];
    this.actors = [];

    for (let y = 0; y < this.height; y++) {
        let line = plan[y];
        let gridLine = [];
        for (let x = 0; x < this.width; x++){
            let character = line[x]; 
            let characterType = null;

            //esta variable hace referencia a construnctores dentro de diccionario ACTORS.
            let Actor = ACTORS[character];            
            if (Actor) this.actors.push(new Actor(new Vector(x,y), character));
            if (character === 'x') characterType = 'wall';
            else if (character === '!') characterType = 'lava';

            gridLine.push(characterType)
        }
        this.grid.push(gridLine);
    }
}

Level.prototype.isFinished = function () {
    return (this.status !== null && this.finisDelay < 0)
}

Level.prototype.animate = function (step, keys) {
    if (this.status !== null) this.finishDelay -= step;
    //Con este while se controla poco a poco los pasitos de 0.05
    while (step >0) {
        let thisStep = Math.min(step, MAX_STEP);
        this.actors.forEach( actor => actor.act(thisStep, this, keys));
        step -= thisStep;
    }
}