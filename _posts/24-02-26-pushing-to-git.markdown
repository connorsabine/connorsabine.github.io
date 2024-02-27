---
layout: post
title:  The Basics of Git Commandline
description: The basic steps for pushing a folder to GitHub through git commandline.
date:   2024-02-25 12:00:00 +0300
image:  '/images/08.png'
tags:   [GitHub]
---

### Introduction

Do you have any projects that you want to ensure that they wont be forgotten or lost? Upload them to Git.

 This will ensure that your code can be accessed from anywhere, and is kept safe from hardware failure.


### GIT Install & Configuration

1. Install GIT

2. Open terminal

3. Run git config --global user.name "YOUR USERNAME"
    What does this do?
    Sets your username in the git settings

4. Run git config --global user.email "YOUR EMAIL ADDRESS@example.com"
    What does this do?
    Sets your email in the git settings

5. Run git config --global --list
    What does this do?
    Sets your information to be used globally, instad of just in the one repository

6. Create project/repository on GitHub
    What does this do?
    Creates a project on GitHub which will be used to store your files


### Pushing to GIT

1. Run cd /path/to/your/WPILib/project
    What does this do?
    Changes your active directory to that file, allowing your following commands to apply directly to that folder

2. Run git init
    What does this do?
    Creates a .git subdirectory, initializing the git repository

3. Run git add --all
    What does this do?
    Adds all changed files to your staging area, getting them ready to be committed to your repository

4. Run git commit -m "First commit!"
    What does this do?
    Commits all of the staged changes to your github repository, the text inside of the quotes is the commit message
