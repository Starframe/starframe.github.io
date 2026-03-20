---
title: DLSS 5 - The case against ensloppifying your rendering pipeline.
layout: home
parent: Articles
nav_order: 2026-03
nav_exclude: true
description: "The guide to saying no to management about tech bro AI in your rendering pipeline."
permalink: /articles-nvidia-dlss5-2026-03
---

# DLSS 5 - The case against ensloppifying your rendering pipeline.
Last Updated 2026-03-19
{: .label .label-purple }

## Why should I even read this?  

We all saw the video. Maybe we were even in the room when it was announced. We all discussed. We all memed the shit out of it. <br>
So... All taken care of, right?<br>
<br>
I would argue no. Because after all that is done, your execs and managers will approach you about this "cool new tech" and how it will save you so much work. And you will need to give them serious reasons for why this is not a good idea to plan for as it is right now. <br>
This article is supposed to be a primer for exactly this conversation. Concrete points, broken down for the non-tech side of your studio.<br>
So if you are a pipeline stakeholder, this is for you.<br>

- TOC
{:toc}

## Misleading Demo Parameters
- show renders on high settings and hardware requirements comparison

## Artifacting
### Lumen Comparison
If you are working with Unreal Engine 5, you are in luck here. Your manager will already be familiar with this phenomenom because of the Lumen/Megalights conversation you no doubt had.
- flimmering and smearing

### Objects in Motion
As seen in the image below, in motion-heavy scenes any stable diffusion style model struggles with consistency. It causes flickering, smearing and sometimes outright makes objects disappear. 
This doesn't just affect fast footballs as shown in the most egregious demo footage. It also is visible in the below example of Resident Evil Requiem.
### Particles and Backgrounds
The rain is something the model just can't handle...


## Inconsistency (The slop effect)
### Characters
- everyone is instagram models

#### Skin Colour
- everyone is whitewashed or stereotyped

#### Face Shape
- even silhouettes aren't safe

#### Textures & Materials
- inconsistent materials through model (leather jacket example)

### Environments


## Lighting inconsistency and Shadowing Issues
### Say Goodbye to PBR Consistency (bad values)
- values are all over the place
- no consistency in different lighting scenarios, as lighting not respected (goodbye PBR)

### Ambient Occlusion Erasure
- Ambient occlusion vanishes, lack of readability

### Shadow Inconsistencies on foliage
- no crisp shadows
- bleaching shadows
- no shadowed areas in landscape shots / lack of contrast

## Out of Focus issues
### Black outline on defocused objects
- temples