// ─── SettleUp Demo Data ───────────────────────────────────
// Edit this file to change the preloaded test data.
// Keep this file in the same folder as settleup.html.
//
// Split types:
//   'even'     — divide total equally among everyone in splitWith
//   'custom'   — each person has a specific amount in splitAmounts
//   'personal' — one person owes the full amount (splitWith has 1 id)
//
// Person IDs must match the ids array: first person = 0, second = 1, etc.

window.SETTLEUP_DEMO = {
  tabName: "Disneyland 2026",

  people: [
    { id: 0, name: "Erik" },
    { id: 1, name: "Chris" },
    { id: 2, name: "Landon" },
    { id: 3, name: "Larry" }
  ],

  expenses: [
    // ── Even splits (everyone) ──────────────────────────────
    {
      id: 0,
      desc: "Park tickets",
      amount: 240.00,
      paidBy: 3,           // Larry paid
      splitType: "even",
      splitWith: [0,1,2,3],
      splitAmounts: null
    },
    {
      id: 1,
      desc: "Hotel night 1",
      amount: 180.00,
      paidBy: 0,           // Erik paid
      splitType: "even",
      splitWith: [0,1,2,3],
      splitAmounts: null
    },
    {
      id: 2,
      desc: "Gas there",
      amount: 55.00,
      paidBy: 0,           // Erik paid
      splitType: "even",
      splitWith: [0,1,2,3],
      splitAmounts: null
    },
    {
      id: 3,
      desc: "Gas back",
      amount: 48.00,
      paidBy: 3,           // Larry paid
      splitType: "even",
      splitWith: [0,1,2,3],
      splitAmounts: null
    },
    {
      id: 4,
      desc: "Lunch Day 1",
      amount: 88.00,
      paidBy: 1,           // Chris paid
      splitType: "even",
      splitWith: [0,1,2,3],
      splitAmounts: null
    },

    // ── Custom splits (restaurant with different orders) ────
    {
      id: 5,
      desc: "Dinner — Blue Bayou",
      amount: 126.85,
      paidBy: 0,           // Erik paid
      splitType: "custom",
      splitWith: [0,1,2,3],
      splitAmounts: {
        0: 28.50,          // Erik's food + prorated tax/tip
        1: 35.20,
        2: 31.75,
        3: 31.40
      }
    },

    // ── Personal (one person's item) ────────────────────────
    {
      id: 6,
      desc: "Churro for Chris",
      amount: 6.00,
      paidBy: 0,           // Erik paid
      splitType: "personal",
      splitWith: [1],      // Chris owes
      splitAmounts: null
    },
    {
      id: 7,
      desc: "Souvenir cup — Landon",
      amount: 22.00,
      paidBy: 3,           // Larry paid
      splitType: "personal",
      splitWith: [2],      // Landon owes
      splitAmounts: null
    },
    {
      id: 8,
      desc: "Dole Whip for Erik",
      amount: 8.00,
      paidBy: 1,           // Chris paid
      splitType: "personal",
      splitWith: [0],      // Erik owes
      splitAmounts: null
    },
    {
      id: 9,
      desc: "Parking",
      amount: 35.00,
      paidBy: 0,           // Erik paid
      splitType: "even",
      splitWith: [0,1,2,3],
      splitAmounts: null
    },
    {
      id: 10,
      desc: "Snacks & drinks",
      amount: 38.00,
      paidBy: 3,           // Larry paid
      splitType: "even",
      splitWith: [0,1,2,3],
      splitAmounts: null
    }
  ]
};
