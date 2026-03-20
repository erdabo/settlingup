// ─── SettlingUp Demo Scenarios ───────────────────────────
// Each demo creates a fresh real tab when selected.
// Tab name is prefixed "DEMO: " automatically.
//
// Split types: 'even' | 'custom' | 'personal'
// Person IDs are 0-based within each demo.

window.SETTLINGUP_DEMOS = [

  // ── 1. Bachelor/Bachelorette Party ──────────────────────
  {
    title: "Bach Party Vegas",
    icon: "🥂",
    color: "rgba(155,69,186,0.18)",

    people: [
      { id: 0,  name: "Jordan" },   // organiser
      { id: 1,  name: "Taylor" },
      { id: 2,  name: "Morgan" },
      { id: 3,  name: "Riley" },
      { id: 4,  name: "Casey" },
      { id: 5,  name: "Avery" },
      { id: 6,  name: "Quinn" },
      { id: 7,  name: "Blake" },
      { id: 8,  name: "Sage" },
      { id: 9,  name: "Drew" },
      { id: 10, name: "Reese" },
      { id: 11, name: "Alex" }      // the guest of honour
    ],

    expenses: [
      {
        id: 0, desc: "Airbnb — 2 nights", amount: 1440.00,
        paidBy: 0, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7,8,9,10,11], splitAmounts: null
      },
      {
        id: 1, desc: "Matching sashes & accessories", amount: 156.00,
        paidBy: 1, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7,8,9,10], // everyone except the guest of honour
        splitAmounts: null
      },
      {
        id: 2, desc: "Drag brunch tickets", amount: 480.00,
        paidBy: 2, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7,8,9,10,11], splitAmounts: null
      },
      {
        id: 3, desc: "Pool party cabana", amount: 350.00,
        paidBy: 0, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7,8,9,10,11], splitAmounts: null
      },
      {
        id: 4, desc: "Dinner — steakhouse", amount: 892.50,
        paidBy: 3, splitType: "custom",
        splitWith: [0,1,2,3,4,5,6,7,8,9,10,11],
        splitAmounts: {
          0:72.00, 1:68.50, 2:95.00, 3:55.00, 4:88.00,
          5:72.00, 6:65.00, 7:90.00, 8:55.00, 9:78.00,
          10:68.00, 11:86.00
        }
      },
      {
        id: 5, desc: "Nightclub entry + bottle", amount: 1200.00,
        paidBy: 4, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7,8,9,10,11], splitAmounts: null
      },
      {
        id: 6, desc: "Ubers — night out (x4 cars)", amount: 148.00,
        paidBy: 5, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7,8,9,10,11], splitAmounts: null
      },
      {
        id: 7, desc: "Brunch Day 2", amount: 320.00,
        paidBy: 6, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7,8,9,10,11], splitAmounts: null
      },
      {
        id: 8, desc: "Honouree's flight contribution", amount: 300.00,
        paidBy: 7, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7,8,9,10], // everyone chips in except Alex
        splitAmounts: null
      },
      {
        id: 9, desc: "Spa treatments", amount: 660.00,
        paidBy: 8, splitType: "even",
        splitWith: [0,2,4,6,8,10], // only 6 people did the spa
        splitAmounts: null
      },
      {
        id: 10, desc: "Cocktail making class", amount: 420.00,
        paidBy: 9, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7,8,9,10,11], splitAmounts: null
      },
      {
        id: 11, desc: "Late-night snacks & drinks", amount: 185.00,
        paidBy: 10, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7,8,9,10,11], splitAmounts: null
      }
    ]
  },

  // ── 2. Family Beach Vacation ────────────────────────────
  {
    title: "Family Beach Trip",
    icon: "🏖️",
    color: "rgba(0,212,255,0.12)",

    // Three family units — adults split, kids don't have IDs
    people: [
      { id: 0, name: "Dad (Mike)" },
      { id: 1, name: "Mom (Sarah)" },
      { id: 2, name: "Uncle Dave" },
      { id: 3, name: "Aunt Linda" },
      { id: 4, name: "Grandpa Joe" },
      { id: 5, name: "Grandma Sue" },
      { id: 6, name: "Cousin Emma" },
      { id: 7, name: "Cousin Ryan" }
    ],

    expenses: [
      {
        id: 0, desc: "Beach house rental — 7 nights", amount: 3500.00,
        paidBy: 0, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7], splitAmounts: null
      },
      {
        id: 1, desc: "Groceries — week 1", amount: 420.00,
        paidBy: 1, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7], splitAmounts: null
      },
      {
        id: 2, desc: "Boat rental — day trip", amount: 680.00,
        paidBy: 2, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7], splitAmounts: null
      },
      {
        id: 3, desc: "Seafood dinner — night 2", amount: 485.00,
        paidBy: 3, splitType: "custom",
        splitWith: [0,1,2,3,4,5,6,7],
        splitAmounts: {
          0: 72.00, 1: 68.00, 2: 65.00, 3: 58.00,
          4: 52.00, 5: 52.00, 6: 60.00, 7: 58.00
        }
      },
      {
        id: 4, desc: "Gas — Mike's car (drove down)", amount: 95.00,
        paidBy: 0, splitType: "even",
        splitWith: [0,1,4,5], // only people in Mike's car
        splitAmounts: null
      },
      {
        id: 5, desc: "Gas — Dave's car", amount: 88.00,
        paidBy: 2, splitType: "even",
        splitWith: [2,3,6,7], splitAmounts: null
      },
      {
        id: 6, desc: "Kayak & paddleboard rentals", amount: 240.00,
        paidBy: 6, splitType: "even",
        splitWith: [0,1,2,3,6,7], // grandparents sat this one out
        splitAmounts: null
      },
      {
        id: 7, desc: "Mini golf", amount: 120.00,
        paidBy: 7, splitType: "even",
        splitWith: [0,1,2,3,6,7], splitAmounts: null
      },
      {
        id: 8, desc: "Ice cream — daily runs", amount: 85.00,
        paidBy: 4, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7], splitAmounts: null
      },
      {
        id: 9, desc: "Aquarium tickets", amount: 210.00,
        paidBy: 5, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7], splitAmounts: null
      },
      {
        id: 10, desc: "Farewell dinner — nice restaurant", amount: 620.00,
        paidBy: 0, splitType: "custom",
        splitWith: [0,1,2,3,4,5,6,7],
        splitAmounts: {
          0: 90.00, 1: 85.00, 2: 82.00, 3: 78.00,
          4: 70.00, 5: 70.00, 6: 75.00, 7: 70.00
        }
      },
      {
        id: 11, desc: "Sunscreen & beach supplies", amount: 68.00,
        paidBy: 1, splitType: "even",
        splitWith: [0,1,2,3,4,5,6,7], splitAmounts: null
      }
    ]
  },

  // ── 3. Group Date Night ─────────────────────────────────
  {
    title: "Date Night Out",
    icon: "🍷",
    color: "rgba(224,90,90,0.15)",

    people: [
      { id: 0, name: "Sam" },
      { id: 1, name: "Jamie" },
      { id: 2, name: "Chris" },
      { id: 3, name: "Pat" },
      { id: 4, name: "Nico" },
      { id: 5, name: "Mel" }
    ],

    expenses: [
      {
        id: 0, desc: "Uber to dinner", amount: 28.50,
        paidBy: 0, splitType: "even",
        splitWith: [0,1,2,3,4,5], splitAmounts: null
      },
      {
        id: 1, desc: "Dinner — Osteria (food)", amount: 310.00,
        paidBy: 1, splitType: "custom",
        splitWith: [0,1,2,3,4,5],
        splitAmounts: {
          0: 46.00, 1: 58.00, 2: 52.00,
          3: 46.00, 4: 54.00, 5: 54.00
        }
      },
      {
        id: 2, desc: "Wine — bottle at dinner", amount: 95.00,
        paidBy: 2, splitType: "even",
        splitWith: [0,1,2,3,4,5], splitAmounts: null
      },
      {
        id: 8, desc: "Dinner tax (8%)", amount: 24.80,
        paidBy: 1, splitType: "custom",
        splitWith: [0,1,2,3,4,5],
        splitAmounts: {
          0: 3.68, 1: 4.64, 2: 4.16,
          3: 3.68, 4: 4.32, 5: 4.32
        }
      },
      {
        id: 9, desc: "Dinner tip (20%)", amount: 62.00,
        paidBy: 1, splitType: "custom",
        splitWith: [0,1,2,3,4,5],
        splitAmounts: {
          0: 9.20, 1: 11.60, 2: 10.40,
          3: 9.20, 4: 10.80, 5: 10.80
        }
      },
      {
        id: 3, desc: "Bowling — shoes & games", amount: 132.00,
        paidBy: 3, splitType: "even",
        splitWith: [0,1,2,3,4,5], splitAmounts: null
      },
      {
        id: 4, desc: "Drinks at the bar", amount: 148.00,
        paidBy: 4, splitType: "even",
        splitWith: [0,1,2,3,4,5], splitAmounts: null
      },
      {
        id: 5, desc: "Uber home", amount: 34.00,
        paidBy: 5, splitType: "even",
        splitWith: [0,1,2,3,4,5], splitAmounts: null
      },
      {
        id: 6, desc: "Late-night pizza slice", amount: 42.00,
        paidBy: 0, splitType: "even",
        splitWith: [0,1,2,3,4,5], splitAmounts: null
      }
    ]
  }

];
