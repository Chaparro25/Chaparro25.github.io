var escena;
			var camara;
			var render;
			var triangulo;
			var cuadrado;
			var ultimoTiempo;

			function degToRad(degrees) {
				return degrees * Math.PI / 180;
			}

			function iniciarEscena(){
				//Render
				render = new THREE.WebGLRenderer();

				render.setClearColorHex(0x000000, 1);

				var canvasWidth = 500;
				var canvasHeight = 500;
				render.setSize(canvasWidth, canvasHeight);

				document.getElementById("canvas").appendChild(render.domElement);

				//Escena
				escena = new THREE.Scene();

				//Camara
				camara = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 0.1, 100);
				camara.position.set(0, 0, 0);
				camara.lookAt(escena.position);
				escena.add(camara);

				//Triángulo
				var trianguloMaterial = new THREE.MeshBasicMaterial({
					vertexColors:THREE.VertexColors,
					side:THREE.DoubleSide
				});
				var trianguloGeometria = new THREE.Geometry();
				trianguloGeometria.vertices.push(new THREE.Vector3( 0.0,  1.0, 0.0));
				trianguloGeometria.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
				trianguloGeometria.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0));
				trianguloGeometria.faces.push(new THREE.Face3(0, 1, 2));
				trianguloGeometria.faces[0].vertexColors[0] = new THREE.Color(0xFF0000);
				trianguloGeometria.faces[0].vertexColors[1] = new THREE.Color(0x00FF00);
				trianguloGeometria.faces[0].vertexColors[2] = new THREE.Color(0x0000FF);

				triangulo = new THREE.Mesh(trianguloGeometria, trianguloMaterial);
				triangulo.position.set(-1.5, 0.0, -7.0);
				escena.add(triangulo);

				//Cuadrado
				var cuadradoMaterial = new THREE.MeshBasicMaterial({
					color:0x8080FF,
					side:THREE.DoubleSide
				});
				var cuadradoGeometria = new THREE.Geometry();
				cuadradoGeometria.vertices.push(new THREE.Vector3(-1.0,  1.0, 0.0));
				cuadradoGeometria.vertices.push(new THREE.Vector3( 1.0,  1.0, 0.0));
				cuadradoGeometria.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0));
				cuadradoGeometria.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
				cuadradoGeometria.faces.push(new THREE.Face4(0, 1, 2, 3));

				cuadrado = new THREE.Mesh(cuadradoGeometria, cuadradoMaterial);
				cuadrado.position.set(1.5, 0.0, -7.0);
				escena.add(cuadrado);
			}
			function renderEscena(){
				render.render(escena, camara);
			}
			function animarEscena(){
				var delta=(Date.now()-ultimoTiempo)/1000;
    			if (delta>0)
    			{
    				triangulo.rotation.y += degToRad(90)*delta;
    				cuadrado.rotation.x += degToRad(75)*delta;
    				renderEscena();
    			}
    			ultimoTiempo=Date.now();
				requestAnimationFrame(animarEscena);
			}
			function webGLStart() {
				iniciarEscena();
				ultimoTiempo=Date.now();
				animarEscena();
			}		
