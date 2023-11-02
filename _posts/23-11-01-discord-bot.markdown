---
layout: post
title:  Python Discord Bot
description: Creating a basic discord bot with Hikari Lightbulb in Python.
date:   2023-11-01 12:00:00 +0300
image:  '/images/20.jpg'
tags:   [Python, Discord, Bot, Hikari Lightbulb]
---

### Introduction

Discord bots can have so many different uses and applications. They can preform pre-programmed tasks such as notification or moderation and interact with end-users. Or they could be programmed to play your favorite music!

No matter what you want it to do, we first have to create the base.

### Discord Developer Setup

Before we can write the code, we need to get our authentication credentials and register the bot with discord.

1. Navigate to https://discord.com/developers/applications
2. Click "New Application"
3. Pick the name for your bot and enter it in
4. Click "Create"
5. Go to the "Bot" menu and click "Add Bot"
6. Save your "Token" in a safe place 

Do not share your token with anyone!

### Installing Required Libraries

To use code our bot, we will use Hikari and Hikari-Lightbulb. Hikari is a discord micro-framework for python and ayncio. Hikari supports the latest versions of discord api. Hikari-Lightbulb is a command handler built as an extension of Hikari. To use both of these libraries, we first have to install them into our system.

{% highlight html %}
pip install hikari, hikari-lightbulb
{% endhighlight %}


### Creating a Basic Application
{% highlight py %}
import hikari
import hikari-lightbulb
{% endhighlight %}




