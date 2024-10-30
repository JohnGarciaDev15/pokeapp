import { CellsPage} from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import { html } from 'lit-element';
import '@pokedex/pokemon2-ui/pokemon2-ui.js';


class HomePage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'home-page';
  }

  static get properties() {
    return {
      title1: { type: String },
    };
  }

  constructor() {
    super();

    this.title1 = '';
  }

  _initPage() {
    this.requestUpdate();
  }


  render() {
    return html`
      <cells-template-paper-drawer-panel mode="seamed" id="paperHeaderPanel" disable-swipe="">
        <div slot="app_main">
        <h1>${this.title1}</h1>
        <h1>${this.t('title')}</h1>
          <pokemon2-ui></pokemon2-ui>

        </div>
      </cells-template-paper-drawer-panel>
    `;
  }
}

window.customElements.define(HomePage.is, HomePage);
