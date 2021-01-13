---
layout: default
title: "Nimbus icons"
lang: es
---

<div class="container"> 
	<div class="row mt-4"> 
		<div class="col col-md-10"> 
			<img src="assets/images/nimbus-logo-white.svg" alt="Nimbus logo" class="logo"/>
			<div class="hero justify-content-left"> 
				<h1 class="hero-title mb-0">
				Nimbus <span class="text-primary text-outline">icons.</span>
				</h1>
				<p class="mt-0 mb-5">
				Íconos open-source para acelerar los diseños y desarrollos de las personas que buscan potenciar historias en Argentina.
				<br>
				Locales (como el mate), flexibles, y gratuitos para que los uses donde quieras y como quieras.
				</p>
				<span>
					<a class="btn btn-primary mr-3" href="www.tiendanube.com">Descargar</a>
					<a class="btn btn-link" href="www.tiendanube.com">Contribuir</a>
				</span> 
			</div>
		</div>
	</div>
	<div class="row mt-5">
		<div class="col col-md-10 icon-gallery-wrapper">
			{% for icon in site.data.icons %}
			    <span data-name="{{ icon.name }}" data-url="assets/images/icons/{{ icon.name }}.svg" class="js-icon icon-gallery-item">
			    	{% include_relative assets/images/icons/{{ icon.name }}.svg %}
			    	{% include modal-download-icon.html %}
			    </span>
			{% endfor %}
		</div>
	</div>
	<div class="row mb-5 align-items-center"> 
		<div class="col-12 col-md-4 m-0"> 
			<h2 class="mb-1">{{ site.data.translations['infoBannersTitle1'][page.lang] }}</h2>
			<p class="m-0 mb-2">{{ site.data.translations['infoBannersDescription1'][page.lang] }}</p>
			<a class="btn-link font-s" href="www.tiendanube.com">{{ site.data.translations['infoBannersLink1'][page.lang] }}</a>
			<img src="assets/images/external-link-2.svg" class="mt-1 ml-1 svg-icon-primary"/>
		</div>
		<div class="col-12 col-md-4 m-0"> 
			<h2 class="mb-1">{{ site.data.translations['infoBannersTitle2'][page.lang] }}</h2>
			<p class="mt-0 mb-2">{{ site.data.translations['infoBannersDescription2'][page.lang] }}</p>
			<a class="btn-link font-s" href="www.tiendanube.com">{{ site.data.translations['infoBannersLink2'][page.lang] }}</a>
			<img src="assets/images/external-link-2.svg" class="mt-1 ml-1 svg-icon-primary"/>
		</div>
		<div class="col-12 col-md-4 m-0"> 
			<h2 class="mb-1">{{ site.data.translations['infoBannersTitle3'][page.lang] }}</h2>
			<p class="mt-0 mb-2">{{ site.data.translations['infoBannersDescription3'][page.lang] }}</p>
			<a class="btn-link font-s" href="www.tiendanube.com">{{ site.data.translations['infoBannersLink3'][page.lang] }}</a> 
			<img src="assets/images/external-link-2.svg" class="mt-1 ml-1 svg-icon-primary"/>
		</div>
	</div>
	<div class="row justify-content-center"> 
		<div class="col-md-6"> 
		</div>
	</div>
</div>