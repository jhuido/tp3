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

    this.apagar=function(verticeSuperior,verticeInferior){
        for(i=verticeSuperior.posiciony;i<=verticeInferior.posiciony;i++){
            for(j=verticeSuperior.posicionx;j<=verticeInferior.posicionx;j++){
                (this.tablero[i,j]).apagar()
            }
        }
    }
    
    this.cambiar=function(verticeSuperior,verticeInferior){
        var i=verticeSuperior.posicionx;
        var j=verticeSuperior.posiciony;
        for(i;i<=verticeInferior.posiciony;i++){
            for(j;j<=verticeInferior.posicionx;j++){
                const estadoAntes=this.tablero[i,j].estadoActual();
                this.tablero[i,j].cambiarEstado(estadoAntes+2);
            };
        };
    }

    this.cantidadEncendidas=function(){
        var i;
        var n=0;
        var j;
        for(i=0;i<100;i++){
            for(j=0;j<100;j++){
                if((this.tablero[i,j].estadoActual())!=0){
                    n+=1;
                }
            }
        }
        return n;
    }
}
module.exports=Tablero2;