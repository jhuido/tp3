function Posicion(posiciony,posicionx){
    if(posicionx>99){
        throw new Error("No se puede crear una posicion con eje en x mayor a 99");
    }
    else if (posiciony>99){
        throw new Error("No se puede crear una posicion con eje en y mayor a 99");
    }
    
    this.posicionx=posicionx;
    this.posiciony=posiciony;
    this.estado="Apagado"
    this.estadoActual=function(){
        return this.estado;
    }
}
module.exports=Posicion;