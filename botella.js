//Para formar una malla por revolución, debe establecer los puntos que definirán la forma de la malla.

//Para ello, primero se define un arreglo vacío

var puntos = [];
//Se insertan 50 puntos en el arreglo con diversos valores.

for ( var i = 0; i < 200; i ++ ) {
    puntos.push( new THREE.Vector2(
                     1/(1+Math.exp(-6*i*0.1-9)),
                      i*0.1 ));
}


//Se definen la forma, el material y la malla.

var forma = new THREE.LatheGeometry(puntos);

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );

//Se completa el código.

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 30;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
