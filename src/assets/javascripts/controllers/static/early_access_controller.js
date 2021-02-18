// This is Brian's custom Modal, used for a specific modal popup.
// Elsewhere, we also use the Modal controller packaged with tailwindcss-stimulus-components so don't disable that.

import { Controller } from 'stimulus'

export default class extends Controller {

  static targets = [ "modal", "modalBox" ]

  connect() {
  }

  openModal(event) {
    this.modalTarget.classList.remove("hidden");
    this.modalBoxTarget.querySelector("input#early_access_email").focus();
  }

  closeModal() {
    this.modalTarget.classList.add("hidden");
  }

  clickOutsideCloseModal(event) {
    if (this.modalBoxTarget.contains(event.target) === false) {
      this.modalTarget.classList.add("hidden");
    }
  }

}