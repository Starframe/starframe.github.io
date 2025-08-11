---
title: StopKillingGames - How to make an End-of-Life Plan for your game
layout: home
nav_order: 3
description: "Learn, how to make an end of life plan for your game. Updated as I learn more myself."
permalink: /games-eol-plan-guide
---

# StopKillingGames - How to make an End-of-Life Plan for your game
last updated August 2025 
{: .label .label-purple }

## List of Microservices to be removed on end of life
credit to AccursedFarms for initial list

If you are an indie dev reading this, and the list looks overwhelming? Don't worry! Depending on the type of game you are making, 99% of these don't apply to you. Just go through and check, which ones you plan on using.
The easiest solution to all of these at end of life, is to just turn them off. But to do that, you have to structure your code in a modular fashion, that allows your game to run without these. If you decide, you want these to be functional beyond your support period, you need to choose APIs, that you can distribute to players DRM free for both client and server side software.

### Security & Integrity

| System Type | Examples | Open Source Alternatives |
|:-------------|:------------------|:------------------|
| Anti-Cheat Systems | Easy Anti-Cheat, BattlEye | TBA |
| DRM Validation Services | Denuvo, Proprietary Online Licencse Checks | TBA |
| Account Ban Enforcement Services | - | TBA |
| Server-Side Bahaviour Monitoring | - | TBA |
| GeoIP Restrictions and Compliance | - | TBA |
| VPN / Proxy Detection | - | TBA |
| Client Integrity Verification | - | TBA |

### Monetisation

| System Type | Examples | Open Source Alternatives |
|:-------------|:------------------|:------------------|
| Payment Processing Gateways | Stripe, PayPal, In-game stores | TBA |
| Ad Services / AdTech Integrations | - | TBA |
| Subscription Management | - | TBA |
| In-App Purchase Validation | - | TBA |
| Currency Conversion / Virtual Currency Balancing | - | TBA |
| Regional Pricing Support | - | TBA |
| Tax/VAT Compliance Services | - | TBA |
| Refund Handling APIs | - | TBA |
| Loyalty / VIP Systems | - | TBA |
| Promo Code / Coupon Redemption Systems | - | TBA |
| Loot Box Compliance tools | Odds disclosure, timers | TBA |

### Online Account Services

| System Type | Examples | Open Source Alternatives |
|:-------------|:------------------|:------------------|
| Account Creation and Management | - | TBA |
| Social Graph / Friend list Systems | - | TBA |
| OAuth / Third-Party LogIn Services | Google, Facebook, Steam | TBA |
| Username / Profile Customisation APIs | - | TBA |
| Linked Accounts / Cross-Platform Linking | - | TBA |
| 2-Factor Authentification | - | TBA |
| Account Merge / Migration Services | - | TBA |

### Live Ops / Game Services

| System Type | Examples | Open Source Alternatives |
|:-------------|:------------------|:------------------|
| Live Events Management | - | TBA |
| Real-Time Matchmaking | - | TBA |
| Ranking / Leadeboard | - | TBA |
| Server Discovery / Session Browser | - | TBA |
| Live Moderation Tools / Reporting Systems | - | TBA |
| Analytics / Telemetry Ingestion | - | TBA |
| Dynamic Game Configuration | Live tuning of game parameters | TBA |
| Live Patch Notes / Changelog Delivery | - | TBA |
| Dynamic Queue Management | Load balancing players across servers | TBA |
| Match Rehoin / Resume Services | - | TBA |

### Community & Social Features

| System Type | Examples | Open Source Alternatives |
|:-------------|:------------------|:------------------|
| News / Live Feed Services | - | TBA |
| Community Forums / Integration | - | TBA |
| Voice Chat Services | Vivox, Discord integration | TBA |
| Player Messaging Systems / Mailbox | - | TBA |
| Automated Player Message Moderation / Filtering | - | TBA |
| Event-Based Messaging | End-of-match highlights, birthday messages | TBA |
| Streamer Mode / Privacy Features | - | TBA |
| Twitch Extension Support | Overlays, Twitch Drops | TBA |
| Player Endorsement / Kudos System | - | TBA |
| In-Game Polling / Voting Tools | - | TBA |
| Community Challenges / Shared Progress Goals | - | TBA |

### Content Management

| System Type | Examples | Open Source Alternatives |
|:-------------|:------------------|:------------------|
| Live DLC Delivery Systems | - | TBA |
| Dynamic Asset Downloading | CDN-hosted live content | TBA |
| Cloud Save Systems | - | TBA |
| Patch / Update Distribution via Launcher | - | TBA |
| UGC / Mod Delivery Systems | - | TBA |

### Progression & Monetisation Services

| System Type | Examples | Open Source Alternatives |
|:-------------|:------------------|:------------------|
