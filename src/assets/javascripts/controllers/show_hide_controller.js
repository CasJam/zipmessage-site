// <div class="show-hide" data-controller="show-hide">
//   <button data-action="click->show-hide#toggle">Show it!</button>
//   <div class="hidden" data-target="show-hide.showHideMe" data-action="turbolinks:before-cache@window->show-hide#toggle">
//     Hello! <span data-action="click->show-hide#toggle">Hide me</span>
//   </div>
// </div>

import { Controller } from 'stimulus'

export default class extends Controller {

  static targets = ['showHideMe', 'trigger']

  connect() {
    console.log('aaa');
    this.toggleClass = this.data.get('class') || 'hidden';
    this.toggleIndicatorClass = this.data.get('class') || 'shown';
  }

  toggle() {
    var showHideElements = this.showHideMeTargets
    var triggerElements = this.triggerTargets
    var containerElement = this.element

    for (let showHideElement of showHideElements) {
      showHideElement.classList.toggle(this.toggleClass);
    }

    for (let triggerElement of triggerElements) {
      triggerElement.classList.toggle(this.toggleClass);
    }

    containerElement.classList.toggle(this.toggleIndicatorClass);
  }

}