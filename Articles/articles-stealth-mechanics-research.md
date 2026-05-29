---
title: "STEALTH GAMES: Stealth Systems and enemy perception"
layout: home
parent: Articles
nav_order: 2020-03
nav_exclude: false
description: "This article is the result of research conducted for the initial design of the Negative Atmosphere project. It entails insights into AI, detection systems, HUD elements and balancing as well as thoughts on how to best implement those systems into a survival-horror game."
permalink: /articles-stealth-games-stealth-systems-and-enemy-perception
---

# STEALTH GAMES: Stealth Systems and enemy perception
Last Updated 2026-05-29
{: .label .label-purple }

![Title art from various stealth games](/Articles/Resources/articles-stealth-games-stealth-systems-and-enemy-perception-header.webp)

## SUMMARY
This article is the result of research conducted for the initial design of the Negative Atmosphere project. It entails insights into AI, detection systems, HUD elements and balancing as well as thoughts on how to best implement those systems into a survival-horror game.

- TOC
{:toc}

## DETECTION SYSTEMS

### Vision
- Enemies have multiple different "cones of vision"
    - a primary cone
    - a peripheral cone
    - an "over-the-shoulder" cone

![diagram showing perception cones of an npc character](/Articles/Resources/articles-stealth-games-stealth-systems-and-enemy-perception-vision-cone-graph.webp)
> I lost the source of this image and google image search only gives me Chinese and Russian forum posts. If you know the original source, please contact me and I will add it.

#### Detection via raycasting
When enemies are within a certain range, rays are cast from their head. If those rays hit multiple or specific bones of the player character model, the enemy reacts according to where the hit event is triggered.<br>
<br>
If a hit event is triggered in the primary cone of vision, the player is instantly detected. If such an event is triggered in the peripheral cone, a gauge starts filling, so long as the player remains within sight, until they are eventually detected. Exiting the peripheral cone will interrupt this process.<br>
<br>
The “over-the-shoulder cone” works differently. Here the player character gets detected whenever they are moving a lot or too quickly, because it simulates “instinct”, meaning a combination of multiple senses, that make it possible for a human or animal to detect someone trying to sneak up on them from behind. A secondary trigger to this is the time the player spends within the zone. A gauge slowly begins to fill and if they spend too much time in the "over-the-shoulder" zone, they are also detected.

### Hearing
- Every sound effect has a range assigned, within which it is "audible".
- The travel distance (a fancy word for "range") for foot steps or other player contact sounds (eg. running into a wall, falling from a height) can be made dependent on player velocity and the physical material, that is hit/stepped on (think gravel, wood, glass shards).
- Sound travels across the navmesh to avoid sound traveling through closed doors or walls without additional, costly occlusion calculations.

### Environmental clues / Intelligence
Enemies should react to:
- open doors
- corpses / unconscious enemies or allies
- turned off lights
- power cuts
- broken windows
- etc.

To feel truly intelligent, enemies need to not only react consistently, but adapt to the player. <br>
This means adapting their tactics (read behaviour tree) based on the player's preferred approach (think wearing helmets, when the player favours headshots or checking lockers, because the player constantly hides in them). <br>
Semi-dynamic behaviour trees like this can suggest true intelligence and force the player to learn new tools and skills with relatively little complexity and is easier to balance than a true fully dynamic system.

### UI and context clues
- The player should have visual feedback for how noisy they are being at any given time.
- What status an enemy is in (patrolling, idle, searching, alert, combat, etc) should be conveyed through things like animations or sound effects (growls, turns towards player, sniffing air, etc)

## BALANCING
### Refuge / Hiding spaces
Stealth games are primarily balanced by changing the ratio of safe spaces to unsafe spaces. This means, that safe hiding places become progressively less throughout the course of the game. This can be done by placing less of them in the level or by making the enemy adapt as explained above. It can even be used on the same levels to make backtracking through them more interesting. Especially older and handheld games utilise this to great effect due to limited disk space.

### Enemy sensory range
Another method of balancing stealth is to increase or reduce the sensory range of enemies off-screen. <br>
Being detected by enemies out of sight can feel unfair, lengthening the time the player can spend in the cone before being detected for these cases can help balance that effect, as it gives the player time to recover and rewards caution. This balancing method should be sparingly applied to stealth in horror games, as here we absolutely want the player to be scared of every corner they can't see past. We are not fulfilling the same power fantasy as Stealth-Action games.
The most common adjustment here is to reduce the hearing range, as realistic values almost always end up feeling unfair or rather "unfun" with the limited field of view and lack of secondary senses the player has to work with in a video game.

