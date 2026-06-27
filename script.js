// ==========================================
// 1. DATA CONFIGURATIONS
// ==========================================
const funnyQuotes = [
    "“The version of you that gives up belongs in the trash. Keep moving.”",
    "“Your excuses are beautifully written lies. Read them to someone who cares.”",
    "“Every time you skip a task, an NPC takes your place in reality.”",
    "“If you touch social media right now, you admit defeat to an algorithm.”",
    "“Break the chain today, and you completely reset your progression to absolute zero.”"
];

// Aggressive discipline levels based on daily progress percentage
const disciplineLevels = [
    { max: 19, title: "Couch Potato 🛋️", desc: "You are literally wasting oxygen right now. Get up." },
    { max: 49, title: "Still an NPC 🤖", desc: "Doing the bare minimum. The haters are winning." },
    { max: 79, title: "Warrior in Training ⚔️", desc: "Okay, you're getting serious. Don't stop now." },
    { max: 99, title: "Disciplined Machine 🔥", desc: "Almost there. Your mind is under your control." },
    { max: 100, title: "ABSOLUTE GIGACHAD 👑", desc: "Maximum Level. You completely dominated today." }
];

const taskCategories = {
    "Hydrate (first thing)": "BODY",
    "Hygiene (brush, wash, face care)": "BODY",
    "Gym / Training": "BODY",
    "Mobility (10–15 min)": "BODY",
    "Nutrition protocol": "BODY",
    "Hydration target (2–3L)": "BODY",

    "Deep work (1–2 hours)": "MIND",
    "Meditation (10 min)": "MIND",
    "No social media until 3 tasks done": "MIND",
    "Review goals (2 minutes)": "MIND",

    "Skill practice": "SKILL & GROWTH",
    "Reading (10–20 min)": "SKILL & GROWTH",

    "Room reset (5 minutes)": "ENVIRONMENT",
    "Plan tomorrow (3 minutes)": "ENVIRONMENT",

    "Appearance Routine": "APPEARANCE",
    "Grooming basics": "APPEARANCE",

    "Cold exposure": "DISCIPLINE",
    "No junk dopamine": "DISCIPLINE",
    "Daily tracking": "DISCIPLINE"
};

const categoryBadgeStyles = {
    "BODY": "bodyColor",
    "MIND": "mindColor",
    "SKILL & GROWTH": "skillColor",
    "ENVIRONMENT": "envColor",
    "APPEARANCE": "appColor",
    "DISCIPLINE": "discColor"
};

