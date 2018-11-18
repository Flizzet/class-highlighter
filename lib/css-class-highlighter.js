/**
 * @Author: flizzet
 * @Date:   2018-11-18T05:56:01-08:00
 * @Last modified by:   flizzet
 * @Last modified time: 2018-11-18T06:14:30-08:00
 */



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
      'css-class-highlighter:toggle': () => this.toggle()
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
  }.

	applyHighlights() {
		console.log('Applied highlights!');
	}

};
