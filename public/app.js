import { VisionStage, html, define, log, icon }
	from 'https://visionstage.dev/vision-stage/vision-stage.min.js'

// import { sleep, strIf }
// 	from 'https://visionstage.dev/vision-stage/utils.js'

import { appHeader, appContent, appFooter } 	from 'https://visionstage.dev/vision-stage/templates.js'


class App extends VisionStage {

	onConnected = () => this.render()

	template = () => html`
		${ appHeader.call(this) }
		${ appContent.call(this) } <!-- Calls this[ this.page||'home' ]() -->
		${ appFooter.call(this, 'nav') }
	`

	home = () => html`
		<main id='home' flow='col top grow'>
			<h1>Vision Stage</h1>
			<h2>${ this.$title }</h2>
			<p>
				<button @click=${ () => ++this.count }>Count: ${ this.count }</button>
			</p>
			<p>
				<a href='#/count=0/night_mode=1'>#/count=0/night_mode=1</a>
			</p>
		</main>
	`

	about = () => html`
		<main id='about' flow='col top grow'>
			<h1>About</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, earum commodi omnis, laudantium cumque ratione blanditiis, eveniet quae repellat rerum nostrum possimus sunt praesentium aliquid. Incidunt, pariatur! Labore, quas consectetur?</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, earum commodi omnis, laudantium cumque ratione blanditiis, eveniet quae repellat rerum nostrum possimus sunt praesentium aliquid. Incidunt, pariatur! Labore, quas consectetur?</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, earum commodi omnis, laudantium cumque ratione blanditiis, eveniet quae repellat rerum nostrum possimus sunt praesentium aliquid. Incidunt, pariatur! Labore, quas consectetur?</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, earum commodi omnis, laudantium cumque ratione blanditiis, eveniet quae repellat rerum nostrum possimus sunt praesentium aliquid. Incidunt, pariatur! Labore, quas consectetur?</p>




		</main>
	`
}

App.config = {
	font_size_decimals: 1,
	paths: {
		// icons: 'https://visionstage.dev/_assets/images/icons.svg'
		//! can't use <use> across domains…
		components: 'https://visionstage.dev/_components/'
	}
}

App.aspects = {
	// portrait_alt: 	.5,		// Alt min horizontal space in portrait for .alt-scaling elements
	portrait: 		.6,		// Min horizontal space in portrait
	portrait_max: 	.6,		// Max horizontal space in portrait
	landscape: 		.9,		// Min horizontal space in landscape
	landscape_max: 1.85,		// Max horizontal space in landscape
	threshold: 		.9,		// Ratio at which to switch b/w landscape & portrait
	cross_margin: '1.23%', 	// Margins opposite to "black bars" to detach the stage visually
}

App.languages = 	['en', 'fr']

App.strings = {
	title: 			["Quick Start", "Démarrage rapide"],
	count:			['Count', 'Compte'],
}

App.pages = {		// Localized nav menu links, getPageLink(page_name);
	'': 				["Home", "Accueil"],
	about: 			['About', 'À propos'], // bare = Virtual page (#), use / or ./ for links to real pages.
	'https://visionstage.dev/': ['Vision Stage'],
}

App.properties = {
	count: {
		value: 0,
		storable: true,
		sync_to_url_param: true,
		force_url_param: true,
		watcher(value){
			console.log('new count value:', value)
		}
	}
}

define( 'vision-stage', App, ['vs-selector'])