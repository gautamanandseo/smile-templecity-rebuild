

# Lad Family Dentistry — Complete Website Redesign

## Overview
A modern, mobile-first single-page dental practice website replacing the outdated toptemplecitydentist.com. The focus is on converting visitors to patients through prominent phone CTAs, trust signals, and a clean premium design.

## Brand & Design System
- **Navy (#0D1B3E)** backgrounds, **Gold (#FBBF24)** CTAs, **Teal (#0D9488)** accents
- Serif headings (Georgia) + system sans-serif body
- No external images — SVG illustrations and gradient placeholders only

## Sections (Single Page, Smooth Scroll)

### 1. Sticky Header + Mobile Bottom CTA
- Desktop: Logo + nav links (Services, About, Reviews, Insurance, Contact)
- Mobile: Hamburger → full-screen slide-in drawer
- **Fixed gold "Call Now" bar** pinned to bottom on mobile with tappable phone number

### 2. Hero (Full Viewport)
- Split layout: navy left side with headline, tagline, dual CTAs + right side with review card and gradient visual
- Trust badges: 35+ years, USC alumni, PPO accepted, 24hr emergency
- Mobile: right panel hidden, trust badges shown as horizontal strip

### 3. Quick Stats Bar
- Navy band with 4 gold-number stats (35+ years, 2 dentists, 2,100+ visitors, phone number)

### 4. Services Grid (12 Services)
- Responsive grid: 2 cols mobile → 3 tablet → 4 desktop
- Cards with icons, titles, descriptions, and "Learn more" links
- Includes: General, Cosmetic, Whitening, Children's, Sedation, Invisalign, Implants, Crowns, Emergency, Root Canals, Dentures, Extractions
- Gold CTA banner below

### 5. About the Doctors
- Side-by-side cards for Dr. Chiman Lad and Dr. Sunjay Lad
- Avatar placeholders with initials, credentials, and bullet-point bios
- Family quote block below

### 6. Patient Reviews
- Dark navy section with 4 real patient review cards
- Gold stars, review text, reviewer attribution
- Average rating callout: "4.9 ★ Average Rating"

### 7. Insurance & Payment
- Two-column: accepted PPO plans (badge pills) + flexible payment options
- CTA: "Questions about insurance? Call us"

### 8. Office Hours & Location
- Hours table (Mon–Fri) with emergency callout box
- Styled map placeholder with "Get Directions" link (Google Maps)

### 9. Contact / Appointment Form
- Left: contact info with icons + social proof
- Right: white form card — name, phone, email, service dropdown, preferred day/time, message
- useState-based success message on submit

### 10. Footer
- 3-column: practice info, quick service links, hours
- Full NAP for local SEO, © 2026

## Mobile-First Requirements
- All tap targets ≥ 44px, form inputs ≥ 44px height
- Minimum 16px body text (prevents iOS zoom)
- Fixed bottom CTA bar with padding offset
- Hamburger drawer with smooth transitions
- No horizontal scroll on any viewport

## Interactions
- Sticky nav shadow on scroll
- Service card hover lift effect
- CTA button press feedback
- Form success fade-in

## SEO
- Page title and meta description optimized for "Dentist in Temple City CA"
- Phone number tappable everywhere via tel: links
- "Temple City" used naturally throughout headings

## What's Excluded (by design)
- No blog, multi-page routing, real maps API, form backend, video embeds, dark mode, animations libraries, cookie banner, or chat widget