const taskDescriptions = {
  "Hydrate (first thing)": "Drink 1 glass of water as soon as you wake up.",
    
    "Hygiene (brush, wash, face care)": "Brush, wash and face wash. Once done, apply moisturiser.",
    
    "Gym / Training": `Focus on what you want, not on what you have. Stop wasting days with bad foods and bad habits. Move for yourself, for your body.

🔥 1. Warm‑up — 10 minutes
• 5 min treadmill walk
• 3 min mobility (hips, shoulders, arms)
• 2 min activation (light squats or band pulls)

🔥 2. Abs Routine (Fat‑Loss Focus) — 12 minutes
• Hanging knee raises — 4×10
• Cable crunch — 4×10
• Decline sit‑ups — 4×10
• Plank — 1 minute

🔥 3. Main Workout — 45 minutes (Try to go in the morning)
Choose exercises, each 4×10, depending on the session.

💪 Session A (Upper Focus)
Choose exercises and do 10 reps × 4 sets. Do calmly and confidently.

🦵 Session B (Lower Focus)
Choose exercises and do 10 reps × 4 sets. Do calmly and confidently.

🔁 Rotation: Session A → Session B → Session A → Session B → repeat.

🔥 4. Cardio — 15 minutes
Choose one:
• Treadmill incline walk (12% incline, 3.5 speed)
• Stairmaster
• Cycling

🔥 5. Stretching — 10 minutes
• Hamstring stretch
• Quad stretch
• Glute stretch
• Chest stretch
• Shoulder stretch
• Optional: leg stretching machine

⭐ TOTAL TIME: 1 hour 30 minutes
A clean, disciplined, repeatable system.`,

    "Mobility (10–15 min)": `🧘‍♂️ Mobility & Stretching Routine (10–15 minutes)
A clean, disciplined routine to improve flexibility, reduce stiffness, and recover faster.

🔥 1. Joint Mobility — 3 minutes
• Neck circles — 20 sec
• Shoulder circles — 20 sec
• Arm swings — 20 sec
• Hip circles — 20 sec
• Leg swings (front/back) — 20 sec
• Leg swings (side/side) — 20 sec
• Ankle rotations — 20 sec

🔥 2. Dynamic Mobility — 4 minutes
• Cat–cow — 40 sec
• Deep lunge twist — 40 sec each side
• Hamstring reach — 40 sec
• Glute bridge — 40 sec

🔥 3. Static Stretching — 5–8 minutes
Hold each stretch for 30–40 seconds:
• Hamstring stretch
• Quad stretch
• Glute stretch
• Hip flexor stretch
• Calf stretch
• Chest stretch
• Shoulder stretch
• Lat stretch

TOTAL TIME: 10–15 minutes
A simple, effective routine for recovery, flexibility, and discipline.`,

    "Nutrition protocol": `🥗 Nutrition Protocol (Daily System)
Eat with discipline. Fuel your body, not your cravings. No junk dopamine.

🔥 1. First Meal (Clean Start)
Choose one:
• Eggs + toast
• Greek yogurt + fruit
• Oats with banana
• Protein shake + fruit

Rules:
• No sugar
• No pastries
• No heavy junk in the morning

🔥 2. Main Meal (Balanced Plate)
Your plate must include:
• Protein 
• Carbs 
• Vegetables 

Portion rule:
• Protein = biggest portion
• Carbs = medium
• Veggies = medium

Rules:
• Eat light at night
• No fried food
• No heavy sauces

🔥 3. Snacks (Only if needed)
Choose clean options:
• Fruit
• Nuts (small handful)
• Protein bar
• Yogurt

Avoid:
• Chips
• Chocolate
• Cookies
• Fast food

🔥 4. Hydration
• 2–3 liters water daily
• 1 glass before each meal
• No sugary drinks
• Limit energy drinks

🔥 5. Discipline Rules
• No emotional eating
• No late‑night junk
• No “cheat days” — only clean meals
• If you break once, restart immediately

⭐ This protocol keeps your body clean, your mind sharp, and your discipline strong.`,

    "Hydration target (2–3L)": "Hit 2 to 3 liter per day from ur BIBERON",

    "Deep work (1–2 hours)": `🧠 Deep Work Protocol (1–2 Hours)
Work with intensity. No distractions. No noise. No phone. Only output.

🔥 1. Environment Setup — 2 minutes
• Phone on Do Not Disturb
• Close all unnecessary tabs
• Water next to you
• Notebook + pen ready

🔥 2. Focus Block — 50 minutes
Choose ONE task only

Rules:
• No social media
• No music with lyrics
• No switching tasks
• Work slowly, calmly, mechanically

🔥 3. Break — 10 minutes
• Walk
• Stretch
• Drink water
• No phone scrolling

🔥 4. Second Focus Block — 50 minutes (optional)
If you feel strong, repeat another 50‑minute block.
If not, stop at 1 hour — quality over quantity.

Rules:
• Same task or new task — but only ONE
• No distractions
• Maintain calm, controlled pace

🔥 5. End Review — 3 minutes
• What did I complete?
• What is the next step for tomorrow?
• Close everything and leave clean

⭐ TOTAL TIME: 1–2 hours
A disciplined, distraction‑free system for real progress.`,

    "Meditation (10 min)": `🧘‍♂️ Meditation & Breathing Protocol (10 minutes)
Calm your mind. Control your breath. Build mental discipline.

🔥 1. Position — 30 seconds
• Sit straight
• Shoulders relaxed
• Hands on knees
• Eyes half‑closed or fully closed

🔥 2. Box Breathing — 3 minutes ( 12 Breaths )
• Inhale 4 seconds
• Hold 4 seconds
• Exhale 4 seconds
• Hold 4 seconds

Purpose: resets your nervous system, increases focus, reduces stress.

🔥 3. Deep Diaphragm Breathing — 4 minutes ( 24 breaths )
• Inhale slowly through nose (fill stomach) — 5 seconds
• Exhale slowly through mouth — 5 seconds
• Keep shoulders still

Purpose: improves oxygen flow, calms the mind, increases discipline.

🔥 4. Focus Meditation — 2 minutes ( 12 breaths )
Focus on ONE thing only:
• Your breath
• A point on the floor
• A word like “calm” or “focus”

Rules:
• If your mind wanders, bring it back immediately
• No judgment, no emotion — just control

🔥 5. End Reset — 30 seconds ( 3 breaths )
• One deep inhale
• One slow exhale
• Open eyes slowly
• Stand up with intention

⭐ TOTAL TIME: 10 minutes
A clean, disciplined mental reset to improve focus and self‑control.`,

    "No social media until 3 tasks done": ` No scrolling. No dopamine hits.

🔥 1. Morning Rule
• No Instagram
• No Snapchat
• No TikTok
• No YouTube Shorts
• No notifications

You earn social media ONLY after completing 3 real tasks.

🔥 2. What Counts as a Task?
Any of the following:
• Hydrate
• Hygiene
• Gym / Training
• Mobility & Stretching
• Deep Work
• Meditation / Breathing
• Skill Practice
• Reading

Scrolling is NOT a task.

🔥 3. Why This Rule Exists
• Protect your focus
• Avoid morning dopamine crash
• Build discipline
• Start the day with intention
• Become mentally stronger than your impulses

🔥 4. When You Can Use Social Media
Only after:
✔ 3 tasks are completed
✔ Your mind is stable
✔ Your day has momentum

Even then: use it with control, not addiction.

⭐ Discipline is freedom. You control the phone — not the other way around.`,

    "Review goals (2 minutes)": `🎯 Review Goals Protocol (2 minutes)
Remind your mind who you are and what you’re building. No emotion — only direction.

🔥 1. Sit Still — 10 seconds
• No phone
• No noise
• No distractions

🔥 2. Read Your Main Goals — 1 minute
Focus on the core areas:
• Body (fat loss, strength, discipline)
• Mind (focus, deep work, calmness)
• Study (engineering, programming, analysis)
• Life (identity, discipline, future stability)

Read them slowly. Let them enter your mind.

🔥 3. Ask Yourself 3 Questions — 40 seconds
• Am I moving toward my goals?
• What is the next action today?
• What must I avoid to stay on track?

🔥 4. Close the Review — 10 seconds
• Deep breath in
• Slow exhale
• Stand up with intention

⭐ TOTAL TIME: 2 minutes
A fast mental alignment to keep you focused, disciplined, and intentional.`,

    "Skill practice": `📚 Skill Learning System
A disciplined, mechanical system to learn any skill with 30–45 minutes per day.

🔥 1. How to Learn Any Skill (Universal Method)
• Watch (10–15 min) — small chunk of lecture/tutorial, no rushing.
• Notes (5 min)— write only key ideas, definitions, examples.
• Practice (15–25 min)— coding, exercises, problem sets, projects.
• End Review (2 min) — what did I learn, what is next tomorrow.

Total Time: 30–45 minutes
Consistency > intensity.

🔥 2. Skills I Must Learn (Roadmap)
1) Computer Science Foundations
• Algorithms & Data Structures
• Time & Space Complexity
• Memory & CPU
• Operating Systems
• Computer Architecture

2) Programming Mastery
• C
• Python
• JavaScript
• Git & GitHub
• Debugging

3) Full‑Stack Web Development
• HTML/CSS/JS
• Responsive Design
• Frontend Projects
• Node.js
• Express
• APIs
• Authentication

4) Data & Automation
• Python Automation
• Pandas
• NumPy
• API Data Extraction
• Basic Statistics

5) Engineering Mathematics
• Calculus
• Linear Algebra
• Probability
• Optimization

6) Discipline & Systems
• Habit Systems
• Time Blocking
• Deep Work
• Dopamine Control
• Emotional Regulation

7) Trading Fundamentals
• Market Structure
• Risk Management
• Position Sizing
• Macro Basics
• Backtesting

🔥 3. Where to Learn Each Skill
1) Computer Science Foundations:
• Harvard CS50
• VisualAlg
• Neso Academy
• GeeksForGeeks

2) Programming Mastery:
• C — Neso Academy
• Python — Corey Schafer
• JavaScript — SuperSimpleDev
• Git & GitHub — FreeCodeCamp
• Debugging — YouTube practice

3) Full‑Stack Web Development:
• HTML/CSS/JS — SuperSimpleDev
• Node.js — Net Ninja
• Express — Net Ninja
• APIs — FreeCodeCamp

4) Data & Automation:
• Python Automation — TechWithTim
• Pandas — Data School
• NumPy — FreeCodeCamp
• APIs — Python requests tutorials

5) Engineering Mathematics:
• 3Blue1Brown
• Khan Academy
• MIT OpenCourseWare

6) Discipline & Systems:
• Atomic Habits summaries
• Deep Work concepts
• Dopamine detox basics
• Time blocking tutorials

7) Trading Fundamentals:
• Rayner Teo
• TradingRush
• Investopedia
• BabyPips

⭐ This is your complete Skill Practice System — structured, disciplined, and realistic.`,

    "Reading (10–20 min)": `📖 Reading System (15–20 minutes)
“I read to sharpen my mind, not to escape reality.”

🔥 1. How I Read a Book (Daily Protocol)
• Read 15–20 minutes — slow, focused, mechanical.
• Highlight only key ideas — discipline, strategy, money, business.
• Write ONE sentence: “What did I learn today?”
• Apply ONE idea in real life — reading without action is useless.

🔥 2. Book Blocks (Organized by Purpose)
📘 Business
• The Personal MBA
• Traction
• Zero to One
• The Lean Startup
• Good to Great

💰 Financial
• The Intelligent Investor
• Rich Dad Poor Dad
• The Psychology of Money
• How Finance Works
• The Richest Man in Babylon

🧠 Mental Structure
• Deep Work
• Atomic Habits
• The 48 Laws of Power
• The Subtle Art of Not Giving a F*ck
• Meditation

⚔️ Strategy & Thinking
• The Art of War
• Thinking, Fast and Slow
• Principles
• Antifragile
• The Almanack of Naval Ravikant

🔥 3. Reading Order (Optimized for Discipline & Growth)
Phase 1 — Mental Structure
1. Atomic Habits (current)
2. Deep Work
3. The Subtle Art of Not Giving a F*ck
4. Meditation
5. The 48 Laws of Power

Phase 2 — Strategy & Thinking
6. The Almanack of Naval Ravikant
7. The Art of War
8. Principles
9. Antifragile
10. Thinking, Fast and Slow

Phase 3 — Business
11. Zero to One
12. The Lean Startup
13. The Personal MBA
14. Traction
15. Good to Great

Phase 4 — Financial
16. The Psychology of Money
17. Rich Dad Poor Dad
18. The Richest Man in Babylon
19. How Finance Works
20. The Intelligent Investor

🔥 4. Reading Speed (Realistic)
• 10 pages per day (15–20 min)
• 1 book every 2–3 weeks
• Slow, consistent, disciplined progress

⭐ This system keeps your mind sharp, disciplined, and constantly improving.`,

    "Room reset (5 minutes)": `🧹 Environment Reset (5 minutes)
A clean environment = a clean mind. Reset your space with discipline.

🔥 1. Clear Surfaces — 1 minute
• Remove cups, plates, trash
• Put books and notebooks in one stack
• Wipe desk quickly

🔥 2. Organize Essentials — 1 minute
• Laptop in center
• Notebook + pen on the right
• Water bottle filled
• Headphones in one place

🔥 3. Reset Your Room — 2 minutes
• Fold blanket
• Fix pillow
• Put clothes in laundry or closet
• Straighten chair

🔥 4. Digital Reset — 1 minute
• Close all tabs
• Close all apps
• Clear notifications
• Set phone to Do Not Disturb

⭐ TOTAL TIME: 5 minutes
A clean environment keeps your mind sharp, focused, and disciplined.`,

    "Plan tomorrow (3 minutes)": `🗓️ Plan Tomorrow (3 minutes)
End the day with clarity. Know exactly what you will do next.

🔥 1. Choose 3 Main Tasks — 1 minute
Pick ONLY the top 3 tasks that move your life forward:
• Deep Work
• Skill Practice
• Gym / Training
• Reading
• CS50 / Study

Rule: If everything is important, nothing is important.

🔥 2. Set Time Blocks — 1 minute
Assign a time for each task:
• Morning
• Afternoon
• Evening

Example:
• Deep Work — morning
• Skill Practice — afternoon
• Gym — evening

🔥 3. Remove Obstacles — 1 minute
Prepare your environment so tomorrow is easy:
• Put water bottle ready
• Keep notebook + pen on desk
• Charge phone + laptop
• Lay out gym clothes
• Clear workspace

⭐ TOTAL TIME: 3 minutes
A simple, disciplined plan that makes tomorrow automatic.`,

    "Appearance Routine": `🧼 Appearance Routine (Daily + Weekly)
Look clean, sharp, and disciplined. No pimples, no dark marks, no strawberry legs.

🌟 FACE CARE (Bright, Clear, Even Skin)
Daily – Night (Aloe Vera Treatment)
• Wash face with a gentle cleanser.
• Apply a thin layer of pure aloe vera gel.
• Leave overnight, rinse in the morning.

2–3× / Week – AHA/BHA Exfoliation (Night Only)
• Wash and dry face completely.
• Apply a thin layer of AHA or BHA serum.
• Wait 1 minute.
• Apply moisturiser.

1–2× / Week – Yogurt + Turmeric Mask
• Mix 2 tsp yogurt + a pinch of turmeric.
• Apply for 10–12 minutes.
• Rinse with lukewarm water.

2× / Week – Lemon + Honey Spot Mask (Dark Marks Only)
• Mix 1 tsp lemon juice + 1 tsp honey + 1 tsp water.
• Apply on dark marks for 10 minutes.
• Night only. Avoid sunlight after.

Daily – Morning Sunscreen
• Apply SPF 30+ every morning to prevent darkening of marks.

------------------------------------------------------------
🌟 UNDERARM CARE (Bright, Smooth, Even Tone)
Daily
• Wash gently, apply moisturiser, use mild alcohol‑free deodorant.

2–3× / Week – AHA (Glycolic Acid)
• Wash and dry underarms. Apply thin layer of glycolic acid. Wait 1 min. Moisturise.

2× / Week – Sugar + Lemon + Honey Scrub
• Massage underarms 1 minute. Leave 5 minutes. Rinse and moisturise.

3× / Week – Aloe Vera + Turmeric Paste
• Apply 10–15 minutes. Rinse and moisturise.

------------------------------------------------------------
🌟 KNEE CARE (Even Tone + Smooth Skin)
Daily: Moisturise after shower.
2–3× / Week: AHA (Lactic/Glycolic).
2× / Week: Sugar + Lemon + Honey Scrub.
3× / Week: Aloe Vera + Turmeric Paste.
1× / Week: Baking Soda Paste (Knees Only).

------------------------------------------------------------
🌟 LEG CARE (Smooth, No Strawberry Skin)
2–3× / Week: Sugar–Oil Scrub.
2–3× / Week: BHA Body Lotion.
Shaving Routine (2–3× / Week): Warm water soak, sharp razor shaving, apply aloe after.

⭐ This routine keeps your face bright, legs smooth, and skin even-toned.`,

    "Grooming basics": `🧼 Basic Grooming
Look clean, sharp, and disciplined every single day.

🌟 DAILY (Morning)
• Brush teeth, wash face, apply moisturiser, comb hair, apply deodorant, wear clean clothes.

🌟 DAILY (Night)
• Brush teeth, wash face, apply moisturiser.

🌟 WEEKLY
• Trim nails, trim body hair, clean phone screen, wash pillowcase, clean shoes.

🌟 HAIR & ORAL & BODY CARE
• Wash hair 2–3× weekly. Brush teeth 2× daily. Shower daily using mild soap.

⭐ Basic grooming keeps you sharp, clean, and controlled.`,

    "Cold exposure": `❄️ Cold Exposure (Daily or 3–4× Weekly)
Cold exposure builds discipline, reduces inflammation, sharpens focus, and strengthens your nervous system.

🌟 OPTIONS
• Cold shower, Ice water face dunk, Cold water bucket for legs.

🌟 HOW TO STEPS
• Beginner: Last 30-45 seconds cold.
• Intermediate: 1-2 minutes cold.
• Advanced: Full 2-5 minutes cold shower.

⭐ Cold exposure builds discipline, mental strength, and emotional control.`,

    "No junk dopamine": `🧠 No Junk Dopamine Protocol
Remove cheap dopamine that destroys focus, discipline, and identity.

🌟 WHAT COUNTS AS JUNK
• Social media scrolling, random shorts, porn, junk food, constant phone checking.

🌟 THE 3‑TASK RULE
• No dopamine apps until 3 core tasks and your Deep Work block are completed.

⭐ This protocol makes your mind calm, focused, and unshakeable.`,

    "Daily tracking": `📊 Daily Tracking System
Track your discipline. Track your identity. What you measure, you control.

🌟 HOW TO TRACK
• At the end of every day, mark each task honestly as Done (✔️) or Not Done (❌). No emotions, just data. Use this information during your Sunday Weekly review to fix your weakest link.

⭐ Tracking is the mirror of your discipline.`
};


