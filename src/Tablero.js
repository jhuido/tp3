const Posicion=require('../src/Posicion')
function Tablero(){
    this.tablero=[]
    this.crearTablero=function(){
        var i=0;
        var j=0;
        for(i;i<100;i++){
            for(j;j<100;j++){
                this.tablero[i,j]=new Posicion(i,j);
            }
        }

        
        return rdo;
    }
}
module.exports=Tablero