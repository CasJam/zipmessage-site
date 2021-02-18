import { Controller } from "stimulus"

export default class extends Controller {

  connect() {
  }

  preventSubmitOnRetern(event) {
    // simply having this blank action on every textarea input in the form will prevent the form from being submitting when a user presses any key (including "Enter" key).
    // However, this does not work on single-line text inputs.
  }

  
}