// ==========================================
// GENERATORE AUDIO (Sintetizzatore retro arcade)
// ==========================================
function playSound(type) {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        if (type === 'success') {
            // Suono stile moneta di Super Mario / Level Up
            osc.type = 'sine';
            osc.frequency.setValueAtTime(587.33, ctx.currentTime); // Nota D5
            osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);  // Nota A5
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.4);
        } else if (type === 'fail') {
    // Aggressive mechanical buzzer sound
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(100, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(60, ctx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.4);
}
        
    } catch (e) {
        console.log("Audio non supportato o bloccato dalle policy del browser.");
    }
}

// ==========================================
// 2. ENGINE CONTROLLER ARCHITECTURE
// ==========================================
let currentTask = "";
let doneTasks = JSON.parse(localStorage.getItem("doneTasks")) || {};

window.onload = function() {
    // FORCE ROUTINE ARCHITECTURE TO INITIALIZE COLD ON 28/06/2026
    if (!localStorage.getItem("lastSavedDateString")) {
        // Set the anchor to the calendar day before June 28
        const launchAnchoredDate = new Date("Sat Jun 272026");
        localStorage.setItem("lastSavedDateString", launchAnchoredDate.toDateString());
        localStorage.setItem("routineDayNumber", "1");
        localStorage.setItem("streak", "0");
        localStorage.setItem("failureCount", "0");
        
        // Ensure data states are perfectly empty for start
        doneTasks = {};
        localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
    }

    checkAndResetNewDay();
    loadHomePage();
    updateCardStyles();
};

