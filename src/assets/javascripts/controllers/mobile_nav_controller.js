import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "bgTint", "mobileNav" ]

  connect() {
  }

  open() {
    if (this.hasBgTintTarget) {
      this.bgTintTarget.classList.remove("hidden");
    }
    this.mobileNavTarget.classList.remove("hidden");
  }

  close() {
    if (this.hasBgTintTarget) {
      this.bgTintTarget.classList.add("hidden");
    }
    this.mobileNavTarget.classList.add("hidden");
  }
}