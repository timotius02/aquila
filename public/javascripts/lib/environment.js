Environment = (function() {

	// This section is loading the video for oculus....
	var loader = new THREE.JSONLoader();
	loader.load("../javascripts/aquila.js", function(geometry, materials){
		mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ));
		mesh.position = { x:0, y:0, z:0};
		mesh.scale = { x:200, y:200, z:200};
		Config.scene.add(mesh);
		mesh.material.materials[0].side = 1;
	});
})();