function checkAndResetNewDay() {
    const date = new Date();
    const todayStr = date.toDateString(); 
    const lastOpenedDay = localStorage.getItem("lastSavedDateString");

    if (lastOpenedDay !== todayStr) {
        let totalDone = 0;
        let totalCount = Object.keys(taskCategories).length;
        Object.keys(taskCategories).forEach(task => {
            if (doneTasks[task]) totalDone++;
        });

        let streak = parseInt(localStorage.getItem("streak") || "0", 10);
        let routineDay = parseInt(localStorage.getItem("routineDayNumber") || "1", 10);
        let failures = parseInt(localStorage.getItem("failureCount") || "0", 10);

        // STRIKT CHECK: Did you complete EVERY single task?
        if (totalDone === totalCount && totalCount > 0) {
            streak += 1;
            localStorage.setItem("streak", String(streak));
        } else if (lastOpenedDay !== null) {
            // YOU BROKE THE CHAIN. Punishment applied.
            if (streak > 0) {
                alert(`⚠️ CHAIN BROKEN! You lost a streak of ${streak} days. You are back to the dirt.`);
            }
            streak = 0;
            failures += 1; // Tracks how many times you proved yourself weak
            localStorage.setItem("streak", "0");
            localStorage.setItem("failureCount", String(failures));
        }

        if (lastOpenedDay !== null) {
            routineDay += 1;
            localStorage.setItem("routineDayNumber", String(routineDay));
        }

        doneTasks = {}; 
        localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
        localStorage.setItem("lastSavedDateString", todayStr);
    }
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active');
    
    if (pageId === "homePage") {
        checkAndResetNewDay();
        loadHomePage();
    }
}

