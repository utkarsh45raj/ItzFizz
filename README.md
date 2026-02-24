# ITZ FIZZ – Scroll-Based Hero Animation

This project recreates a **premium, scroll-driven hero section animation**, inspired by the provided reference demo.  
The goal is to demonstrate a strong understanding of **frontend animations, scroll-based interactions, and smooth UI behavior** using modern web technologies.


## ✨ Features Implemented

### 1. Hero Section Layout
- Hero section occupies the **first viewport (above the fold)**
- Letter-spaced headline:
  
  **W E L C O M E I T Z F I Z Z**
- Impact statistics displayed below the headline with percentages and labels

---

### 2. Initial Load Animations
On page load:
- Headline reveals smoothly using **fade + motion**
- Statistics animate in sequentially with subtle delays
- Animations feel **smooth, premium, and non-abrupt**

---

### 3. Scroll-Based Animations (Core Feature)
- Hero section is **pinned during scroll**
- Scroll progress drives all animations (not time-based autoplay)
- Main visual element moves smoothly across the screen based on scroll position
- Text and stats reveal using **clip-path synced to scroll progress**

---

### 4. Motion & Performance Considerations
- Animations use **GPU-optimized transform properties**
- Scroll-based animations handled via **GSAP ScrollTrigger**
- No manual `scroll` event listeners or layout thrashing
- Smooth easing and interpolation for natural motion

---

## 🛠️ Tech Stack 

- **HTML**
- **CSS**
- **JavaScript**
- **GSAP**
- **GSAP ScrollTrigger**
- **Next.js / React.js**
- **Tailwind CSS**
