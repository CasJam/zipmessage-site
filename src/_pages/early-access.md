---
layout: page
title: Early Access
permalink: /early-access
body_classes: "bg-brand-light-blue-200"
---

<div class="px-8 pt-0 pb-64  
            lg:max-w-4xl lg:mx-auto lg:pb-96">

  <h1 class="text-4xl mb-4">
    Get early access...
  </h1>

  <p class="text-brand-blue-400 font-medium text-lg mb-16">
    Please answer a few questions to be added to our early access queue for <span class="italic">ZipMessage.</span>
  </p>

  <form action="/early-access-success" id="early-access-survey-form" netlify>

    <input type="hidden" name="early_access_survey[optin_path]" id="early_access_survey_optin_path" />

    <div class="mb-8 
                lg:mb-12">
      <label class="text-lg font-semibold text-brand-blue-400">
        What does your business do?
      </label>
      <input class="px-5 py-4 rounded border border-brand-blue-300 w-full text-xl text-brand-blue-500 font-medium 
                    lg:px-6 lg:py-5 
                    focus:ring-brand-red-500 focus:border-brand-red-500 focus:bg-white" 
             type="text" name="business_do" id="business_do" />
    </div>

    <div class="mb-8 
                lg:mb-12">
      <label class="text-lg font-semibold text-brand-blue-400">
        What is your role or job title?
      </label>
      <input class="px-5 py-4 rounded border border-brand-blue-300 w-full text-xl text-brand-blue-500 font-medium 
                    lg:px-6 lg:py-5 
                    focus:ring-brand-red-500 focus:border-brand-red-500 focus:bg-white" 
              type="text" name="role" id="role" />
    </div>

    <div class="mb-8 
                lg:mb-12">
      <label class="text-lg font-semibold text-brand-blue-400 leading-tight mb-3">
        In which situations do you prefer to communicate <span class="italic">asynchronously</span>, and with who?
      </label>
      <textarea class="px-5 py-4 rounded border border-brand-blue-300 w-full text-xl text-brand-blue-500 font-medium 
                       lg:px-6 lg:py-5 
                       focus:ring-brand-red-500 focus:border-brand-red-500 focus:bg-white" 
                name="async_use_cases" 
                id="async_use_cases">
      </textarea>
    </div>

    <div class="mb-8 
                lg:mb-12">
      <label class="text-lg font-semibold text-brand-blue-400 leading-tight mb-3">
        Which tool(s), if any, do you use for recording, sharing, and/or receiving video messages?
      </label>
      <input class="px-5 py-4 rounded border border-brand-blue-300 w-full text-xl text-brand-blue-500 font-medium 
                    lg:px-6 lg:py-5 
                    focus:ring-brand-red-500 focus:border-brand-red-500 focus:bg-white" 
             type="text" 
             name="tools" 
             id="tools" />
    </div>

    <div class="mb-8 
                lg:mb-12">
      <label class="text-lg font-semibold text-brand-blue-400 leading-tight mb-3">
        How do you think ZipMessage might help you or your team?  Please be specific.
      </label>
      <textarea class="px-5 py-4 rounded border border-brand-blue-300 w-full text-xl text-brand-blue-500 font-medium 
                       lg:px-6 lg:py-5 
                       focus:ring-brand-red-500 focus:border-brand-red-500 focus:bg-white" 
                       name="why_zipmessage" 
                       id="why_zipmessage">
      </textarea>
    </div>

    <div class="mb-8 
                lg:mb-12">
      <label class="text-lg font-semibold text-brand-blue-400">
        Any questions about ZipMessage?
      </label>
      <textarea class="px-5 py-4 rounded border border-brand-blue-300 w-full text-xl text-brand-blue-500 font-medium 
                       lg:px-6 lg:py-5 
                       focus:ring-brand-red-500 focus:border-brand-red-500 focus:bg-white" 
                       name="questions" 
                       id="questions">
      </textarea>
    </div>

    <div class="mb-8 
                lg:mb-12">
      <label class="text-lg font-semibold text-brand-blue-400">
        How did you hear about ZipMessage?
      </label>
      <input class="px-5 py-4 rounded border border-brand-blue-300 w-full text-xl text-brand-blue-500 font-medium 
                    lg:px-6 lg:py-5 
                    focus:ring-brand-red-500 focus:border-brand-red-500 focus:bg-white" 
                    type="text" name="source" id="source" />
    </div>

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

    <button name="button" type="submit" class="btn btn-primary w-full flex justify-center text-lg italic py-6">
      <span>Send</span>
    </button>            
  </form>

</div>