function goHome() { showPage("homePage"); }
function goToDaily() { showPage("dailyPage"); }
function goDaily() { showPage("dailyPage"); }

function loadHomePage() {
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const dateText = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
    document.getElementById("homeDateString").innerText = dateText;
    
    const routineDay = localStorage.getItem("routineDayNumber") || "1";
    const statusTagEl = document.querySelector(".statusTag");
    if (statusTagEl) {
        statusTagEl.innerText = `Routine Day ${routineDay}`;
    }

    const quoteEl = document.querySelector(".quoteBlock p");
    if (quoteEl) {
        const randomIndex = Math.floor(Math.random() * funnyQuotes.length);
        quoteEl.innerText = funnyQuotes[randomIndex];
    }

    const categoriesOrder = ["BODY", "MIND", "SKILL & GROWTH", "ENVIRONMENT", "APPEARANCE", "DISCIPLINE"];
    let totalDone = 0;
    let totalCount = 0;
    
    let progressBarsHTML = "";
    let trackerOverviewHTML = "";

    categoriesOrder.forEach(cat => {
        let catDone = 0;
        let catTotal = 0;
        let catTasksHTML = "";

        Object.keys(taskCategories).forEach(task => {
            if (taskCategories[task] === cat) {
                catTotal++;
                const isDone = !!doneTasks[task];
                if (isDone) catDone++;

                const safeTaskName = task.replace(/'/g, "\\'");
                const badgeClass = categoryBadgeStyles[cat] || "";

catTasksHTML += `
    <div class="trackerTaskRow ${isDone ? 'checked' : ''}" onclick="openTask('${safeTaskName}')">
        <div class="trackerTaskLeft">
            <span class="statusIcon">${isDone ? '✨' : '○'}</span>
            <span class="taskLabelName">${task}</span>
        </div>
        <span class="taskMiniBadge ${badgeClass}">${cat}</span>
    </div>
`;
                
            }
        });

        totalDone += catDone;
        totalCount += catTotal;

        const percentage = catTotal === 0 ? 0 : Math.round((catDone / catTotal) * 100);
        progressBarsHTML += `
            <div class="progressBarBlock">
                <div class="progressMetaRow">
                    <span class="progressCategoryName">${cat}</span>
                    <span class="progressFractionValue">${catDone}/${catTotal} (${percentage}%)</span>
                </div>
                <div class="progressBarTrack">
                    <div class="progressBarFill" style="width: ${percentage}%;"></div>
                </div>
            </div>
        `;

        const badgeClass = categoryBadgeStyles[cat] || "";
        trackerOverviewHTML += `
            <div class="trackerCategorySection">
                <div class="category ${badgeClass}">${cat}</div>
                <div class="trackerTasksContainer">${catTasksHTML}</div>
            </div>
        `;
    });

    document.getElementById("progressBarsContainer").innerHTML = progressBarsHTML;
    
    const trackerContainer = document.getElementById("trackerOverviewContainer");
    if (trackerContainer) trackerContainer.innerHTML = trackerOverviewHTML;

    const globalRatio = totalCount === 0 ? 0 : Math.round((totalDone / totalCount) * 100);
    document.getElementById("totalPercentDisplay").innerText = `${globalRatio}%`;
    document.getElementById("totalFractionDisplay").innerText = `${totalDone}/${totalCount} Tasks`;

    // AGGIORNAMENTO DINAMICO DEL LIVELLO E DELL'INSULTO SULLA HOME
    const currentLevel = disciplineLevels.find(lvl => globalRatio <= lvl.max) || disciplineLevels[disciplineLevels.length - 1];
    
    // Cerchiamo un container per stampare l'insulto/livello. Se non esiste nel tuo HTML, cambierà temporaneamente il testo del counter dei task.
    const levelContainer = document.getElementById("disciplineLevelDisplay");
    if (levelContainer) {
        levelContainer.innerHTML = `<h3 style="color:#facc15; margin:5px 0;">${currentLevel.title}</h3><small style="opacity:0.8;">${currentLevel.desc}</small>`;
    } else {
        // Se non hai quell'ID, iniettiamo l'insulto nel display della frazione per farlo vedere!
        document.getElementById("totalFractionDisplay").innerText = `${totalDone}/${totalCount} Tasks - ${currentLevel.title}`;
    }

    const streak = localStorage.getItem("streak") || "0";
    document.getElementById("streakCountDisplay").innerText = `${streak} 🔥 Days`;
}

function openTask(taskName) {
    currentTask = taskName;
    const titleEl = document.getElementById("taskTitle");
    const descEl = document.getElementById("taskDescription");
    const btnEl = document.getElementById("doneButton");

    if (titleEl) titleEl.innerText = taskName;
    if (descEl) {
        const rawDesc = taskDescriptions[taskName] || "Setup tracking configurations...";
        descEl.innerHTML = rawDesc.replace(/\n/g, "<br>");
    }

    if (btnEl) {
        if (doneTasks[taskName]) {
            btnEl.innerText = "⚡ PROTOCOL AUTHORIZED & LOCKED";
    btnEl.style.background = "linear-gradient(135deg, #065f46 0%, #10b981 100%)";
    btnEl.style.boxShadow = "0 0 20px rgba(16, 185, 129, 0.4)";

        } else {
          btnEl.innerHTML = "🔥 EXECUTE COMMITMENT";
    btnEl.style.background = "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)";
    btnEl.style.boxShadow = "0 0 20px rgba(220, 38, 38, 0.2)";
        }
    
    showPage("taskPage");
}}

function toggleDone() {
    if (!currentTask) return;

    doneTasks[currentTask] = !doneTasks[currentTask];
    localStorage.setItem("doneTasks", JSON.stringify(doneTasks));
    
    if (doneTasks[currentTask]) {
        // Riproduce il suono del traguardo ed effettua coriandoli
        playSound('success');
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 120,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#10b981', '#facc15', '#ec4899']
            });
        }
    } else {
        // Suono di fallimento se rimuovi la spunta
        playSound('fail');
    }

    const btnEl = document.getElementById("doneButton");
    if (btnEl) {
        if (doneTasks[currentTask]) {
            btnEl.innerText = "Marked as Done ✔️";
            btnEl.style.background = "linear-gradient(135deg, #059669 0%, #10b981 100%)";
        } else {
            btnEl.innerText = "Mark as Done";
            btnEl.style.background = "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)";
        }
    }
    updateCardStyles();
}

function updateCardStyles() {
    document.querySelectorAll(".card").forEach(card => {
        const onClickAttr = card.getAttribute("onclick") || "";
        let matched = false;
        
        for (let taskName in taskCategories) {
            if (onClickAttr.includes(`'${taskName}'`)) {
                if (doneTasks[taskName]) matched = true;
                break;
            }
        }

        if (matched) card.classList.add("done");
        else card.classList.remove("done");
    });
}
