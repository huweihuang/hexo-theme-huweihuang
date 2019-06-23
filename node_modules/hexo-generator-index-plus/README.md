# hexo-generator-index-plus

Index generator plus for [Hexo], which includes `top` and `updateDate` order rules.

[ **!!! Important** ]
Please update your `hexo-generator-index-plus` to version 1.0.0+, cuz there is a bug for `updateDate` in beta versions under 1.0.0.

## Installation

``` bash
$ npm install hexo-generator-index-plus --save
```

* remove default generator `hexo-generator-index`
* update hexo-cli's assets dependencies, from `hexo-generator-index` to `hexo-generator-index-plus`, node_modules/hexo-cli/assets/packgae.json

## Options

Default order rules: 
`top` descending -> `updateDate` descending -> `date` descending

``` yaml
index_generator:
  path: ''
  per_page: 10
```
- **path**: Root path for your blogs index page. (default = '')
- **per_page**: Posts displayed per page. (0 = disable pagination)

[ more to do for the next version ]
- **order_by**: descend(default) | ascend

## Front-matter

```
title: Blog Log
tags:
  - blog
categories:
  - tech
date: 2015-04-23 00:35:45
updateDate: 2017-04-02 15:13:00
top: 1
```
- **top**: No.1 priority for post order. The higher, the topper.
- **updateDate**：anthoer date instead of create date, which you want to highlight.(No.2 priority)
- **date**: create time of the post, the default comparing attribute.
 
## License

MIT