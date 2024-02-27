---
layout: post
title:  Starting a FRC Java Bot
description: The basic steps for beginning to create a project for a Java FIRST Robotics Competition robot.
date:   2024-02-26 12:00:00 +0300
image:  '/images/frc.png'
tags:   [FRC, FIRST Robotics Competition, Robotics]
---

### Introduction

FIRST Robotics Competition (FRC) is a robotics community that challenges teams to create robots that excel in different tasks, changing yearly.
The teams are challenged to develop a robot under strict rules, and limited funding & resources, all while under a very short time span.

This is a guide to teams coding their robot in Java. Following these steps will help you set up a programming laptop with all of the required programs.


### Installation

Before any programming, first we must install all of the required programs. 

1. WPILib
    What is it?
    WPILib is a plugin for VSCode built to assist your team with specific functions while building your robot (ex. Deploying Code to Robot)

    How to install:
    Download the latest release from: https://github.com/wpilibsuite/allwpilib/releases

2. Game Tools
    What is it?
    Game tools are the dependencies that must be installed on your computer to run the robot at competition (ex. Driver Station)

    How to install:
    Download the latest release from: https://www.ni.com/en/support/downloads/drivers/download.frc-game-tools.html#500107

3. Motor Software (CANVenom or Other)
    What is it?
    Most motors require external software to run correctly or to configure, find the package for your motors on their respective site

    How to install:
        1. Click on the WPILib Command Pallet icon on the top right corner of the VS Code window
        2. Select WPILib: Manage Vendor Libraries
        3. Then select Install new library (online) end enter your package URL (found on motor provider website)

        CANVenom:
        https://www.playingwithfusion.com/frc/playingwithfusion(THE CURRENT YEAR).json

        SparkMAX:
        https://software-metadata.revrobotics.com/REVLib-(THE CURRENT YEAR).json

        4. Press Enter and wait for install

    If everything works, a folder named vendordeps will be created in the root directory of the project.


### Creating a Project in WPILib

Before starting to code, first your team has to create a WPILib project.

1. Open WPILib

2. Click on the WPILib Command Pallet icon on the top right corner of the VS Code window

3. Select WPILib: Create a new project

4. Select template

5. Select JAVA

6. Select Command Robot

7. Set local base folder

8. Set a project name

9. Set team number (ex. 5243)

10. Generate project


### Pushing Project to GIT

To keep track of and protect your code, it is best to upload it to GitHub. It will keep track of all previous versions and ensure that no hardware failure can end your season.

For a simple tutorial on how to upload to git, see my this post:


### CANVenom Setup

If your team is using CANVenom motors, follow these simple steps to set the CAN Ids for the motors. 

1. Connect to RIO via Ethernet or WiFi

2. Deploy Code through WPILib

3. Open Driver Station

4. Enable Teleop

5. Navigate to roboRIO online page (ex. 172.11.22.2)

6. Add port 5812 to roboRIO address (ex. 172.11.22.2:5812)

7. Set ids from Playing With Fusion online page