import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['toggleButton', 'toggleButtonHandle', 'monthlyPlans', 'yearlyPlans']
  static values = {
    active: String
  }

  connect() {
    if (this.activeValue == "yearly") {
      this.monthlyPlansTarget.classList.add("hidden");
      this.yearlyPlansTarget.classList.remove("hidden");

      this.toggleButtonTarget.classList.add("bg-yellow-500");
      this.toggleButtonTarget.classList.remove("bg-gray-100");
      this.toggleButtonHandleTarget.classList.add("translate-x-5");
      this.toggleButtonHandleTarget.classList.remove("translate-x-0");
    }
  }

  toggle() {
    if (this.activeValue == "monthly") {
      this.activeValue = "yearly";

      this.monthlyPlansTarget.classList.add("hidden");
      this.monthlyPlansTarget.classList.add("sm:hidden");
      this.yearlyPlansTarget.classList.remove("hidden");
      this.yearlyPlansTarget.classList.remove("sm:hidden");

      this.toggleButtonTarget.classList.add("bg-yellow-500");
      this.toggleButtonTarget.classList.remove("bg-gray-100");
      this.toggleButtonHandleTarget.classList.add("translate-x-5");
      this.toggleButtonHandleTarget.classList.remove("translate-x-0");

    } else {
      this.activeValue = "monthly";
      this.monthlyPlansTarget.classList.remove("hidden");
      this.monthlyPlansTarget.classList.remove("sm:hidden");
      this.yearlyPlansTarget.classList.add("hidden");
      this.yearlyPlansTarget.classList.add("sm:hidden");

      this.toggleButtonTarget.classList.remove("bg-yellow-500");
      this.toggleButtonTarget.classList.add("bg-gray-100");
      this.toggleButtonHandleTarget.classList.remove("translate-x-5");
      this.toggleButtonHandleTarget.classList.add("translate-x-0");
    }
  }
  
}
