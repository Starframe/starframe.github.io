---
title: "Custom LUTs for Unreal Engine using DaVinci Resolve"
layout: home
parent: Guides
nav_order: 2026-06
nav_exclude: true
description: ""
permalink: /guides-guides-add-custom-luts-to-unreal-with-davinci-resolve
---

# Game project development and lifecycle breakdown
Last Updated 2026-06-01
{: .label .label-purple }
First published: June 2026
{: .label .label-blue } 


{: .info }
Be aware, that LUTs created with this guide will always be SDR. At the time of writing this article, Unreal Engine doesn't have support for industry standard HDR LUT formats like .cube.
<br><br>Why is this relevant? 
<br>SDR LUTs transform your colours AFTER tone mapping, the internal colour grading tool supports HDR and is applied BEFORE tonemapping.

{: .info}
If you are looking to grade in Unreal and not hate yourself, take a look at [this add-on](https://www.fab.com/listings/17c424fc-9f14-42dd-9f31-e5accaeb4862) (which is somehow free), that will give you a proper histogram set up.

## SUMMARY
This guide will walk you through two different processes for creating LUTs for Unreal. One for OCIO pipelines and one for everyone else.

## PREREQUISITES
To follow this guide, you need:
- [Unreal Engine 4 or 5](https://www.unrealengine.com/download) installed on your machine (5 for OCIO method)
- [DaVinci Resolve](https://www.blackmagicdesign.com/event/davinciresolvedownload) installed on your machine (the free version is sufficient)
- rudimentary colour grading knowledge (You should know, what value, hue and saturation are and you should have edited an image with a curve or wheel in any image editor before)
- 20-40 minutes of time depending on your familiarity with Unreal and Resolve

You do NOT need:
- to be an experienced DaVinci Resolve user
- to be an experienced Unreal Engine user
- to know any programming
- to be a colour grading expert (some colour space talk may go over your head, but that stuff is advanced and shouldn't impact you much as a hobbyist)

- TOC
{:toc}

## INTRODUCTION
### WTF is a LUT?
LUT stands for colour lookup table. They are files, that rudimentary speaking map each colour in your image to a different colour. So #227681 might become #229175 after a LUT is applied. It is often used to emulate classic film stock looks or to speed up the grading process in film by transferring the same look from one shot to others. This works even across different software and devices (kind of like .fbx or .obj). Some cameras even load LUTs to give a live on-set preview of what the final result may look like.

### Why do I care about LUTs? I make games, not movies!
LUTs provide a great way to quickly test out multiple looks for your project without a lot of overhead. You can sit down with the art director and just cycle through 50 LUTs, then settle on one or two to use for previs. It means you can skip the costly reworks when the colours inevitable change. You only need to recreate the final LUT in engine, if you want HDR support. Else you can even ship with the SDR LUTs created in this tutorial.

### I already have tons of .cube LUTs.
No problem! The two methods I am showing can also be used to convert your existing .cube LUTs to Unreal compatible ones.

{: .warning}
If you are using an OCIO pipeline, you can't apply regular 2D textures as LUTs to post process volumes. You have to use [this approach](https://dev.epicgames.com/community/learning/tutorials/34xz/unreal-engine-ocio-3d-luts-applying-3d-luts-when-using-ocio) instead and work with volume textures.