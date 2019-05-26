const playerSpeed = 6;

function Player (initialPosition) {
    this.position = initialPosition.plus(new Vector(0, -0.5));
    this.size = new Vector(0.8,1.5);
    this.speed = new Vector(0,0)
}

Player.prototype.type = 'player';

Player.prototype.moveX = function (step, level, keys) {
    this.speed.x = 0;
    if (keys.left) this.speed.x -= playerSpeed;
    if (keys.right) this.speed.x += playerSpeed;
    let motion = new Vector(this.speed.x * step, 0);
    let newPosition = this.position.plus(motion);

    let obstacle = level.obstacleAt(newPosition, this.size);
    if(obstacle) level.playerTouched(obstacle);
    else this.position = newPosition;
}

Player.prototype.moveY = function (step, level, keys) {

}

Player.prototype.act = function (step, level, keys) {
    this.moveX(step, level, keys);
    this.moveY(step, level, keys);
}