---
layout: page
title: Contact
permalink: /contact
body_classes: "bg-brand-light-blue-200"
---

<div class="px-8 pt-0 pb-64  
            lg:max-w-4xl lg:mx-auto lg:pb-96">

  <h1 class="text-4xl mb-12">
    Contact
  </h1>

  <form action="/contact-success" id="contact-form" netlify>

    <div class="mb-8 
                lg:mb-12">
      <label class="text-lg font-semibold text-brand-blue-400">
        Your name:
      </label>
      <input placeholder="Name" 
             class="px-5 py-4 rounded border border-brand-blue-300 w-full text-xl text-brand-blue-500 font-medium 
                    lg:px-6 lg:py-5 
                    focus:ring-brand-red-500 focus:border-brand-red-500 focus:bg-white" 
             type="text" 
             name="name" id="name" />
    </div>

    <div class="mb-8 
                lg:mb-12">
      <label class="text-lg font-semibold text-brand-blue-400">
        Email:
      </label>
      <input placeholder="Email address" 
             class="px-5 py-4 rounded border border-brand-blue-300 w-full text-xl text-brand-blue-500 font-medium 
                    lg:px-6 lg:py-5 
                    focus:ring-brand-red-500 focus:border-brand-red-500 focus:bg-white" 
             type="email" name="email" id="email" />
    </div>

    <div class="mb-8 
                lg:mb-12">
      <label class="text-lg font-semibold text-brand-blue-400">
        Subject
      </label>
      <input placeholder="subject" 
             class="px-5 py-4 rounded border border-brand-blue-300 w-full text-xl text-brand-blue-500 font-medium 
                    lg:px-6 lg:py-5 
                    focus:ring-brand-red-500 focus:border-brand-red-500 focus:bg-white" 
             type="text" 
             name="subject" id="subject" />
    </div>

    <div class="mb-8 
                lg:mb-12">
      <label class="text-lg font-semibold text-brand-blue-400">
        Message
      </label>
      <textarea class="px-5 py-4 rounded border border-brand-blue-300 w-full text-xl text-brand-blue-500 font-medium 
                       lg:px-6 lg:py-5 
                       focus:ring-brand-red-500 focus:border-brand-red-500 focus:bg-white" 
                       name="message" 
                       id="message"></textarea>
    </div>

    <button name="button" type="submit" class="btn btn-primary w-full flex justify-center text-lg italic py-6">
      <span>Send</span>
    </button>            
  </form>

</div>