---
title: Install
description: Installing discord.eco
layout: ../../layouts/MainLayout.astro
---

Hey there! In this section you'll find everything related to installing and integrating `discord.eco` into your bot project.

## Install from NPM

The NPM release, accessible via <a href="https://www.npmjs.com/package/dc.eco" target="_blank">`dc.eco`</a> will always be the latest *stable* or *pre-release*. <br/> You can install it using your favorite package manager such as npm, yarn or pnpm. <br/> You can now require it in your project!

## Install from GitHub Repo

If you wish to use the latest commit, you can do so by installing the package directly from GitHub. <br/> In order to do so, add `"dc.eco": "git://github.com/wxifuwu/dc-eco"` to your package.json dependencies and run your package managers install command, such as "npm install" <br/> You can now use it by requiring `dc.eco`.

## Add to Project

The *recommended* way to install would be adding the following to your main file:
```js
client.economy = require('dc.eco');
client.economy.setMongoURL(<mongodb_url>);
```
This way you can access the economy system whenever you can access the client object itself and don't have to require/pass it to your individual commands
