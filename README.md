> This HuWeihuang theme created by [HuWeihuang](http://www.huweihuang.com/) modified from the original Porter [YuHsuan](https://github.com/YenYuHsuan/hexo-theme-beantech)
> 
> This theme has been published to the [hexo theme list](https://hexo.io/themes/).

# Live Demo

Hu Weihuang Blog : [www.huweihuang.com](http://www.huweihuang.com/)

![Theme_HuWeihuang](https://res.cloudinary.com/dqxtn0ick/image/upload/v1553666111/blog/blog.jpg)

# Copyright Notice

**You can free to use this theme, but you need to keep the following copyright notice on the website.**

<img src="https://res.cloudinary.com/dqxtn0ick/image/upload/v1537879475/header/copyright.png" width="55%">

# Install Hexo

Install Node.js  and Git

```shell
#For Mac
brew install node
brew install git
```

Install hexo

```shell
npm install hexo-cli -g

#For more:https://hexo.io/zh-cn/index.html
```

# Theme Usage

## Init

```bash
git clone https://github.com/huweihuang/hexo-theme-huweihuang.git ./hexo-huweihuang
cd hexo-huweihuang
npm install
```

## Modify
Modify `_config.yml` file with your own info.
Especially the section:
### Deployment
Replace to your own repo!
```yml
deploy:
  type: git
  repo: https://github.com/<yourAccount>/<repo>
  branch: <your-branch>
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
My icon is using iron man, you can change to your own icon at `css/image`.

### Post tag
You can decide to show post tags or not.
```yml
home_posts_tag: true
```
 ![tag](https://raw.githubusercontent.com/huweihuang/hexo-theme-huweihuang/master/source/img/article/tag.png)
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
Please <a class="github-button" href="https://github.com/huweihuang/hexo-theme-huweihuang" data-icon="octicon-star" aria-label="Star huweihuang/hexo-theme-huweihuang on GitHub">Star</a> this Project if you like it! <a class="github-button" href="https://github.com/huweihuang" aria-label="Follow @huweihuang on GitHub">Follow</a> would also be appreciated!
Peace!
