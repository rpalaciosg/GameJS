function Lava (initialPosition, characterType) {
    this.position = initialPosition;
    this.size = new Vector(1,1);

    if (characterType === '=') this.speed = new Vector(2,0); //movimiento horizontal
    else if (characterType === '|') this.speed = new Vector(0,2); //movimiento vertical
    else if (characterType === 'v'){
        this.speed  = new Vector(0,3);
        this.respawnPosition = initialPosition; //Respawn, volver aparecer en otro sitio
    }
}

Lava.prototype.type = 'lava';