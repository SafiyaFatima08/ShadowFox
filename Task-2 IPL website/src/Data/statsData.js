// src/Data/statsData.js
export const detailedStats = {
  batting: [
    { name: "Ruturaj Gaikwad", matches: 14, runs: 583, avg: 44.85, sr: 141.50, high: "108*", 100: 1, 50: 4 },
    { name: "Shivam Dube", matches: 14, runs: 396, avg: 36.00, sr: 162.30, high: "66*", 100: 0, 50: 3 },
    { name: "Daryl Mitchell", matches: 13, runs: 318, avg: 28.91, sr: 142.60, high: "63", 100: 0, 50: 2 },
    { name: "MS Dhoni", matches: 14, runs: 161, avg: 53.67, sr: 220.55, high: "37*", 100: 0, 50: 0 },
  ],
  bowling: [
    { name: "Tushar Deshpande", matches: 13, wickets: 17, eco: 8.88, avg: 24.94, best: "4/27", m: 0 },
    { name: "Matheesha Pathirana", matches: 6, wickets: 13, eco: 7.68, avg: 13.00, best: "4/28", m: 0 },
    { name: "Ravindra Jadeja", matches: 14, wickets: 8, eco: 7.85, avg: 46.13, best: "3/18", m: 0 },
    { name: "Mustafizur Rahman", matches: 9, wickets: 14, eco: 9.26, avg: 22.71, best: "4/29", m: 0 },
  ],
  teamRecords: [
    { title: "Highest Team Total", value: "246/5", against: "RR", year: "2010" },
    { title: "Lowest Team Total", value: "79", against: "MI", year: "2013" },
    { title: "Most Wins in Season", value: "11 Wins", against: "All", year: "2011" },
    { title: "Highest Successful Chase", value: "206/4", against: "RCB", year: "2012" },
  ],
  history: [
    { year: "2010", result: "Winners", captain: "MS Dhoni", runnerUp: "MI" },
    { year: "2011", result: "Winners", captain: "MS Dhoni", runnerUp: "RCB" },
    { year: "2018", result: "Winners", captain: "MS Dhoni", runnerUp: "SRH" },
    { year: "2021", result: "Winners", captain: "MS Dhoni", runnerUp: "KKR" },
    { year: "2023", result: "Winners", captain: "MS Dhoni", runnerUp: "GT" },
  ],
  venues: [
    { stadium: "M.A. Chidambaram (Chepauk)", matches: 64, won: 48, lost: 16, winRate: "75%" },
    { stadium: "Wankhede Stadium", matches: 25, won: 15, lost: 10, winRate: "60%" },
    { stadium: "Dubai International", matches: 12, won: 9, lost: 3, winRate: "75%" },
  ],
  achievements: [
    { title: "5 IPL Titles", desc: "Joint most titles in IPL history (2010, 2011, 2018, 2021, 2023)" },
    { title: "2 CL T20 Titles", desc: "Champions League T20 winners in 2010 and 2014" },
    { title: "Fair Play Awards", desc: "Record 6-time winners of the IPL Fair Play Award" },
    { title: "Most Playoffs", desc: "Qualified for playoffs in 12 out of 14 seasons played" }
  ]
};