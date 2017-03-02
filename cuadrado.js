var forma = new THREE.Geometry();

forma.vertices.push( new THREE.Vector3( 1,  0,  1 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 1,  0, -1 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-1,  0, -1 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-1,  0,  1 ) ); // Vértice 3

forma.vertices.push( new THREE.Vector3( 1,  1,  1 ) ); // Vértice 4
forma.vertices.push( new THREE.Vector3( 1,  1, -1 ) ); // Vértice 5
forma.vertices.push( new THREE.Vector3(-1,  1, -1 ) ); // Vértice 6
forma.vertices.push( new THREE.Vector3(-1,  1,  1 ) ); // Vértice 7

forma.faces.push( new THREE.Face3( 3, 2, 1 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 3, 1, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 3, 7, 4 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 3, 4, 0 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 4, 5, 1 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 4, 1, 0 ) ); // Cara 5

forma.faces.push( new THREE.Face3( 5, 6, 2 ) ); // Cara 6
forma.faces.push( new THREE.Face3( 5, 2, 1 ) ); // Cara 7
forma.faces.push( new THREE.Face3( 6, 7, 3 ) ); // Cara 8
forma.faces.push( new THREE.Face3( 6, 3, 2 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 7, 6, 5 ) ); // Cara 10
forma.faces.push( new THREE.Face3( 7, 5, 4 ) ); // Cara 11

forma.computeBoundingSphere();


forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, 
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
