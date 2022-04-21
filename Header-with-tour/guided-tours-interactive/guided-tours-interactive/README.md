# interactive
jQuery plugin, interactive guide tour


Comenzando
---------------
Incluya el script interactive.vx.x.x.js dentro de su página.
``` html
<script src="interactive.v0.0.2.js"></script>
```
Ver demo online, [demo](https://williamamed.github.io/)

Iniciando nuestro tutorial
---------------
``` html
<script>
$('li a.nav-link:eq(0)').interactive({
	size:100,
	textPosition:{
		bottom:'100px'
	},
	text:'Este ejemplo muestra como podemos resaltar un elemento y dar un tour general'
})
.then(function(){
	return $('.btn-primary').interactive({
			size:100,
			textPosition:{
			bottom:'100px'
		},
		text:'Pulse en este enlace para realizar alguna accion'
	})
})
.then(function(){
	return $('.btn-search').interactive({
		size:100,
		textPosition:{
			bottom:'100px'
		},
		text:'Explicar las busquedas al usuario, Happy coding !!'
	})
})
</script>
```
