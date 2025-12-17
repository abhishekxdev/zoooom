import { Citrus, ShieldCheck, Smile, Droplets, Leaf, Zap } from 'lucide-react';

export const PRODUCTS = [
  {
    id: 1,
    name: "Blackberry Blast",
    price: 15,
    color: "bg-purple-200",
    image: "/5.png",
    category: "kombucha",
    pattern: `url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wavy1' x='0' y='0' width='300' height='300' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0,40 Q60,10 120,40 Q180,70 240,40 Q300,10 360,40' stroke='%23FFB6C1' stroke-width='12' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-20,80 Q40,50 100,80 Q160,110 220,80 Q280,50 340,80' stroke='%23FFC0CB' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M10,120 Q70,90 130,120 Q190,150 250,120 Q310,90 370,120' stroke='%23FFB6C1' stroke-width='11' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-30,160 Q30,130 90,160 Q150,190 210,160 Q270,130 330,160' stroke='%23FFC0CB' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3Cpath d='M20,200 Q80,170 140,200 Q200,230 260,200 Q320,170 380,200' stroke='%23FFB6C1' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-10,240 Q50,210 110,240 Q170,270 230,240 Q290,210 350,240' stroke='%23FFC0CB' stroke-width='8' fill='none' stroke-linecap='round'/%3E%3Cpath d='M30,280 Q90,250 150,280 Q210,310 270,280 Q330,250 390,280' stroke='%23FFB6C1' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='300' fill='%23E6D5F7'/%3E%3Crect width='300' height='300' fill='url(%23wavy1)'/%3E%3C/svg%3E")`
  },
  {
    id: 2,
    name: "Watermelon Wave",
    price: 10,
    color: "bg-green-200",
    image: "/9.png",
    category: "kombucha",
    pattern: `url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wavy2' x='0' y='0' width='300' height='300' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0,40 Q60,10 120,40 Q180,70 240,40 Q300,10 360,40' stroke='%23FFB6C1' stroke-width='12' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-20,80 Q40,50 100,80 Q160,110 220,80 Q280,50 340,80' stroke='%23FFC0CB' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M10,120 Q70,90 130,120 Q190,150 250,120 Q310,90 370,120' stroke='%23FFB6C1' stroke-width='11' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-30,160 Q30,130 90,160 Q150,190 210,160 Q270,130 330,160' stroke='%23FFC0CB' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3Cpath d='M20,200 Q80,170 140,200 Q200,230 260,200 Q320,170 380,200' stroke='%23FFB6C1' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-10,240 Q50,210 110,240 Q170,270 230,240 Q290,210 350,240' stroke='%23FFC0CB' stroke-width='8' fill='none' stroke-linecap='round'/%3E%3Cpath d='M30,280 Q90,250 150,280 Q210,310 270,280 Q330,250 390,280' stroke='%23FFB6C1' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='300' fill='%23B8F5D4'/%3E%3Crect width='300' height='300' fill='url(%23wavy2)'/%3E%3C/svg%3E")`
  },
  {
    id: 3,
    name: "Strawberry Fizz",
    price: 12,
    color: "bg-pink-200",
    image: "/7.png",
    category: "kombucha",
    pattern: `url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wavy3' x='0' y='0' width='300' height='300' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0,40 Q60,10 120,40 Q180,70 240,40 Q300,10 360,40' stroke='%23FFB6C1' stroke-width='12' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-20,80 Q40,50 100,80 Q160,110 220,80 Q280,50 340,80' stroke='%23FFC0CB' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M10,120 Q70,90 130,120 Q190,150 250,120 Q310,90 370,120' stroke='%23FFB6C1' stroke-width='11' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-30,160 Q30,130 90,160 Q150,190 210,160 Q270,130 330,160' stroke='%23FFC0CB' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3Cpath d='M20,200 Q80,170 140,200 Q200,230 260,200 Q320,170 380,200' stroke='%23FFB6C1' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-10,240 Q50,210 110,240 Q170,270 230,240 Q290,210 350,240' stroke='%23FFC0CB' stroke-width='8' fill='none' stroke-linecap='round'/%3E%3Cpath d='M30,280 Q90,250 150,280 Q210,310 270,280 Q330,250 390,280' stroke='%23FFB6C1' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='300' fill='%23FFB6D9'/%3E%3Crect width='300' height='300' fill='url(%23wavy3)'/%3E%3C/svg%3E")`
  },
  {
    id: 4,
    name: "Ginger & Ginseng",
    price: 12,
    color: "bg-orange-200",
    image: "/3.png",
    category: "kombucha",
    pattern: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"
  },
  {
    id: 5,
    name: "Citrus Surge",
    price: 10,
    color: "bg-yellow-200",
    image: "/4.png",
    category: "kombucha",
    pattern: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"
  },
  {
    id: 6,
    name: "Mango & Guarana",
    price: 12,
    color: "bg-orange-200",
    image: "/6.png",
    category: "energy",
    pattern: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"
  },
  {
    id: 7,
    name: "Berries and Basil",
    price: 12,
    color: "bg-purple-200",
    image: "/2.png",
    category: "kombucha",
    pattern: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"
  },
  {
    id: 8,
    name: "Lemon and Ginger",
    price: 10,
    color: "bg-yellow-200",
    image: "/8.jpeg",
    category: "kombucha",
    pattern: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"
  },
  {
    id: 9,
    name: "Classic Kombucha",
    price: 15,
    color: "bg-green-200",
    image: "/11.png",
    category: "kombucha",
    pattern: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"
  },
  {
    id: 10,
    name: "Cola Fizz",
    price: 8,
    color: "bg-amber-200",
    image: "/5.png",
    category: "soda",
    pattern: `url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wavy1' x='0' y='0' width='300' height='300' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0,40 Q60,10 120,40 Q180,70 240,40 Q300,10 360,40' stroke='%23FFB6C1' stroke-width='12' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-20,80 Q40,50 100,80 Q160,110 220,80 Q280,50 340,80' stroke='%23FFC0CB' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M10,120 Q70,90 130,120 Q190,150 250,120 Q310,90 370,120' stroke='%23FFB6C1' stroke-width='11' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-30,160 Q30,130 90,160 Q150,190 210,160 Q270,130 330,160' stroke='%23FFC0CB' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3Cpath d='M20,200 Q80,170 140,200 Q200,230 260,200 Q320,170 380,200' stroke='%23FFB6C1' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-10,240 Q50,210 110,240 Q170,270 230,240 Q290,210 350,240' stroke='%23FFC0CB' stroke-width='8' fill='none' stroke-linecap='round'/%3E%3Cpath d='M30,280 Q90,250 150,280 Q210,310 270,280 Q330,250 390,280' stroke='%23FFB6C1' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='300' fill='%23E6D5F7'/%3E%3Crect width='300' height='300' fill='url(%23wavy1)'/%3E%3C/svg%3E")`
  },
  {
    id: 11,
    name: "Lemon Lime Sparkle",
    price: 9,
    color: "bg-lime-200",
    image: "/7.png",
    category: "soda",
    pattern: `url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wavy3' x='0' y='0' width='300' height='300' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0,40 Q60,10 120,40 Q180,70 240,40 Q300,10 360,40' stroke='%23FFB6C1' stroke-width='12' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-20,80 Q40,50 100,80 Q160,110 220,80 Q280,50 340,80' stroke='%23FFC0CB' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M10,120 Q70,90 130,120 Q190,150 250,120 Q310,90 370,120' stroke='%23FFB6C1' stroke-width='11' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-30,160 Q30,130 90,160 Q150,190 210,160 Q270,130 330,160' stroke='%23FFC0CB' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3Cpath d='M20,200 Q80,170 140,200 Q200,230 260,200 Q320,170 380,200' stroke='%23FFB6C1' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-10,240 Q50,210 110,240 Q170,270 230,240 Q290,210 350,240' stroke='%23FFC0CB' stroke-width='8' fill='none' stroke-linecap='round'/%3E%3Cpath d='M30,280 Q90,250 150,280 Q210,310 270,280 Q330,250 390,280' stroke='%23FFB6C1' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='300' fill='%23FFB6D9'/%3E%3Crect width='300' height='300' fill='url(%23wavy3)'/%3E%3C/svg%3E")`
  },
  {
    id: 12,
    name: "Orange Crush",
    price: 8,
    color: "bg-orange-200",
    image: "/9.png",
    category: "soda",
    pattern: `url("data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='wavy2' x='0' y='0' width='300' height='300' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0,40 Q60,10 120,40 Q180,70 240,40 Q300,10 360,40' stroke='%23FFB6C1' stroke-width='12' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-20,80 Q40,50 100,80 Q160,110 220,80 Q280,50 340,80' stroke='%23FFC0CB' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M10,120 Q70,90 130,120 Q190,150 250,120 Q310,90 370,120' stroke='%23FFB6C1' stroke-width='11' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-30,160 Q30,130 90,160 Q150,190 210,160 Q270,130 330,160' stroke='%23FFC0CB' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3Cpath d='M20,200 Q80,170 140,200 Q200,230 260,200 Q320,170 380,200' stroke='%23FFB6C1' stroke-width='10' fill='none' stroke-linecap='round'/%3E%3Cpath d='M-10,240 Q50,210 110,240 Q170,270 230,240 Q290,210 350,240' stroke='%23FFC0CB' stroke-width='8' fill='none' stroke-linecap='round'/%3E%3Cpath d='M30,280 Q90,250 150,280 Q210,310 270,280 Q330,250 390,280' stroke='%23FFB6C1' stroke-width='9' fill='none' stroke-linecap='round'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='300' height='300' fill='%23B8F5D4'/%3E%3Crect width='300' height='300' fill='url(%23wavy2)'/%3E%3C/svg%3E")`
  }
];

