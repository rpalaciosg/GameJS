const ARROW_CODES  = {
    37: 'left',
    38: 'up',
    39: 'right'
};
let arrows = trackKeys(ARROW_CODES);

function trackKeys (keyCodes) {
    let pressedKeys = {};
    function handler (event) {
        if (keyCodes.hasOwnProperty(event.keyCode)){            
            let downPressed = event.type === 'keydown';
            pressedKeys[keyCodes[event.keyCode]] = downPressed;     
            event.preventDefault();   
        }                
    }
    addEventListener('keydown', handler);
    addEventListener('keyup', handler);

    return pressedKeys;
}

function runAnimation (framefunction) {
    let lastTime = null;
    //recibe cada cuantos milisegundos se va a ejecutar un frame 
    function frame (time){
        let stop = false;
        if (lastTime !== null){
            let timeStep = Math.min(time - lastTime, 100) / 1000;
            stop = frameFunction(timeStep) === false;
        }
        lastTime = time;
        if (!stop) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

let currentlevel = new Level(GAME_LEVELS);
let display = new DOMDisplay(document.body, currentlevel);