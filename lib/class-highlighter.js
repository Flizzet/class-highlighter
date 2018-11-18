'use babel';

import ClassHighlighterView from './class-highlighter-view';
import { CompositeDisposable } from 'atom';

export default {


  classHighlighterView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
		console.log("initialize");

    this.classHighlighterView = new ClassHighlighterView(state.classHighlighterViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.classHighlighterView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'class-highlighter:highlight': () => this.highlight()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.classHighlighterView.destroy();
  },

  serialize() {
    return {
      classHighlighterViewState: this.classHighlighterView.serialize()
    };
  },

  toggle() {
    console.log('ClassHighlighter was toggled!');
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
