---
layout: default
permalink: "/"
---

<h1 class="text-4xl font-bold text-center text-blue-500">homepage stuff hereee</h1>

<div class="show-hide" data-controller="show-hide">
  <button data-action="click->show-hide#toggle">Show it!</button>
  <div class="hidden" data-target="show-hide.showHideMe" data-action="turbolinks:before-cache@window->show-hide#toggle">
    bbb <span data-action="click->show-hide#toggle">Hide me</span>
  </div>
</div>

