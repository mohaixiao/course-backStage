/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'index-background': "url('/src/assets/images/background.png')",
        'today-current-data': "url('/src/assets/images/border/TodayCurrentDataBorder.png')",
        'flow-start-border': "url('/src/assets/images/border/FlowStatBorder.png')",
        'type-distribution': "url('/src/assets/images/border/TypeDistributionBorder.png')",
        'top-purchase': "url('/src/assets/images/border/TOPPurchaseBorder.png')",
        'order-trend-statistics': "url('/src/assets/images/border/OrderTrendStatisticsBorder.png')",
        'user-trend-statistics': "url('/src/assets/images/border/UserTrendStatisticsBorder.png')",
        'top-website': "url('/src/assets/images/border/TopWebsiteBorder.png')",
        'map':"url('/src/assets/images/background_map.png')" 
      }
    },
  },
  plugins: [],
}