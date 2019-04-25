const SCALE = 20;
//Método auxiliar para crear elementos html dinámicamente
function createElement(type, className) {
    let element = document.createElement(type);
    //className <> null
    if (className) element.className = className;
    return element;
}

//Dibuja el fondo del juego
function DOMDisplay(parent, level) {
    this.wrap = parent.appendChild(createElement('div', 'game'));
    this.level = level;

    this.wrap.appendChild(this.drawBackground());

}

DOMDisplay.prototype.drawBackground = function () {
    let table = createElement('table', 'background');
    table.style.width = this.level.width * SCALE + 'px'; 

    this.level.grid.forEach( row => {
        let rowElement = createElement('tr');
        rowElement.style.height = SCALE + 'px';
        table.appendChild(rowElement);   
        row.forEach( type => {
            rowElement.appendChild(createElement('td', type));
        });
    });
    return table;
}