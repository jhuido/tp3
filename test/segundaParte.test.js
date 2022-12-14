const Posicion2=require('../src/Posicion2')
const Tablero2=require('../src/Tablero2')

var tablero;
beforeEach(()=>{
    tablero=new Tablero2();
    tablero.crearTablero();
})


test("Tablero empiece apagado y funcion Encender",()=>{
    expect(tablero.tablero[0][1].estadoActual()).toBe(0);
    var posicionSuperior=new Posicion2(1,0);
    var posicionInferior= new Posicion2(2,2);
    tablero.encender(posicionSuperior,posicionInferior);
    expect(tablero.tablero[0][0].estadoActual()).toBe(0);
    expect(tablero.tablero[1][1].estadoActual()).toBe(1);
})

test("Apagar",()=>{
    var posicionSuperior=new Posicion2(1,0);
    var posicionInferior= new Posicion2(2,2);
    tablero.encender(posicionSuperior,posicionInferior);
    var posicionSup2=new Posicion2(1,1);
    var posocionInf2=new Posicion2(2,2);
    tablero.apagar(posicionSup2,posocionInf2);
    expect(tablero.tablero[1][0].estadoActual()).toBe(1);
    expect(tablero.tablero[1][1].estadoActual()).toBe(0);
    expect(tablero.tablero[1][2].estadoActual()).toBe(0);
})

test("Cambiar",()=>{
    var posicionSuperior=new Posicion2(0,0);
    var posicionInferior= new Posicion2(2,2);
    tablero.encender(posicionSuperior,posicionInferior);

    expect(tablero.tablero[0][0].estadoActual()).toBe(1);
    expect(tablero.tablero[0][2].estadoActual()).toBe(1);
    expect(tablero.tablero[1][0].estadoActual()).toBe(1);
    expect(tablero.tablero[2][1].estadoActual()).toBe(1);

    var posicionSup2=new Posicion2(1,1);
    var posocionInf2=new Posicion2(2,2);

    tablero.cambiar(posicionSup2,posocionInf2);

    expect(tablero.tablero[0][0].estadoActual()).toBe(1);
    expect(tablero.tablero[0][2].estadoActual()).toBe(1);
    expect(tablero.tablero[1][0].estadoActual()).toBe(1);
    expect(tablero.tablero[2][1].estadoActual()).toBe(3);
})

test("CantidadEncendidas",()=>{
    var posicionSuperior=new Posicion2(0,0);
    var posicionInferior= new Posicion2(2,2);
    tablero.encender(posicionSuperior,posicionInferior);
    expect(tablero.cantidadEncendidas()).toBe(9);

})