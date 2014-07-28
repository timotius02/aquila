Logic = (function(){
	return{
		rotate: function(){
			if(Config.scene.children[2]){
				Config.scene.children[2].rotation.y+=.0005;
			}
		}
	}
})();