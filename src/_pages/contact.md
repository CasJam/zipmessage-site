---
layout: page
title: Contact
permalink: /contact
---

<main class="mt-16 mx-auto max-w-3xl px-4 mb-24 sm:mt-24 sm:px-6 lg:mt-32">

  <h2 class="mt-2 mb-12 text-3xl font-extrabold tracking-tight sm:text-4xl">
    Get in touch
  </h2>

  <form id="contact-form" netlify>

    <div class="mb-8">
      <input class="w-full" id="name" type="text" name="name" placeholder="Your name" value="">
    </div>
    
    <div class="mb-8">
      <div data-sk-error="email" class="pb-2 font-weight-400 text-error text-sm"></div>
      <input class="w-full" id="email" type="email" name="email" placeholder="Email" value="">
    </div>
    
    <div class="mb-8">
      <input class="w-full" id="subject" type="text" name="subject" placeholder="Subject" value="">
    </div>
    
    <div class="mb-8">
      <div data-sk-error="message" class="pb-2 font-weight-400 text-error text-sm"></div>
      <textarea class="w-full h-40" id="message" name="message" placeholder="Message"></textarea>
    </div>

    <button class="btn" type="submit">Send</button>
  </form>

</main>