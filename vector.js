/*
*Esta clase nos sirve para poder mover elementos dentro del juego
*/
function Vector (x, y) {
    this.x = x;
    this.y = y;
}

//suma de 2 vectores
Vector.prototype.plus = function (other) {
    return new Vector(this.x + other.x, this.y + other.y);
}

//Multiplicar vector por algún valor
Vector.prototype.times = function (factor) {
    return new Vector(this.x * factor, this.y * factor);

}