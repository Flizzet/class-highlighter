/**
 * @Author: flizzet
 * @Date:   2018-11-18T05:56:01-08:00
 * @Last modified by:   flizzet
 * @Last modified time: 2018-11-18T06:09:18-08:00
 */



'use babel';

export default class CssClassHighlighterView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('css-class-highlighter');

    // Create message element
    const message = document.createElement('div');
    message.textContent = 'The CssClassHighlighter package is Alive! It\'s ALIVE!';
    message.classList.add('message');
    this.element.appendChild(message);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
