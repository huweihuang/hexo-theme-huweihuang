---
title: "[Hexo] Hello Theme ACE"
catalog: true
toc_nav_num: true
date: 2019-04-18 10:51:24
subtitle: "This is hexo theme ACE."
tags:
- Hexo
- APP
- sumoon
- Sticky
categories:
- Hexo
- website

---
> This [ACE theme](https://github.com/kinggozhang/hexo-theme-ace) created by kinggozhang based on theme:huweihuang and many other repos.
> please check thanks and references for more details.

# New feature
 1. Fancy nav bar
 2. Support slide show for index page.
 3. Remove image bg of header
 4. Add ribbon/particle bg to header.
 5. Support sticky post.
 6. multi lang support
 
# Live Demo

Live Demo : [www.sumoon.com](http://www.sumoon.com/)


# Copyright Notice
You are free to use this theme, but please leave copyright info in footer.
or
leave friend link of  [ACE-THEME](http://www.sumoon.com/)

# Install Hexo

```shell
npm install hexo-cli -g
```
Access <https://hexo.io> for more info
# Theme Usage

## Init

```bash
cd your_blog_dir
git clone https://github.com/kinggozhang/hexo-theme-ace.git themes/ace
```

## Modify
Change theme with 'ace'
```yml
## Themes: https://hexo.io/themes/
theme: ace
```
Modify `themes/ace/_config.yml` file with your own info.
Especially the section:
## header decoration
```yml
slideshow: true     //support 3 slides, img/slideshow/slider1/2/3
ribban_bg: false    //A beatiful ribban bg
particle_bg: true   //A dynamic particle bg
```
## Sticky post
 You have to specify a sticky tag, then tag it to post.
```yml
#sticky post tag
sticky_tag: "Sticky"
```
### Sidebar settings
Copy your avatar image to `<root>/img/` and modify the `_config.yml`:
```yml
sidebar: true    # whether or not using Sidebar.
sidebar-about-description: "<your description>"
sidebar-avatar: img/<your avatar path>
```
and activate your personal widget you like
```yml
widgets:         # here are widget you can use, you can comment out
- featured-tags
- short-about
- recent-posts
- friends-blog
- archive
- category
```
if you want to add sidebar widget, please add at `layout/_widget`.
### Signature Setup
Copy your signature image to `<root>/img/signature` and modify the `_config.yml`:
```yml
signature: true   # show signature
signature-img: img/signature/<your-signature-ID>
```
### Go to top icon Setup
you can change to your own icon at `css/image`.

### Post tag
You can decide to show post tags or not.
```yml
home_posts_tag: true
```
### Markdown render
My markdown render engine plugin is [hexo-renderer-markdown-it](https://github.com/celsomiranda/hexo-renderer-markdown-it).
```yml
# Markdown-it config
## Docs: https://github.com/celsomiranda/hexo-renderer-markdown-it/wiki
markdown:
  render:
    html: true
    xhtmlOut: false
    breaks: true
    linkify: true
    typographer: true
    quotes: '“”‘’'
```
and if you want to change the header anchor 'ℬ', you can go to `layout/post.ejs` to change it.
```javascript
async("https://cdn.bootcss.com/anchor-js/1.1.1/anchor.min.js",function(){
        anchors.options = {
          visible: 'hover',
          placement: 'left',
          icon: ℬ // this is the header anchor "unicode" icon
        };
```

## Hexo Basics
Some hexo command:
```bash
hexo new post "<post name>" # you can change post to another layout if you want
hexo clean && hexo generate # generate the static file
hexo server # run hexo in local environment
hexo deploy # hexo will push the static files automatically into the specific branch(gh-pages) of your repo!
```

# Have fun ^_^ 
Please <a class="github-button" href="https://github.com/kinggozhang/hexo-theme-sumoon" data-icon="octicon-star" aria-label="Star kinggozhang/hexo-theme-sumoon on GitHub">Star</a> this Project if you like it! <a class="github-button" href="https://github.com/kinggozhang" aria-label="Follow @kinggozhang on GitHub">Follow</a> would also be appreciated!
Peace!
# Thanks and references
 - <https://github.com/huweihuang/hexo-theme-huweihuang>
 - <https://github.com/YenYuHsuan/hexo-theme-beantech>
 - <https://github.com/VincentGarreau/particles.js>
 - <https://blog.csdn.net/fen747042796/article/details/76574058>
 
