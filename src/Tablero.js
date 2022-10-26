const Posicion=require('../src/Posicion')
function Tablero(){
    this.tablero=[]
    this.crearTablero=function(){
        var i=0;
        var j=0;
        for(i;i<100;i++){
            this.tablero[i]=new Array();
            for(j=0;j<100;j++){
                this.tablero[i][j]=new Posicion(i,j);
            }
        }
    }

    this.encender=function(verticeSuperior,verticeInferior){
        var i=verticeSuperior.posiciony;
        var j=verticeSuperior.posicionx;
        for(i;i<=verticeInferior.posiciony;i++){
            for(j=verticeSuperior.posicionx;j<=verticeInferior.posicionx;j++){
                this.tablero[i][j].cambiarEstado("Encendido");
            }
        }
    }
    this.apagar=function(verticeSuperior,verticeInferior){
        for(i=verticeSuperior.posiciony;i<=verticeInferior.posiciony;i++){
            for(j=verticeSuperior.posicionx;j<=verticeInferior.posicionx;j++){
                this.tablero[i][j].cambiarEstado("Apagado");
            }
        }
    }
    this.cambiar=function(verticeSuperior,verticeInferior){
        for(i=verticeSuperior.posiciony;i<=verticeInferior.posiciony;i++){
            for(j=verticeSuperior.posicionx;j<=verticeInferior.posicionx;j++){
                if(this.tablero[i][j].estadoActual()==="Encendido"){
                    this.tablero[i][j].cambiarEstado("Apagado");
                }
                else{
                    this.tablero[i][j].cambiarEstado("Encendido");
                }
            }
        }
        
    }
    
    this.cantidadEncendidas=function(){
        var cont=0;
        for(var i=0;i<100;i++){
            for(var j=0;j<100;j++){
                if(this.tablero[i][j].estadoActual()=="Encendido"){
                    cont+=1;
                }
            }
        }
        return cont;
    }
}
module.exports=Tablero;