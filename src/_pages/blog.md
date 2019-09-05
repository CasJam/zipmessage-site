---
layout: page
title: Blog
permalink: /blog
---

  <h1>Blog</h1>

  {%- for post in site.posts -%}
    <article>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
      </h3>
      <p>{{ post.intro }}</p>
    </article>
  {%- endfor -%}
