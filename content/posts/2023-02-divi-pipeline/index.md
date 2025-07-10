---
title: The technical terrain of capturing data within mobile robotics
summary: This post examines key sensor technologies for automation and their trade-offs, while also addressing cybersecurity, data processing, and the widespread underuse of captured sensor data.
date: 2023-11-13
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
  alt: "A number of self driving vehicles and drones on platforms"
  caption: "Image generated with Dall-E 3"
---

## Introduction

Welcome back to the second installment of the ongoing DIVI series, where we journey from Data to Impact in the world of automating mobile robots. On the public road, moving from L2 ADAS systems to hands-off, eyes-off autonomous driving applications. But also, AMRs driving in a mixed traffic warehouse and drones flying autonomously in the air.

In the previous post, I explored the definition and characteristics of 'Data' in this realm, focusing on the crucial role of sensor data from LIDAR, RADAR, and cameras. Today, I delve into the nuances of data capture technologies, each with unique capabilities and challenges, and consider their implications in the broader context of automation, cybersecurity, and data utilization.

## Unveiling sensor technologies

**LIDAR**: Light Detection and Ranging, or LIDAR, has revolutionized data capture. It uses laser light to measure distances. This technology, pivotal in creating detailed environmental maps, has a significant drawback: cost. Despite its precision, the expense of LIDAR sensors remains a barrier in widespread adoption, particularly in cost-sensitive applications.

LIDAR is not monolithic but varied, whereas you have different types. Each type serves different purposes:

- **2D vs. 3D LIDAR**: 2D LIDAR, common in simpler mobile robotics, scans a single plane for obstacle detection. On forklifts and AGVs, such 2D Lidar also has been certified for safety use cases. In contrast, 3D LIDAR, though more costly, provides a comprehensive environmental map, critical in ADAS and AD applications.
- **FMCW (Frequency-Modulated Continuous-Wave) LIDAR vs. ToF (Time-of-Flight) LIDAR**: FMCW LIDAR, a newer technology, excels in measuring the velocity and distance of objects, enhancing dynamic object tracking. ToF LIDAR, on the other hand, calculates distance based on the travel time of light, offering a balance of accuracy and efficiency.

**RADAR**: Radio Detection and Ranging, RADAR, excels where LIDAR may falter – in adverse weather conditions. Its radio waves penetrate fog, rain, and dust, ensuring reliable data capture, a critical component in aviation and maritime automation.

Beyond conventional RADAR, the inclusion of mmWave and FMCW RADAR technologies provides enhanced detection capabilities, crucial in complex, rapidly changing environments. mmWave radar emerges as a game-changer with its ability to detect objects with millimeter precision. This is invaluable in applications like measuring the heart rate of a driver to fuse this with other sensor data to detect dangerous situations.

**Cameras**: The eyes of our automated systems. Cameras capture visual data, which, when processed through advanced computer vision algorithms, enable machines to understand and interact with their surroundings. They come in various forms:

- **Monocular Cameras**: These single-lens cameras are fundamental in applications like lane detection and basic object recognition, offering a cost-effective solution for simpler ADAS functionalities.
- **Stereo Cameras (Including ToF Cameras)**: Stereo cameras, which include ToF variants, offer depth perception by mimicking human binocular vision. ToF cameras, specifically, measure the time it takes for light to bounce back from objects, providing valuable depth information.
- **Infrared and 360-Degree Cameras**: Infrared cameras excel in low-light conditions, while 360-degree cameras provide a comprehensive view, both essential in ensuring round-the-clock and all-around situational awareness.
- **Thermal Cameras**: Detect heat signatures, invaluable in conditions where standard visual cameras falter, like in smoke or fog. Also thermal cameras still carry a relatively high price tag.

**Ultrasonic Sensors**: Widely used in parking assistance systems, they're excellent for short-range detection and are relatively inexpensive.

**Case study**: imagine an advanced driver-assistance system (ADAS) combining these technologies. LIDAR maps the road, RADAR provides detailed object detection, and various cameras offer a composite view of the vehicle's surroundings, each complementing the others to create a robust data capture system.

## Data Capture and cybersecurity

The importance of cybersecurity in this context cannot be overstated. Hackers manipulating sensor data can cause catastrophic system failures. Protecting these systems from cyber threats is as crucial as the data they capture. Robust security protocols to protect the data capture processes are a necessity.

## Journey of data acquisition and utilization

Data acquisition is a critical first step in the journey from data to actionable insights. The speed and accuracy with which data is captured and initially processed determine the effectiveness of the automation system.

- **Raw Data**: This is the unprocessed, unfiltered data directly from the sensors. It's the most authentic form of data but can be overwhelming in volume and complexity. Imagine the size of a point cloud generated by a 3D LIDAR sensor.
- **Processed Data**: Here, raw data is transformed. Algorithms and filters clean, reduce, and structure this data, making it manageable and meaningful for further analysis. And now imagine again the point cloud, which has been processed such that the robotics software stack can make a difference between human, vehicles, static objects, and so on.

Understanding the difference between raw and processed data is crucial. Raw data offers a pure, unaltered view, but can be too voluminous for practical use. Processed data, while more manageable, may lose some nuances of the raw data during filtering and reduction.

**Practical implications**: in automation, this choice impacts decision-making. For instance, in autonomous driving, processed data can enable quicker decisions, but raw data may provide essential details in critical situations.

The raw vs. processed data debate is central to data capture. However, a striking fact is that about 99% of captured data goes unused. There are two key reasons, coming directly out of my personal experience:

- **Data relevance**: filtering data to find what is relevant for AI models is crucial. This ensures models receive contextually rich, scenario-specific data.
- **Data ownership and management**: typically, the company paying for capturing the data - to enable the application - owns the data but may not be the entity processing it. One example I’ve recently seen with one of my clients was in the domain of drones and last mile delivery services. During its trip from A to B, the drone is capturing a lot of data with cameras and LIDAR sensors. Which is valuable for safely making the flight from A to B. But it may be of less value to the company which provides the last mile delivery services to its customers. Due to storage costs, significant portions of these data will be deleted and are unused. Since the processing party doesn’t own the data (but knows the Value of the data), and its customer currently does not have a use case for the captured data (and as such doesn’t know the Value of the data).

## Conclusion

Exploring the varied technologies in LIDAR, RADAR, and cameras underscores the complexity and dynamism in the field of data capture. As we advance to the next topic in this series, ponder this: What strategies can we develop to balance the technological, economic, and security aspects in these systems?
