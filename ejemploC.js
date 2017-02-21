//Mallas por extrusión
//Para una formar una extrusión se debe generar una figura como base

var figura = new THREE.Shape();

figura.moveTo(10, 10);
figura.lineTo(10, 40);
figura.lineTo(40, 40);
figura.lineTo(10, 10);

//Con la figura se produce la extrusión.

var forma = new THREE.ExtrudeGeometry( figura,
                                       {amount: 10} );
//Es importante notar el uso de un objeto literal para describir los parámetros opcionales.
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateY( Math.PI/4 );

//El resto del ejemplo se lista.

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

