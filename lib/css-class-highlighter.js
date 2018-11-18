'use babel';

import CssClassHighlighterView from './css-class-highlighter-view';
import { CompositeDisposable } from 'atom';

export default {

  cssClassHighlighterView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.cssClassHighlighterView = new CssClassHighlighterView(state.cssClassHighlighterViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.cssClassHighlighterView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'css-class-highlighter:toggle': () => this.highlight()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.cssClassHighlighterView.destroy();
  },

  serialize() {
    return {
      cssClassHighlighterViewState: this.cssClassHighlighterView.serialize()
    };
  },

  toggle() {
    console.log('CssClassHighlighter was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  },

	highlight() {
		console.log('Applied highlights!');
	}

};
