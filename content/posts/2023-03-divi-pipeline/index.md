---
title: Navigating the challenges of data capture in mobile robotics
summary: Outlining key challenges in real-world data capture—like occlusion, lighting, dust, and poor calibration.
date: 2023-11-20
tags: 
  - Machine-Learning
  - Autonomous-Systems
  - Computer-Vision
  - AI-Data-Pipeline
  - Robotics
draft: false
hideMeta: false
hideSummary: false
showtoc: true
ShowBreadCrumbs: false
cover:
  image: "cover.png"
  alt: "A big lens installed on top of a self-driving vehicle with a calibration unit installed in front of the vehicle"
  caption: "Image generated with Dall-E 3"
---

## Introduction

In the previous posts of this DIVI series, I've explored the defining characteristics of data in the world of mobile robotics and the technical intricacies of data capture. Today, I delve into the often-overlooked yet critical aspect: the common challenges in data capture, and how they can drastically affect the reliability and efficiency of automated systems.

The message I want to bring forward within this article is the fact that sensors made for capturing data are far from optimal. Which obviously has its implications on later steps in the pipeline from Data to making an Impact.

You might assume that nowadays sensors integrated within - for example - cameras are close to perfect if you make the comparison to the cameras integrated into your smartphone. Be aware however that the camera sensors in your smartphone are made for just a few purposes: taking selfies and some nice portret photos. And maybe a few minutes of video clips. They’re certainly not made for capturing lengthy shots of all-weather street scenes or dusty warehouse environments. Even the LiDAR sensor integrated into your iPad Pro is just there for household use cases.

Let's take a look at a number of issues to consider with these imperfect data capturing sensors:

## The impact of environmental factors

### Occlusion: the hidden challenge

Occlusion occurs when an object or environmental condition blocks a sensor's field of view, leading to incomplete data capture. In the real world, this could mean a vehicle's sensor missing a pedestrian hidden behind a parked car. The consequences? Potentially hazardous. Understanding and mitigating occlusion is crucial for ensuring the safety and reliability of automated systems. In a later article, I will come back on how AI can -partially- resolve this issue during data processing.

### Lighting: a double-edged sword

 Lighting conditions play a pivotal role in sensor performance. Bright sunlight can overwhelm a camera sensor, while insufficient light can lead to poor visibility for both cameras and human operators. Automated systems must be versatile, capable of adjusting to these varying conditions to ensure consistent data quality.

You may have wondered why Google captures the 360 degree imagery used within its [StreetView](https://www.google.com/streetview/) product only in daylight. Lighting is one of the reasons. Bad weather is the other. When we were capturing data in the past for compiling these into HD maps used for self-driving cars, we had to plan this in clear daylight. Night shifts didn't make any sense.

P.S. thermal or infrared cameras might have an influence on this factor, but such cameras are still considered as a costly option. Surely not fitting to the eventual pricing model of such HD maps.

### Dust and particles: the unseen foe

In outdoor or industrial settings, dust and other particles can obscure sensors, leading to inaccurate data capture. This challenge necessitates robust designs and innovative solutions, such as protective casings or advanced filtering algorithms, to maintain sensor integrity. In this context, there are companies out there which supply solutions to prevent ADAS sensors and camera lenses from being occluded by dirt and grime.

## Calibration: it's essentially a GO/NO GO

 I can remember discussions I've had in the past with several clients. The perception system we've delivered was not showing the expected behaviour. As an outsider, one would debug the functional software stack. But our engineering team knew better: inadequate calibration was the root cause.

Calibration is not a one-time setup; it's an ongoing requirement. In dynamic environments, even minor deviations can lead to significant errors. [Self-calibrating systems](https://www.kpit.com/insights/an-auto-calibrating-system-for-sensors-in-autonomous-vehicles/) are emerging as a solution, offering the potential for automation systems to adjust in real-time, ensuring ongoing accuracy.

## Sensor limitations and advanced solutions

 Every sensor has its limits – be it range, field of view, resolution, or accuracy. Recognizing these limitations is the first step in mitigating their impact. For instance, combining data from multiple types of sensors can enhance overall system accuracy and reliability.

Simulation environments play a crucial role in understanding and compensating for sensor limitations. By modeling sensor behaviour in various conditions, we can anticipate and solve potential issues before they arise in real-world applications.

[Hardware in the Loop (HiL) testing](https://tass.plm.automation.siemens.com/sites/default/files/Datasheet%20Automated%20Driving.pdf) bridges the gap between theory and practice. It allows us to test sensors, the data they capture, and the systems which make use of these data in controlled environments that mimic real-world conditions, ensuring that our automated systems are both robust and reliable.

## Conclusion

While the challenges in data capture are many and varied, they are not insurmountable. By understanding and addressing these issues, we can enhance the reliability and impact of our automation solutions. Join me in the next part of the DIVI series, where I'll explore how these challenges tie into the broader ecosystem of automation. Making the step to Information and Insights.
