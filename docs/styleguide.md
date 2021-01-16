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
			<div class="dropdown">
			  <a id="dropdown" class="btn text-primary">EN <img src="assets/images/chevron-down.svg" alt="" class="mt-1 ml-1 svg-icon-primary"/></a>
			  <div class="dropdown-content">
			    <a href="#">ES</a>
			    <a href="#">PT</a>
			  </div>
			</div>
			{% include images/nimbus-logo-white.svg alt="Nimbus logo" class="logo" %}
			<div class="hero justify-content-left"> 
				<h1 class="hero-title mb-0">
				{{ site.data.translations['styleguideTitle'][page.lang] }}
				</h1>
				<p class="mt-0 mb-5">
				{{ site.data.translations['styleguideHeadline'][page.lang] }}
				</p>
			</div>
		</div>
	</div>
</header>
<article class="p-5 bg-white">
  <div class="container">
    <div class="row mb-5"> 
      <div class="col-12 col-lg-8 m-0 order-lg-1 order-2"> 
        <h2 id="grid" class="mb-1 title-secondary">{{ site.data.translations['styleguideGridTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideGridContent'][page.lang] }}
        </p>
        <div class="bg-light grid-area grid-gy d-flex align-items-center justify-content-center">
          <img src="assets/images/styleguide/grid.svg" alt="Grid" class="grid-image"/>
        </div>
        <h2 id="style" class="mb-1 title-secondary">{{ site.data.translations['styleguideStyleTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideStyleContent-1'][page.lang] }}
        </p>
        <div class="bg-light grid-area grid-gy col d-flex align-items-center justify-content-center">
          <img src="assets/images/styleguide/style-structure.svg" alt="Structure" class="grid-image"/>
        </div>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideStyleContent-2'][page.lang] }}
        </p>
        <div class="row">
          <div class="bg-light grid-area grid-gx grid-gy col d-block align-items-center justify-content-center">
            <img src="assets/images/styleguide/style-circle.svg" alt="Structure Circle" class="grid-image"/>
            <p class="text-center grid-subtitle m-0"><small>{{ site.data.translations['styleguideStyleSubtCircle'][page.lang] }} (160 x 150 px)</small></p>
          </div>
          <div class="bg-light grid-area grid-gx grid-gy col d-block align-items-center justify-content-center">
            <img src="assets/images/styleguide/style-square.svg" alt="Structure Square" class="grid-image"/>
            <p class="text-center grid-subtitle m-0"><small>{{ site.data.translations['styleguideStyleSubtSquare'][page.lang] }} (150 x 130 px)</small></p>
          </div>
        </div>
        <div class="row">
          <div class="bg-light grid-area grid-gx grid-gy col d-block align-items-center justify-content-center">
            <img src="assets/images/styleguide/style-rectangle-h.svg" alt="Structure Rectangle Horizontal" class="grid-image"/>
            <p class="text-center grid-subtitle m-0"><small>{{ site.data.translations['styleguideStyleSubtRet-v'][page.lang] }} (110 x 160 px)</small></p>
          </div>
          <div class="bg-light grid-area grid-gx grid-gy col d-block align-items-center justify-content-center">
            <img src="assets/images/styleguide/style-rectangle-v.svg" alt="Structure Rectangle Vertical" class="grid-image"/>
            <p class="text-center grid-subtitle m-0"><small>{{ site.data.translations['styleguideStyleSubtRet-h'][page.lang] }} (160 x 110 px)</small></p>
          </div>
        </div>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideStyleContent-3'][page.lang] }}
        </p>
        <div class="bg-light grid-area grid-gy col d-flex align-items-center justify-content-center">
          <img src="assets/images/styleguide/style-body.svg" alt="Structure Body" class="grid-image"/>
        </div>
        <h2 id="stroke-space" class="mb-1 title-secondary">{{ site.data.translations['styleguideStrokeSpaceTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideStrokeSpaceContent'][page.lang] }}
        </p>
        <div class="row">
          <div class="bg-light grid-area grid-gx grid-gy col d-flex align-items-center justify-content-center">
            <img src="assets/images/styleguide/stroke-example-1.svg" alt="Example of stroke and space" class="grid-image"/>
          </div>
          <div class="bg-light grid-area grid-gx grid-gy col d-flex align-items-center justify-content-center">
            <img src="assets/images/styleguide/stroke-example-2.svg" alt="Example of stroke and space" class="grid-image"/>
          </div>
        </div>
        <h2 id="tip-fill" class="mb-1 title-secondary">{{ site.data.translations['styleguideTipFillTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideTipFillContent'][page.lang] }}
        </p>
        <div class="row">
          <div class="bg-light grid-area grid-gx grid-gy col d-flex align-items-center justify-content-center">
            <img src="assets/images/styleguide/tip-fill-example-1.svg" alt="Example of tip and fill" class="grid-image"/>
          </div>
          <div class="bg-light grid-area grid-gx grid-gy col d-flex align-items-center justify-content-center">
            <img src="assets/images/styleguide/tip-fill-example-2.svg" alt="Example of tip and fill" class="grid-image"/>
          </div>
        </div>
        <div class="row">
          <div class="bg-light grid-area grid-gx grid-gy col d-flex align-items-center justify-content-center">
            <img src="assets/images/styleguide/tip-fill-example-3.svg" alt="Example of tip and fill" class="grid-image"/>
          </div>
          <div class="bg-light grid-area grid-gx grid-gy col d-flex align-items-center justify-content-center">
            <img src="assets/images/styleguide/tip-fill-example-4.svg" alt="Example of tip and fill" class="grid-image"/>
          </div>
        </div>
        <h2 id="corners" class="mb-1 title-secondary">{{ site.data.translations['styleguideCornersTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideCornersContent'][page.lang] }}
        </p>
        <div class="row">
          <div class="bg-light grid-area grid-gx grid-gy col d-flex align-items-center justify-content-center">
            <img src="assets/images/styleguide/corners-example-1.svg" alt="Example of corner" class="grid-image"/>
          </div>
          <div class="bg-light grid-area grid-gx grid-gy col d-flex align-items-center justify-content-center">
            <img src="assets/images/styleguide/corners-example-2.svg" alt="Example of corner" class="grid-image"/>
          </div>
        </div>
        <h2 id="detail-reduction" class="mb-1 title-secondary">{{ site.data.translations['styleguideReductionTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideReductionContent'][page.lang] }}
        </p>
        <div class="bg-light grid-area grid-gy d-flex align-items-center justify-content-center">
          <img src="assets/images/styleguide/reduction.svg" alt="Grid" class="grid-image"/>
        </div>
        <h2 id="names" class="mb-1 title-secondary">{{ site.data.translations['styleguideNamesTitle'][page.lang] }}</h2>
        <p class="m-0 mb-2 text-secondary">
          {{ site.data.translations['styleguideNamesContent'][page.lang] }}
        </p>
        <div class="bg-light grid-area grid-gy d-flex align-items-center justify-content-center">
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