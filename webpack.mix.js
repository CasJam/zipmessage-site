// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  content: [
    './src/**/*.html',
    './src/**/*.md',
    // etc.
  ],
  // Add all html tags that you want to prevent from being purged from css:
  whitelist: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote'], 

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

const mix = require('laravel-mix')

mix.js('src/assets/javascripts/index.js', 'src/assets/dist/main.js')
  .postCss('src/assets/css/main.css', 'src/assets/dist/main.css', 
      [
        require('postcss-import'), 
        require('tailwindcss'), 
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
          ? [purgecss]
          : []
      ]
    )