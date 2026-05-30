---
title: "How to create custom fonts for Substance Painter"
layout: home
parent: Guides
nav_order: 2022-05
nav_exclude: false
description: ""
permalink: /guides-custom-fonts-for-substance-painter
---

# How to create custom fonts for Substance Painter
Last Updated 2026-05-30
{: .label .label-purple }

{: .info }
If your studio is on Substance Painter 2024 or newer, please refer to [this official video](https://www.youtube.com/watch?v=QSVgnyiDADc), as Adobe added importing fonts as a proper feature in that release. If like me, you are stuck working with 2023 or older, follow the guide below. Same goes, if you want to do weird stuff to your fonts, that Substance Painter's built in feature doesn't allow.

## SUMMARY
After following this guide, you will have a working font in substance painter and a template for bringing more fonts in.<br> 
The template will support all the common styling options of a standard font already shipped with painter.<br> 
You will know, how to add additional, weirder options.

- TOC
{:toc}

## PREREQUISITES
To follow this guide, you need:
- a valid substance painter license
- a valid substance designer license
- a font file for the font you want to bring into substance painter
- 10-20 minutes of time

You do NOT need:
- to be an experienced substance designer user
- to be an experienced substance painter user
- to know any programming

This is a beginner-friendly tutorial.

## SUBSTANCE DESIGNER SET-UP
1. Open Substance Designer.
2. Create a new Substance Graph.
3. Select the "Empty" preset.
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-03.png)
4. Name the graph after the font you chose. This is important, as it will show up 1:1 in painter as the font name.
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-04.png)
5. Hit OK.
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-08.png)
6. Save your project.

## CREATING THE FONT TEMPLATE
### Adding text
7. Add an "output" node to the graph.
8. Add a "Text" node to the graph and connect it to the output node.
9. Set the text node to greyscale* and type something into the text field, so you can see what we're doing in the preview window.
10. Set the font to the font you want to use and set the style to "Regular".
11. Set the size so that your preview text isn't clipping.
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-11.png)

{: .note }
*Setting the node to greyscale is important, because fonts are treated like masks. They have no RGB info.

### Adding basic user exposed parameters
12. Click on the drop down next to "Text" and select "Expose as new graph input".
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-12.png)
13. Set identifier to "text", label to "Text", add a description, if desired (I tend to copy the default description the fonts shipped with substance painter use).
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-13.png)
14. Set the preview text (called "Default Text") to something sensible.
15. Hit OK.
16. Go through steps 12. through 15. for "Font Size" and "Alignment".

### Adding font styles
17. Add a "Multi Switch Greyscale" node to the graph and connect it between the text and the output node.
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-17.png)
18. Duplicate the text node three times, so you have a total of four. If your font has more styles, you can add more as needed.
19. Connect all text nodes to the multi switch greyscale node.
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-19.png)
20. Set the top text node to style "Regular".
21. Set the rest of the text node to the other styles available for your font.
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-21.png)

### Exposing font styles
22. Click on the multi switch greyscale node.
23. Scroll down to "INSTANCE PARAMETERS".
24. Find "Input Selection" and hit "Expose as new graph input".
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-24.png)
25. Set identifier to "font_style" and Label to "Font Style".
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-25.png)
26. Hit OK.
27. Unlike all other parameters so far, it won't show up just fine, so click on your graph in the explorer and scroll to INPUT PARAMETERS.
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-27.png)
28. Find "Font Style (Integer).
29. Next to "Type/Editor" it will say: "Slider". Click on that, and set it to "Drop Down List" instead.
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-29.png)
30. Next to "Value" you will find an array with "0" on both sides. We'll change that to read "0" and "Regular".
31. To add the rest of the styles, click on the "Add Item" right below and name them in the same order as they are plugged into the multi switch greyscale node. The numbers on the left need to be ascending and unique.
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-31.png)

### Publishing the template
32. To save the font in a format substance painter can read, go to the explorer section and click on "Publish" -> "Publish .sbsar file".
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-32.png)
33. Select your desired file path and hit "Publish".
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-33.png)

## IMPORTING THE CUSTOM FONT INTO SUBSTANCE PAINTER
34. Open Substance Painter. I would recommend opening any file to test, if things are working, but it is not required.
35. In your ASSETS tab, click on the tiny "+" on the bottom right to "Import Resources".
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-35.png)
36. Click "Add resources".
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-36.png)
37. Select the .sbsar we exported.
38. When it shows up in the list, click on "undefined" and set it to "alpha".
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-38.png)
39. Go to "Import your resources to:" and select one of the three options. 
    - "current session" will only load the font until substance painter is closed again and it will be gone on next launch. 
    - "project" will only load the font when this specific project is open. It will not be available in any other file. Great, if you are working with fonts specifically licensed to a client project. 
    - "library" will permanently load the font into ASSETS and you can use it in any project
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-39.png)
40. Hit "Import".
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-40.png)

The font will now show up and you can use it like any other font tool supplied by substance.
![Step screenshot](/Guides/Resources/guides-guides-custom-fonts-for-substance-painter-final.png)