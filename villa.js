var vp = document.getElementById("Jueguito"); // llama al canvas
var papel = vp.getContext("2d");
var cantidadV = aleatorio(3, 8);  // en esta variable se almacenara la cantidad aleatoria de vacas que se dibujaran
var cantidadC = aleatorio(3, 8);  // en esta variable se almacenara la cantidad aleatoria de cerdos que se dibujaran
var cantidadP = aleatorio(3, 8);  // en esta variable se almacenara la cantidad aleatoria de pollos que se dibujaran

var xo = 0;  // posicion inicial en x del objeto (ovni)
var yo = 0;  // posicion inicial en y del objeto (ovni)

document.addEventListener("keydown", moverOvni);  // para detectar cuando una tecla es presionada

var teclas = {  // aqui almacenammos el valor de las teclas (flechas) con las que se va a mover el objeto
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var fondo = {  // en esta variable (fondo) se almacena la url de la imagen y su "carga" inicial sera falso
  url: "tile.png",
  cargaOK: false
};

var vaca = {  // en esta variable (vaca) se almacena la url de la imagen y su "carga" inicial sera falso
  url: "vaca.png",
  cargaOK: false
};

var pollo = {  // en esta variable (pollo) se almacena la url de la imagen y su "carga" inicial sera falso
  url: "pollo.png",
  cargaOK: false
};

var cerdo = {  // en esta variable (cerdo) se almacena la url de la imagen y su "carga" inicial sera falso
  url: "cerdo.png",
  cargaOK: false
};

var ovni = {  // en esta variable (ovni) se almacena la url de la imagen y su "carga" inicial sera falso
  url: "ovni.png",
  cargaOK: false
};

fondo.imagen = new Image();  // crea una nueva definicion de objeto y la guarda en la variable
fondo.imagen.src = fondo.url;  // carga la fuente de la imagen
fondo.imagen.addEventListener("load", cargarFondo);  // "detecta" cuando la imagen ya esta cargada y crea una funcion

vaca.imagen = new Image();  // crea una nueva definicion de objeto y la guarda en la variable
vaca.imagen.src = vaca.url;  // carga la fuente de la imagen
vaca.imagen.addEventListener("load", cargarVacas);  // "detecta" cuando la imagen ya esta cargada y crea una funcion

cerdo.imagen = new Image();  // crea una nueva definicion de objeto y la guarda en la variable
cerdo.imagen.src = cerdo.url;  // carga la fuente de la imagen
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();  // crea una nueva definicion de objeto y la guarda en la variable
pollo.imagen.src = pollo.url;  // carga la fuente de la imagen
pollo.imagen.addEventListener("load", cargarPollos);  // "detecta" cuando la imagen ya esta cargada y crea una funcion

ovni.imagen = new Image();  // crea una nueva definicion de objeto y la guarda en la variable
ovni.imagen.src = ovni.url;  // carga la fuente de la imagen
ovni.imagen.addEventListener("load", cargarOvni);  // "detecta" cuando la imagen ya esta cargada y crea una funcion

function cargarFondo()  // esta funcion camvia el valor de la "carga" a verdadero para que ya pueda ser dibujada
{
  fondo.cargaOK = true;
  dibujar();  // llama a la funcion dibujar para que se dibuje el fondo
}

function cargarVacas()  // esta funcion camvia el valor de la "carga" a verdadero para que ya pueda ser dibujada
{
  vaca.cargaOK = true;
  vaca.x = [];
  vaca.y = [];
  for (var nv = 0; nv < cantidadV; nv++)  // ciclo for que se repetira las veces que sea necesario para asignarle las coordenadas a cada vaca
  {
    vaca.x[nv] = aleatorio(0,7) * 60;  // guarda la cordenada aleatoria en x de cada vaca
    vaca.y[nv] = aleatorio(0,7) * 60;  // guarda la cordenada aleatoria en y de cada vaca
  }
  dibujar();  // llama a la funcion dibujar para que se dibuje el fondo
}

function cargarCerdos()  // esta funcion camvia el valor de la "carga" a verdadero para que ya pueda ser dibujada
{
  cerdo.cargaOK = true;
  cerdo.x = [];
  cerdo.y = [];
  for (var nc = 0; nc < cantidadC; nc++)  // ciclo for que se repetira las veces que sea necesario para asignarle las coordenadas a cada cerdo
  {
    cerdo.x[nc] = aleatorio(0,7) * 60;  // guarda la cordenada aleatoria en x de cada cerdo
    cerdo.y[nc] = aleatorio(0,7) * 60;  // guarda la cordenada aleatoria en y de cada cerdo
  }
  dibujar();  // llama a la funcion dibujar para que se dibuje el fondo
}

function cargarPollos()  // esta funcion camvia el valor de la "carga" a verdadero para que ya pueda ser dibujada
{
  pollo.cargaOK = true;
  pollo.x = [];
  pollo.y = [];
  for (var np = 0; np < cantidadP; np++)  // ciclo for que se repetira las veces que sea necesario para asignarle las coordenadas a cada pollo
  {
    pollo.x[np] = aleatorio(0,7) * 60;  // guarda la cordenada aleatoria en x de cada pollo
    pollo.y[np] = aleatorio(0,7) * 60;  // guarda la cordenada aleatoria en y de cada pollo
  }
  dibujar();  // llama a la funcion dibujar para que se dibuje el fondo
}

function cargarOvni()  // esta funcion camvia el valor de la "carga" a verdadero para que ya pueda ser dibujada
{
  ovni.cargaOK = true;
  dibujar();  // llama a la funcion dibujar para que se dibuje el fondo
}

function dibujar()  //esta fuincion al ser invocada dibujara los objetos
{
  if (fondo.cargaOK)  // si la carga es verdadera entonces dibujara la imagen
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if (vaca.cargaOK)  // si la carga es verdadera entonces dibujara la imagen
  {
    for (var v = 0; v < cantidadV ; v++)  // el ciclo se repetira hasta que sean dibujadas todas las vacas
    {
      papel.drawImage(vaca.imagen, vaca.x[v], vaca.y[v]);
    }
  }

  if (cerdo.cargaOK)  // si la carga es verdadera entonces dibujara la imagen
  {
    for (var c = 0; c < cantidadC ; c++)  // el ciclo se repetira hasta que sean dibujados todos los cerdos
    {
      papel.drawImage(cerdo.imagen, cerdo.x[c], cerdo.y[c]);
    }
  }

  if (pollo.cargaOK)  // si la carga es verdadera entonces dibujara la imagen
  {
    for (var p = 0; p < cantidadP ; p++)  // el ciclo se repetira hasta que sean dibujados todaos ls pollos
    {
      papel.drawImage(pollo.imagen, pollo.x[p], pollo.y[p]);
    }
  }

  if (ovni.cargaOK)  // si la carga es verdadera entonces dibujara la imagen
  {
    papel.drawImage(ovni.imagen, xo, yo);
  }

}

function moverOvni(evento)
{
  var movimiento = 10; // cantidad de pixeles que se movera el ovni
  switch (evento.keyCode)
  {
    case teclas.UP:  // detecta cuando la flecha hacia arriba es oprimida
      cargarOvni(xo, yo, xo, yo - movimiento, papel);  // da las nuevas coordenadas del ovni
      yo = yo - movimiento;  //esto es paraque recuerde la coordenada en la cual se quedo apartir de ahi se siga moviendo
      break;
    case teclas.DOWN:  // detecta cuando la flecha hacia abajo es oprimida
      cargarOvni(xo, yo, xo, yo + movimiento, papel);  // da las nuevas coordenadas del ovni
      yo = yo + movimiento;  //esto es paraque recuerde la coordenada en la cual se quedo apartir de ahi se siga moviendo
      break;
    case teclas.RIGHT:  // detecta cuando la flecha hacia la derecha es oprimida
      cargarOvni(xo, yo, xo + movimiento, yo, papel);  // da las nuevas coordenadas del ovni
      xo = xo + movimiento;  //esto es paraque recuerde la coordenada en la cual se quedo apartir de ahi se siga moviendo
      break;
    case teclas.LEFT:  // detecta cuando la flecha hacia la izquierda es oprimida
      cargarOvni(xo, yo, xo - movimiento, yo, papel);  // da las nuevas coordenadas del ovni
      xo = xo - movimiento;  //esto es paraque recuerde la coordenada en la cual se quedo apartir de ahi se siga moviendo
      break;
    default:

  }
}

cargarOvni(xo-1, yo-1, xo+1, yo+1, papel);

function aleatorio(min, max)  //esta funcion es la que nos crea los numeros aleatorios
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
