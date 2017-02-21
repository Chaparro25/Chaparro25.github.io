//Figuras
//Una figura es un objeto bidimensional.
//Es importante considerar este punto.
//Para definir una geometría de una figura (vertices y caras), se necesitan dos pasos.
//Primero se utiliza el constructor Shape() y se define el recorrido de la figura.
//Posteriormente, se utiliza el constructor ShapeGeometry() para generar la geometría de la malla (vértices y caras).

var figura = new THREE.Shape();

//Las figuras en THREE se realizan sobre el plano xy.
figura.moveTo(10, 10);
figura.lineTo(10, 40);
figura.lineTo(40, 40);
figura.lineTo(10, 10);
//Para definir la figura se debe describir un recorrido (path en inglés) por medio de métodos tales como moveTo y lineTo. 
//Estos métodos son similares a los operadores gráficos usados por el formato de documento portátil (PDF, por sus siglas en inglés).

//Para generar la malla hay que desarrollar la forma.

var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);

//Se hace notar que en el constructor Mesh no se indicó material alguno. En este caso se utiliza el material por defecto para mallas, que es  MeshBasicMaterial. Este material se produce en un color aleatorio si no se especifica un color.
//Finalmente, se termina colocando la escena, la cámara y el renderizador.

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
