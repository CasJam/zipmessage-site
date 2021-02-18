import { Controller } from "stimulus"

export default class extends Controller {

  connect() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var page = url.searchParams.get("page");
    this.element.value = page;
  }

  
}