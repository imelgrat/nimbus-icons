---
layout: default
title: "Nimbus icons"
lang: en
---

<div class="container"> 
	<div class="row mt-4"> 
		<div class="col col-md-10">
			<div class="d-none">
				<ul class="m-0 text-primary">
					<li class="lang-position">EN<img src="assets/images/chevron-down.svg" alt="" class="mt-1 ml-1 svg-icon-primary"/></li>
					<li class="lang-position d-none">ES<img src="assets/images/chevron-down.svg" alt="" class="mt-1 ml-1 svg-icon-primary"/></li>
					<li class="lang-position d-none">PT<img src="assets/images/chevron-down.svg" alt="" class="mt-1 ml-1 svg-icon-primary"/></li>
				</ul>
			</div>
			{% include images/nimbus-logo-white.svg alt="Nimbus logo" class="logo" %}
			<div class="hero justify-content-left"> 
				<h1 class="hero-title mb-0">
				{{ site.data.translations['title'][page.lang] }}
				</h1>
				<p class="mt-0 mb-5">
				{{ site.data.translations['heroDescription'][page.lang] }}
				</p>
				<span>
					<a class="btn btn-primary mr-3" href="www.tiendanube.com">{{ site.data.translations['primaryButton'][page.lang] }} </a>
					<a class="btn btn-link" href="www.tiendanube.com"> {{ site.data.translations['secondaryButton'][page.lang] }} </a>
				</span> 
			</div>
		</div>
	</div>
	<div class="row mt-5">
		<div class="col col-md-10 icon-gallery-wrapper">
			{% for icon in site.data.icons %}
			    <div data-name="{{ icon.name }}" data-url="icons/{{ icon.name }}.svg" class="js-icon icon-gallery-item">
			    	<span class="icon-gallery-svg">
			    		{% include icons/{{ icon.name }}.svg %}
			    	</span>
			    	{% include modal-download-icon.html %}
			    </div>
			{% endfor %}
			<div class="js-icon-gallery-end icon-gallery-end"></div>
		</div>
	</div>
	<div class="row my-5 align-items-center"> 
		<div class="col-12 col-md-4 m-0"> 
			<h2 class="mb-1">{{ site.data.translations['infoBannersTitle1'][page.lang] }}</h2>
			<p class="m-0 mb-2">{{ site.data.translations['infoBannersDescription1'][page.lang] }}</p>
			<a class="btn-link font-s" href="www.tiendanube.com">{{ site.data.translations['infoBannersLink1'][page.lang] }}</a>
			{% include images/external-link-2.svg class="mt-1 ml-1 svg-icon-primary" %}
		</div>
		<div class="col-12 col-md-4 m-0"> 
			<h2 class="mb-1">{{ site.data.translations['infoBannersTitle2'][page.lang] }}</h2>
			<p class="mt-0 mb-2">{{ site.data.translations['infoBannersDescription2'][page.lang] }}</p>
			<a class="btn-link font-s" href="https://github.com/TiendaNube/nimbus-icons">{{ site.data.translations['infoBannersLink2'][page.lang] }}</a>
			{% include images/external-link-2.svg class="mt-1 ml-1 svg-icon-primary" %}
		</div>
		<div class="col-12 col-md-4 m-0"> 
			<h2 class="mb-1">{{ site.data.translations['infoBannersTitle3'][page.lang] }}</h2>
			<p class="mt-0 mb-2">{{ site.data.translations['infoBannersDescription3'][page.lang] }}</p>
			<a class="btn-link font-s" href="styleguide.html">{{ site.data.translations['infoBannersLink3'][page.lang] }}</a> 
			{% include images/external-link-2.svg class="mt-1 ml-1 svg-icon-primary" %}
		</div>
	</div>
	<div class="row justify-content-center"> 
		<div class="col-md-6"> 
		</div>
	</div>
</div>