### Delay before state change
A slight delay before a state change can help the player recover. The most well known example of this is Metal Gear Solid V's "reflex mode". When the player is detected, triggering the alert/combat status, instead of immediately going to that state, the player is given a brief window to recover by taking out the enemy that just spotted them. If they succeed, they stay hidden, but have to hide a body. If they fail, the alarm blares and they go into combat. Mechanics like this can be great for accessibility or offering an easier than default difficulty mode, but they can also make the player feel powerful in a way we don't want in a horror game. The player is the pres, not the predator and giving them chances or abilities like that could undermine the intended feeling.

### Never reset to idle after alert is triggered
Having enemies never go back to their idle state after they have been alerted can provide a further sense of escalation. Letting them stay elevated on "searching" for example will disrupt their previously predictable movement patterns and make the player's job harder. A softer version of this can be shortening detection times in the cones after a previous sighting or an immediate escalation from idle to combat instead of suspicious or alert.

### Breaking up the detection process further
For more granular control of difficulty, the detection process can be split up like this:

> idle/baseline --suspicious noise OR initial glimpse--> alert/searching --continued noise AND/OR stay in cone--> hostile/combat

and the recovery like this:

> combat --break line of sight--> alert/searching --stay out of sight--> idle/baseline

The alert/searching or also called suspicious state is a dedicated recovery mechanism often found in stealth-action titles, but it can also be used to great effect in stealth-horror. GTFO does this really well with their "sleeping" enemies.

### General considerations for horror sub-genre
The above balancing measures are very powerful tools. They all carry the risk of removing the "scary" from a horror game at the same time. So for horror specifically, they should be applied to a much lesser degree. This is because stealth-action caters to a diametrically opposed fantasy from stealth-horror. While in stealth-action, we want the player to feel superior and powerful, stealth-horror aims to make them feel inferior and vulnerable.

## BAD PRACTICE
Common faults in stealth games:

### Defaulting to "game over" when detected
This is not scary or challenging. It just feels frustrating to the player, because it takes them out of the core loop. Allowing them to try to recover from their mistakes is essential to the desired experience. Stack the odds against them when they are detected, but give them a fighting chance.

## PROBLEMS TO SOLVE FOR STEALTH
### Quicksave abuse
Like RPGs, stealth games also run the risk of attracting save-scumming behaviour. While in RPGs with different moral choices and a very long runtime we might want to encourage that behaviour or tolerate it, it can be harmful to stealth experiences, especially for players with a perfectionist streak. They will inch their way across the map, plopping down save after save, never really feeling committed - or in the case of horror - scared. 

Ways to prevent this include:
- An old-school checkpoint system (works well for linear games)
- Limited save files by 
    - limiting the save slots (think Hitman) 
    - making the player use consumables to save (think Resident Evil 1 through 3)
    - limiting saving to set points / stations in the level (think Alien Isolation or Dead Space)
    - softening the previous point by also allowing the player to save on quit (Elden Ring)

### Boss Fights
Just don't ;P <br>
But if you really have to, make them play INTO your stealth mechanics. instead of forcing the player into open combat, give them the option to outsmart or "outsneak" their enemy, because there is nothing more frustrating than doing the reverse of a forced stealth section in an action-shooter by making the player abandon everything they have mastered so far to shoot a bullet sponge as a glass cannon.

## GADGETS
Player gadgets can fall into five categories:
- Information gathering
- Enemy manipulation
- Environment manipulation
- Altering movement
- Incapacitation

They must be balanced by:
- Hard limits for use
- Making effects temporary
- Limiting supply
- Changing the environment to disable them
- Limiting range of effect

We repeat this constantly here, but for stealth-horror, the limiting part is especially important.

## LEVEL / MAP DESIGN
Every stealth game is split into two basic types of areas: safe zones and danger zones (highways not necessarily included). <br>
The difference between a safe and a danger zone is classically communicated to the player by noise level, light and amount of cover.<br>
<br>
Level design for stealth games is a balancing act between loud, quiet, dark and light as well as force, information, space, manipulation and movement; but the unifying factor is that force should always be the least pronounced (exception: forced combat encounters like boss fights).<br>
<br>
And if we want the player to REALLY dread an upcoming area, we just place a bunch of consumables for them to pick up right before a door ^^<br>

