---
layout: default
title: "Nimbus icons"
lang: en
---

<header class="container">
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
				<h1 class="styleguide-title mb-0">
				{{ site.data.translations['styleguideTitle'][page.lang] }}
				</h1>
				<p class="mt-0 mb-5">
				{{ site.data.translations['styleguideHeadline'][page.lang] }}
				</p>
			</div>
		</div>
	</div>
</header>
<article class="bg-white mt-5 pb-4 grid-pb">
  <div class="container">
    <div class="row mb-5"> 
      <div class="col-12 col-lg-8 m-0 order-lg-1 order-2"> 
        <h2 id="grid" class="mb-1 title-secondary">{{ site.data.translations['styleguideGridTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideGridContent'][page.lang] }}
        </p>
        <div class="bg-light p-3 p-md-5 my-4">
          <img src="assets/images/styleguide/grid.svg" alt="Grid" class="grid-image d-block mx-auto"/>
        </div>
        <h2 id="style" class="mb-1 title-secondary">{{ site.data.translations['styleguideStyleTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideStyleContent-1'][page.lang] }}
        </p>
        <div class="bg-light p-4 p-md-5 my-4">
          <img src="assets/images/styleguide/style-structure.svg" alt="Structure" class="grid-image d-block mx-auto"/>
        </div>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideStyleContent-2'][page.lang] }}
        </p>
        <div class="row p-3 p-md-2">
          <div class="col-md bg-light p-4 p-md-5 m-md-2 mb-4 mb-md-0">
            <img src="assets/images/styleguide/style-circle.svg" alt="Structure Circle" class="grid-image"/>
            <p class="text-center grid-subtitle m-0"><small>{{ site.data.translations['styleguideStyleSubtCircle'][page.lang] }}<br/>(160 x 150 px)</small></p>
          </div>
          <div class="col-md bg-light p-4 p-md-5 m-md-2">
            <img src="assets/images/styleguide/style-square.svg" alt="Structure Square" class="grid-image"/>
            <p class="text-center grid-subtitle m-0"><small>{{ site.data.translations['styleguideStyleSubtSquare'][page.lang] }}<br/>(150 x 130 px)</small></p>
          </div>
        </div>
        <div class="row p-3 p-md-2">
          <div class="col-md bg-light p-4 p-md-5 m-md-2 mb-4 mb-md-0">
            <img src="assets/images/styleguide/style-rectangle-h.svg" alt="Structure Rectangle Horizontal" class="grid-image"/>
            <p class="text-center grid-subtitle m-0"><small>{{ site.data.translations['styleguideStyleSubtRet-v'][page.lang] }}<br/>(110 x 160 px)</small></p>
          </div>
          <div class="col-md bg-light p-4 p-md-5 m-md-2">
            <img src="assets/images/styleguide/style-rectangle-v.svg" alt="Structure Rectangle Vertical" class="grid-image"/>
            <p class="text-center grid-subtitle m-0"><small>{{ site.data.translations['styleguideStyleSubtRet-h'][page.lang] }}<br/>(160 x 110 px)</small></p>
          </div>
        </div>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideStyleContent-3'][page.lang] }}
        </p>
        <div class="bg-light p-3 p-md-5">
          <img src="assets/images/styleguide/style-body.svg" alt="Structure Body" class="grid-image"/>
        </div>
        <h2 id="stroke-space" class="mb-1 title-secondary">{{ site.data.translations['styleguideStrokeSpaceTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideStrokeSpaceContent'][page.lang] }}
        </p>
        <div class="row p-3 p-md-2">
          <div class="col-md bg-light px-2 px-md-3 py-5 m-md-2 mb-4 mb-md-0">
            <img src="assets/images/styleguide/stroke-example-1.svg" alt="Example of stroke and space" class="grid-image"/>
          </div>
          <div class="col-md bg-light px-2 px-md-3 py-5 m-md-2">
            <img src="assets/images/styleguide/stroke-example-2.svg" alt="Example of stroke and space" class="grid-image"/>
          </div>
        </div>
        <h2 id="tip-fill" class="mb-1 title-secondary">{{ site.data.translations['styleguideTipFillTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideTipFillContent'][page.lang] }}
        </p>
        <div class="row p-3 p-md-2">
          <div class="col-md bg-light p-4 p-md-5 m-md-2 mb-4 mb-md-0">
            <img src="assets/images/styleguide/tip-fill-example-1.svg" alt="Example of tip and fill" class="grid-image"/>
          </div>
          <div class="col-md bg-light p-4 p-md-5 m-md-2">
            <img src="assets/images/styleguide/tip-fill-example-2.svg" alt="Example of tip and fill" class="grid-image"/>
          </div>
        </div>
        <div class="row p-3 p-md-2">
          <div class="col-md bg-light p-4 p-md-5 m-md-2 mb-4 mb-md-0">
            <img src="assets/images/styleguide/tip-fill-example-3.svg" alt="Example of tip and fill" class="grid-image"/>
          </div>
          <div class="col-md bg-light p-4 p-md-5 m-md-2">
            <img src="assets/images/styleguide/tip-fill-example-4.svg" alt="Example of tip and fill" class="grid-image"/>
          </div>
        </div>
        <h2 id="corners" class="mb-1 title-secondary">{{ site.data.translations['styleguideCornersTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideCornersContent'][page.lang] }}
        </p>
        <div class="row p-3 p-md-2">
          <div class="col-md bg-light py-5 m-md-2 mb-4 mb-md-0">
            <img src="assets/images/styleguide/corners-example-1.svg" alt="Example of corner" class="grid-image"/>
          </div>
          <div class="col-md bg-light py-5 m-md-2">
            <img src="assets/images/styleguide/corners-example-2.svg" alt="Example of corner" class="grid-image"/>
          </div>
        </div>
        <h2 id="detail-reduction" class="mb-1 title-secondary">{{ site.data.translations['styleguideReductionTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideReductionContent'][page.lang] }}
        </p>
        <div class="bg-light p-2 p-md-5">
          <img src="assets/images/styleguide/reduction.svg" alt="Grid" class="grid-image"/>
        </div>
        <h2 id="names" class="mb-1 title-secondary">{{ site.data.translations['styleguideNamesTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideNamesContent'][page.lang] }}
        </p>
        <div class="bg-light grid-area grid-gy d-flex justify-content-center">
          <img src="assets/images/styleguide/names.svg" alt="Grid" class="grid-image"/>
        </div>
        <h2 id="contribution" class="mb-1 title-secondary">{{ site.data.translations['styleguideContributionTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">{{ site.data.translations['styleguideContributionCont'][page.lang] }}</p>
      </div>
      <div class="col-12 col-lg-4 order-lg-2 order-1 nav-margin"> 
        <strong class="d-block mb-1">{{ site.data.translations['styleguideNavTitle'][page.lang] }}</strong>
        <nav class="nav">
          <a class="nav-link" href="#grid">{{ site.data.translations['styleguideNavItemGrid'][page.lang] }}</a>
          <a class="nav-link" href="#style">{{ site.data.translations['styleguideNavItemStyle'][page.lang] }}</a>
          <a class="nav-link" href="#stroke-space">{{ site.data.translations['styleguideNavItemStrokeSpace'][page.lang] }}</a>
          <a class="nav-link" href="#tip-fill">{{ site.data.translations['styleguideNavItemTipFill'][page.lang] }}</a>
          <a class="nav-link" href="#corners">{{ site.data.translations['styleguideNavItemCorners'][page.lang] }}</a>
          <a class="nav-link" href="#detail-reduction">{{ site.data.translations['styleguideNavItemReduction'][page.lang] }}</a>
          <a class="nav-link" href="#names">{{ site.data.translations['styleguideNavItemNames'][page.lang] }}</a>
          <a class="nav-link" href="#contribution">{{ site.data.translations['styleguideNavItemContribution'][page.lang] }}</a> 
        </nav>
        <p>
          <a href="index.html" class="nav-link-secondary">{{ site.data.translations['styleguideNavItemBackIndex'][page.lang] }}</a>
        </p>
      </div>
    </div>
  </div>
</article>