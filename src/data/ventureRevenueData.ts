export type TimePeriod = '1d' | '7d' | '30d' | '3m' | '6m' | '1y' | '3y' | '6y' | '10y' | 'lifetime'

export interface VentureRevenue {
  id: number
  ventureName: string
  teamMembers: string[] // Team members who run/contribute to this venture
  revenue: number
  netEarnings?: number // Optional: show profit vs revenue
}

export interface VentureRevenueData {
  [key: string]: VentureRevenue[]
}

// Real P&L data from Team Apollo 2024-2025
// Note: Using actual figures from the financial statements
export const ventureRevenueData: VentureRevenueData = {
  'lifetime': [
    {
      id: 0,
      ventureName: "🏆 TEAM APOLLO TOTAL",
      teamMembers: ["All Team Members"],
      revenue: 41689.5, // Updated total: £21,689.5 + £20,000 (Sam's Sales)
      netEarnings: 41689.5
    },
    {
      id: 1,
      ventureName: "Sam's Sales",
      teamMembers: ["Sam"],
      revenue: 20000, // £5K (summer 2024) + £15K (2025)
      netEarnings: 20000
    },
    {
      id: 2,
      ventureName: "Siso Agency",
      teamMembers: ["Shaan", "Sam"],
      revenue: 9150,
      netEarnings: -13291 // After expenses (software, crypto wallet, travel, salaries)
    },
    {
      id: 3,
      ventureName: "Ripple",
      teamMembers: ["Grace"],
      revenue: 3500,
      netEarnings: 3500 // No expenses recorded
    },
    {
      id: 4,
      ventureName: "Delta (Talent + Sports)",
      teamMembers: ["Jaymie", "Harry", "George"],
      revenue: 2450,
      netEarnings: 1121 // After expenses (£1,053 + £276)
    },
    {
      id: 5,
      ventureName: "Leo Vinted/Carboot",
      teamMembers: ["Leo"],
      revenue: 1801,
      netEarnings: 1801
    },
    {
      id: 6,
      ventureName: "Flippedit",
      teamMembers: ["David"],
      revenue: 1494,
      netEarnings: 1419 // After £75 advertising
    },
    {
      id: 7,
      ventureName: "Logan Vinted",
      teamMembers: ["Logan"],
      revenue: 1000,
      netEarnings: 1000
    },
    {
      id: 8,
      ventureName: "AlexCountX",
      teamMembers: ["Alex K"],
      revenue: 550, // £443 (2024) + £107 (2025)
      netEarnings: 550
    },
    {
      id: 9,
      ventureName: "DorchGarms",
      teamMembers: ["Alex"],
      revenue: 528,
      netEarnings: 338 // After £190 expenses
    },
    {
      id: 10,
      ventureName: "Frat Friday",
      teamMembers: ["Matt", "Shaan", "Leo", "Ares"],
      revenue: 527,
      netEarnings: -340 // After £867 expenses
    },
    {
      id: 11,
      ventureName: "BJ Barbers",
      teamMembers: ["Ben"],
      revenue: 490, // £230 (2024) + £260 (2025)
      netEarnings: 490
    },
    {
      id: 12,
      ventureName: "Alex Gold",
      teamMembers: ["Alex H"],
      revenue: 372.5,
      netEarnings: 372.5
    },
    {
      id: 13,
      ventureName: "Siso Diamonds",
      teamMembers: ["Shaan"],
      revenue: -10400, // Negative cash flow (£10.4K spent, holding assets)
      netEarnings: -10700 // Total expenses
    },
  ],

  // Extrapolated data for different time periods
  // (You can adjust these based on actual monthly breakdowns)
  '1y': [
    { id: 0, ventureName: "🏆 TEAM APOLLO TOTAL", teamMembers: ["All Team Members"], revenue: 36689.5, netEarnings: 36689.5 },
    { id: 1, ventureName: "Sam's Sales", teamMembers: ["Sam"], revenue: 15000, netEarnings: 15000 }, // Only 2025 (Oct 24-Oct 25 doesn't include summer 24)
    { id: 2, ventureName: "Siso Agency", teamMembers: ["Shaan", "Sam"], revenue: 9150, netEarnings: -13291 },
    { id: 3, ventureName: "Ripple", teamMembers: ["Grace"], revenue: 3500, netEarnings: 3500 },
    { id: 4, ventureName: "Delta (Talent + Sports)", teamMembers: ["Jaymie", "Harry", "George"], revenue: 2450, netEarnings: 1121 },
    { id: 5, ventureName: "Leo Vinted/Carboot", teamMembers: ["Leo"], revenue: 1801, netEarnings: 1801 },
    { id: 6, ventureName: "Flippedit", teamMembers: ["David"], revenue: 1494, netEarnings: 1419 },
    { id: 7, ventureName: "Logan Vinted", teamMembers: ["Logan"], revenue: 1000, netEarnings: 1000 },
    { id: 8, ventureName: "AlexCountX", teamMembers: ["Alex K"], revenue: 550, netEarnings: 550 },
    { id: 9, ventureName: "DorchGarms", teamMembers: ["Alex"], revenue: 528, netEarnings: 338 },
    { id: 10, ventureName: "Frat Friday", teamMembers: ["Matt", "Shaan", "Leo", "Ares"], revenue: 527, netEarnings: -340 },
    { id: 11, ventureName: "BJ Barbers", teamMembers: ["Ben"], revenue: 490, netEarnings: 490 },
    { id: 12, ventureName: "Alex Gold", teamMembers: ["Alex H"], revenue: 372.5, netEarnings: 372.5 },
    { id: 13, ventureName: "Siso Diamonds", teamMembers: ["Shaan"], revenue: -10400, netEarnings: -10700 },
  ],

  '6m': [
    { id: 0, ventureName: "🏆 TEAM APOLLO TOTAL", teamMembers: ["All Team Members"], revenue: 24700, netEarnings: 24700 },
    { id: 1, ventureName: "Sam's Sales", teamMembers: ["Sam"], revenue: 10500, netEarnings: 10500 }, // Apr-Oct 2025 (~70% of £15K)
    { id: 2, ventureName: "Siso Agency", teamMembers: ["Shaan", "Sam"], revenue: 5000, netEarnings: -7000 },
    { id: 3, ventureName: "Ripple", teamMembers: ["Grace"], revenue: 2500, netEarnings: 2500 },
    { id: 4, ventureName: "Delta (Talent + Sports)", teamMembers: ["Jaymie", "Harry", "George"], revenue: 1500, netEarnings: 700 },
    { id: 5, ventureName: "Leo Vinted/Carboot", teamMembers: ["Leo"], revenue: 1200, netEarnings: 1200 },
    { id: 6, ventureName: "Flippedit", teamMembers: ["David"], revenue: 1000, netEarnings: 950 },
    { id: 7, ventureName: "Logan Vinted", teamMembers: ["Logan"], revenue: 700, netEarnings: 700 },
    { id: 8, ventureName: "DorchGarms", teamMembers: ["Alex"], revenue: 400, netEarnings: 250 },
    { id: 9, ventureName: "AlexCountX", teamMembers: ["Alex K"], revenue: 380, netEarnings: 380 },
    { id: 10, ventureName: "Frat Friday", teamMembers: ["Matt", "Shaan", "Leo", "Ares"], revenue: 350, netEarnings: -200 },
    { id: 11, ventureName: "BJ Barbers", teamMembers: ["Ben"], revenue: 320, netEarnings: 320 },
    { id: 12, ventureName: "Alex Gold", teamMembers: ["Alex H"], revenue: 250, netEarnings: 250 },
    { id: 13, ventureName: "Siso Diamonds", teamMembers: ["Shaan"], revenue: -8000, netEarnings: -8000 },
  ],

  '3m': [
    { id: 0, ventureName: "🏆 TEAM APOLLO TOTAL", teamMembers: ["All Team Members"], revenue: 16180, netEarnings: 16180 },
    { id: 1, ventureName: "Sam's Sales", teamMembers: ["Sam"], revenue: 6000, netEarnings: 6000 }, // Jul-Oct 2025 (~40% of £15K)
    { id: 2, ventureName: "Siso Agency", teamMembers: ["Shaan", "Sam"], revenue: 3000, netEarnings: -4000 },
    { id: 3, ventureName: "Ripple", teamMembers: ["Grace"], revenue: 1750, netEarnings: 1750 },
    { id: 4, ventureName: "Delta (Talent + Sports)", teamMembers: ["Jaymie", "Harry", "George"], revenue: 1000, netEarnings: 450 },
    { id: 5, ventureName: "Leo Vinted/Carboot", teamMembers: ["Leo"], revenue: 900, netEarnings: 900 },
    { id: 6, ventureName: "Flippedit", teamMembers: ["David"], revenue: 700, netEarnings: 660 },
    { id: 7, ventureName: "Logan Vinted", teamMembers: ["Logan"], revenue: 500, netEarnings: 500 },
    { id: 8, ventureName: "DorchGarms", teamMembers: ["Alex"], revenue: 300, netEarnings: 180 },
    { id: 9, ventureName: "AlexCountX", teamMembers: ["Alex K"], revenue: 270, netEarnings: 270 },
    { id: 10, ventureName: "Frat Friday", teamMembers: ["Matt", "Shaan", "Leo", "Ares"], revenue: 250, netEarnings: -150 },
    { id: 11, ventureName: "BJ Barbers", teamMembers: ["Ben"], revenue: 230, netEarnings: 230 },
    { id: 12, ventureName: "Alex Gold", teamMembers: ["Alex H"], revenue: 180, netEarnings: 180 },
    { id: 13, ventureName: "Siso Diamonds", teamMembers: ["Shaan"], revenue: -5000, netEarnings: -5000 },
  ],

  '30d': [
    { id: 0, ventureName: "🏆 TEAM APOLLO TOTAL", teamMembers: ["All Team Members"], revenue: 7320, netEarnings: 7320 },
    { id: 1, ventureName: "Sam's Sales", teamMembers: ["Sam"], revenue: 1500, netEarnings: 1500 }, // Last 30 days (~10% of £15K)
    { id: 2, ventureName: "Ripple", teamMembers: ["Grace"], revenue: 1250, netEarnings: 1250 },
    { id: 3, ventureName: "Siso Agency", teamMembers: ["Shaan", "Sam"], revenue: 800, netEarnings: -1500 },
    { id: 4, ventureName: "Delta (Talent + Sports)", teamMembers: ["Jaymie", "Harry", "George"], revenue: 600, netEarnings: 300 },
    { id: 5, ventureName: "Leo Vinted/Carboot", teamMembers: ["Leo"], revenue: 500, netEarnings: 500 },
    { id: 6, ventureName: "Flippedit", teamMembers: ["David"], revenue: 400, netEarnings: 375 },
    { id: 7, ventureName: "Logan Vinted", teamMembers: ["Logan"], revenue: 300, netEarnings: 300 },
    { id: 8, ventureName: "Frat Friday", teamMembers: ["Matt", "Shaan", "Leo", "Ares"], revenue: 200, netEarnings: -100 },
    { id: 9, ventureName: "DorchGarms", teamMembers: ["Alex"], revenue: 180, netEarnings: 110 },
    { id: 10, ventureName: "AlexCountX", teamMembers: ["Alex K"], revenue: 150, netEarnings: 150 },
    { id: 11, ventureName: "BJ Barbers", teamMembers: ["Ben"], revenue: 140, netEarnings: 140 },
    { id: 12, ventureName: "Alex Gold", teamMembers: ["Alex H"], revenue: 100, netEarnings: 100 },
    { id: 13, ventureName: "Siso Diamonds", teamMembers: ["Shaan"], revenue: -2000, netEarnings: -2000 },
  ],

  '7d': [
    { id: 0, ventureName: "🏆 TEAM APOLLO TOTAL", teamMembers: ["All Team Members"], revenue: 1763, netEarnings: 1763 },
    { id: 1, ventureName: "Sam's Sales", teamMembers: ["Sam"], revenue: 288, netEarnings: 288 }, // Last 7 days (£15K/52 weeks)
    { id: 2, ventureName: "Ripple", teamMembers: ["Grace"], revenue: 350, netEarnings: 350 },
    { id: 3, ventureName: "Siso Agency", teamMembers: ["Shaan", "Sam"], revenue: 250, netEarnings: -400 },
    { id: 4, ventureName: "Leo Vinted/Carboot", teamMembers: ["Leo"], revenue: 180, netEarnings: 180 },
    { id: 5, ventureName: "Delta (Talent + Sports)", teamMembers: ["Jaymie", "Harry", "George"], revenue: 150, netEarnings: 80 },
    { id: 6, ventureName: "Flippedit", teamMembers: ["David"], revenue: 120, netEarnings: 115 },
    { id: 7, ventureName: "Logan Vinted", teamMembers: ["Logan"], revenue: 100, netEarnings: 100 },
    { id: 8, ventureName: "DorchGarms", teamMembers: ["Alex"], revenue: 60, netEarnings: 40 },
    { id: 9, ventureName: "Frat Friday", teamMembers: ["Matt", "Shaan", "Leo", "Ares"], revenue: 50, netEarnings: -30 },
    { id: 10, ventureName: "AlexCountX", teamMembers: ["Alex K"], revenue: 45, netEarnings: 45 },
    { id: 11, ventureName: "BJ Barbers", teamMembers: ["Ben"], revenue: 40, netEarnings: 40 },
    { id: 12, ventureName: "Alex Gold", teamMembers: ["Alex H"], revenue: 30, netEarnings: 30 },
    { id: 13, ventureName: "Siso Diamonds", teamMembers: ["Shaan"], revenue: -500, netEarnings: -500 },
  ],

  '1d': [
    { id: 0, ventureName: "🏆 TEAM APOLLO TOTAL", teamMembers: ["All Team Members"], revenue: 366, netEarnings: 366 },
    { id: 1, ventureName: "Sam's Sales", teamMembers: ["Sam"], revenue: 41, netEarnings: 41 }, // Last day (£15K/365 days)
    { id: 2, ventureName: "Ripple", teamMembers: ["Grace"], revenue: 80, netEarnings: 80 },
    { id: 3, ventureName: "Siso Agency", teamMembers: ["Shaan", "Sam"], revenue: 50, netEarnings: -80 },
    { id: 4, ventureName: "Leo Vinted/Carboot", teamMembers: ["Leo"], revenue: 40, netEarnings: 40 },
    { id: 5, ventureName: "Delta (Talent + Sports)", teamMembers: ["Jaymie", "Harry", "George"], revenue: 35, netEarnings: 20 },
    { id: 6, ventureName: "Flippedit", teamMembers: ["David"], revenue: 30, netEarnings: 28 },
    { id: 7, ventureName: "Logan Vinted", teamMembers: ["Logan"], revenue: 25, netEarnings: 25 },
    { id: 8, ventureName: "Frat Friday", teamMembers: ["Matt", "Shaan", "Leo", "Ares"], revenue: 20, netEarnings: -15 },
    { id: 9, ventureName: "DorchGarms", teamMembers: ["Alex"], revenue: 15, netEarnings: 10 },
    { id: 10, ventureName: "AlexCountX", teamMembers: ["Alex K"], revenue: 12, netEarnings: 12 },
    { id: 11, ventureName: "BJ Barbers", teamMembers: ["Ben"], revenue: 10, netEarnings: 10 },
    { id: 12, ventureName: "Alex Gold", teamMembers: ["Alex H"], revenue: 8, netEarnings: 8 },
    { id: 13, ventureName: "Siso Diamonds", teamMembers: ["Shaan"], revenue: -100, netEarnings: -100 },
  ],
}

export const timePeriodLabels: Record<TimePeriod, string> = {
  '1d': '1 Day',
  '7d': '7 Days',
  '30d': '30 Days',
  '3m': '3 Months',
  '6m': '6 Months',
  '1y': '1 Year',
  '3y': '3 Years',
  '6y': '6 Years',
  '10y': '10 Years',
  'lifetime': 'Lifetime'
}