export const BENEFITS = [
  {
    id: 1,
    title: "Improved Digestion",
    icon: Citrus,
    color: "text-red-500"
  },
  {
    id: 2,
    title: "Immunity Boosting",
    icon: ShieldCheck,
    color: "text-orange-500"
  },
  {
    id: 3,
    title: "Natural Source of Probiotics",
    icon: Smile,
    color: "text-yellow-500"
  }
];

export const REVIEWS = [
  {
    id: 1,
    text: "I love how natural and refreshing it tastes. It's not too sweet, just perfectly balanced! And I feel the difference in my digestion after just a few days.",
    author: "Emma R.",
    role: "nutritionist & wellness coach",
    avatar: "https://picsum.photos/id/64/100/100"
  },
  {
    id: 2,
    text: "Zoooom gives me the perfect lift in the morning without relying on coffee. I love knowing that it's packed with probiotics and actually good for me.",
    author: "James L.",
    role: "fitness trainer & entrepreneur",
    avatar: "https://picsum.photos/id/91/100/100"
  }
];

export const FAQS = [
  {
    question: "WHAT MAKES ZOOOOM SPECIAL?",
    answer: "Zoooom is crafted using a unique double-fermentation process that maximizes probiotic content while maintaining a smooth, refreshing taste without the vinegary bite of traditional kombucha."
  },
  {
    question: "IS THERE CAFFEINE IN ZOOOOM?",
    answer: "Yes, since it's made from tea, there is a small amount of naturally occurring caffeine, about 1/3 of what you'd find in a cup of coffee."
  },
  {
    question: "HOW MUCH SUGAR IS IN ZOOOOM?",
    answer: "Most of the sugar added during brewing is consumed by healthy bacteria in the fermentation process. The final product has just a touch of natural sweetness."
  },
  {
    question: "CAN KIDS DRINK ZOOOOM?",
    answer: "Generally yes, but as with any fermented product, we recommend checking with your pediatrician first."
  },
  {
    question: "HOW SHOULD I STORE ZOOOOM?",
    answer: "Keep it refrigerated! Zoooom is alive and will continue to ferment if left warm."
  },
  {
    question: "CAN I DRINK ZOOOOM EVERY DAY?",
    answer: "Absolutely! Many of our customers enjoy a bottle a day to keep their gut health in check."
  }
];