const Posicion2=require('../src/Posicion2')
const Tablero2=require('../src/Tablero2')

test("Tablero empiece apagado y funcion Encender",()=>{
    var tablero=new Tablero2();
    tablero.crearTablero();
    expect(tablero.tablero[0,1].estadoActual()).toBe(0);

    var posicionSuperior=new Posicion2(1,0);
    var posicionInferior= new Posicion2(2,2);
    tablero.encender(posicionSuperior,posicionInferior);
    expect(tablero.tablero[1,0].estadoActual()).toBe(1);
    expect(tablero.tablero[1,1].estadoActual()).toBe(1);
    expect(tablero.tablero[1,2].estadoActual()).toBe(1);
    expect(tablero.tablero[2,0].estadoActual()).toBe(1);
    expect(tablero.tablero[2,1].estadoActual()).toBe(1);
    expect(tablero.tablero[2,2].estadoActual()).toBe(1);
})
