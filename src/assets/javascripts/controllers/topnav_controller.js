import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "subMenu" ]

  connect() {
  }

  open() {
    if (this.subMenuTarget) {
      this.subMenuTarget.classList.remove("hidden");
    }
    this.subMenuTarget.classList.remove("hidden");
  }

  close() {
    if (this.subMenuTarget) {
      this.subMenuTarget.classList.add("hidden");
    }
    this.subMenuTarget.classList.add("hidden");
  }
}