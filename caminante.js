class Caminante{


    constructor(){
        this.x = random( width );
        this.y = random( height );
        this.t = 8;
        this.vel = 400;
        this.dir = random( TWO_PI );
        push();
        colorMode( HSB , 360 , 100 , 100 );
        this.elColor = color( random(180,260) , 100 , 100 );
        pop();
    }

    dibujar(){
        push();
        fill( this.elColor );
        noStroke();
        ellipse( this.x , this.y , this.t , this.t );
        pop();
    }

    mover(){

        this.dir += radians( random(-10,10) );

        let dx = this.vel * cos( this.dir );
        let dy = this.vel * sin( this.dir );

        this.x += dx;
        this.y += dy;
        //         condicion.     ? valor-si.    : valor-no
        this.x = ( this.x > width ? this.x-width : this.x );
        this.x = ( this.x < 0 ? this.x+width : this.x );
        this.y = ( this.y > height ? this.y-height : this.y );
        this.y = ( this.y < 0 ? this.y+height : this.y );
    }

}