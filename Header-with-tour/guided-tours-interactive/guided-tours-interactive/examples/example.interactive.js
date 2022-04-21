(function($){
	$(document.body).ready(function(){
		$('li a.nav-link:eq(0)').interactive({
			size:100,
			textPosition:{
				bottom:'100px'
			},
			text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
			author:'jQueryScript'
		})
		.then(function(){
			return $('.btn-primary').interactive({
				size:100,
				textPosition:{
					bottom:'100px'
				},
				text:'Sed sit amet condimentum nunc. Donec sit amet porttitor enim, ut molestie purus. Nunc porttitor tincidunt sodales.',
				author:'jQueryScript'
			})
		})
		.then(function(){
			return $('.btn-search').interactive({
				size:100,
				textPosition:{
					bottom:'100px'
				},
				text:'Mauris porttitor odio quam, eget convallis neque commodo nec.',
				author:'jQueryScript'
			})
		})
	})

})($)
