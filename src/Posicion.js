function Posicion(posiciony,posicionx){
    this.posicionx=posicionx;
    this.posiciony=posiciony;
    this.estadoActual=function(){
        return "Apagado";
    }
}
module.exports=Posicion;