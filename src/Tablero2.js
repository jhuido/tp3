const Posicion2=require('../src/Posicion2')
function Tablero2(){
    this.tablero=[]
    this.crearTablero=function(){
        var i=0;
        var j=0;
        for(i;i<100;i++){
            for(j;j<100;j++){
                this.tablero[i,j]=new Posicion2(i,j);
            }
        }
    }

    this.encender=function(verticeSuperior,verticeInferior){
        var i=verticeSuperior.posiciony;
        var j=verticeSuperior.posicionx;
        for(i;i<=verticeInferior.posiciony;i++){
            for(j;j<=verticeInferior.posicionx;j++){
                (this.tablero[i,j]).encender();
            }
        }
    }
}
module.exports=Tablero2;