---
title: DLSS 5 - The case against ensloppifying your rendering pipeline.
layout: home
parent: Articles
nav_order: 
description: "The guide to saying no to management about tech bro AI in your rendering pipeline."
permalink: /articles-nvidia-dlss5-2026-03
---

# DLSS 5 - The case against ensloppifying your rendering pipeline.
Last Updated 2026-03-19
{: .label .label-purple }

## Why should I even read this?  

We all saw the video. Maybe we were even in the room when it was announced. We all discussed. We all memed the shit out of it.
So... All taken care of, right?
I would argue no. Because after all that is done, your execs and managers will approach you about this "cool new tech" and how it will save you so much work. And you will need to give them serious reasons for why this is not a good idea to plan for as it is right now.
This article is supposed to be a primer for exactly this conversation. Concrete points, broken down for the non-tech side of your studio.
So if you are a pipeline stakeholder, this is for you.

- TOC
{:toc}

## Misleading Demo Parameters

## Artifacting
### Lumen Comparison
If you are working with Unreal Engine 5, you are in luck here. Your manager will already be familiar with this phenomenom because of the Lumen/Megalights conversation you no doubt had.
### Objects in Motion
As seen in the image below, in motion-heavy scenes any stable diffusion style model struggles with consistency. It causes flickering, smearing and sometimes outright makes objects disappear. 
This doesn't just affect fast footballs as shown in the most egregious demo footage. It also is visible in the below example of Resident Evil Requiem.
The rain is something the model just can't handle

## Art Direction Inconsistency (The slop effect)
### Characters
#### Skin Colour
#### Face Shape
### Environments

## Lighting inconsistency and Shadowing Issues
### Say Goodbye to PBR Consistency (bad values)
### Ambient Occlusion Erasure
### Shadow Inconsistencies on foliage

## Out of Focus issues
### Black outline on defocused objects