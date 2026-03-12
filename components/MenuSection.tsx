"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const menuData = {
  coffee: [
    { name: "Espresso", description: "Rich, full-bodied shot", price: "$3.50", chefsPick: false },
    { name: "Cappuccino", description: "Espresso with steamed milk foam", price: "$5.00", chefsPick: false },
    { name: "Latte", description: "Espresso with steamed milk", price: "$5.50", chefsPick: false },
    { name: "Cortado", description: "Equal parts espresso and steamed milk", price: "$4.50", chefsPick: false },
    { name: "Pour Over", description: "Single origin, brewed to order", price: "$6.00", chefsPick: true },
    { name: "Cold Brew", description: "Smooth, naturally sweet", price: "$5.50", chefsPick: false },
  ],
  brunch: [
    { name: "Avocado Toast", description: "Sourdough, radish, chili flakes, lemon", price: "$14.00", chefsPick: false },
    { name: "Shakshuka", description: "Baked eggs, tomato, feta, pita", price: "$16.00", chefsPick: false },
    { name: "Smoked Salmon Plate", description: "Bagel, cream cheese, capers, red onion", price: "$18.00", chefsPick: false },
    { name: "Breakfast Bowl", description: "Quinoa, soft egg, greens, tahini", price: "$15.00", chefsPick: false },
    { name: "French Toast", description: "Brioche, berries, maple syrup", price: "$14.00", chefsPick: false },
    { name: "Grain Bowl", description: "Farro, roasted vegetables, poached egg", price: "$16.00", chefsPick: false },
  ],
  drinks: [
    { name: "Matcha Latte", description: "Ceremonial grade matcha, steamed milk", price: "$6.00", chefsPick: false },
    { name: "Chai Latte", description: "House-spiced chai, steamed milk", price: "$5.50", chefsPick: false },
    { name: "Golden Milk", description: "Turmeric, ginger, honey, steamed milk", price: "$5.50", chefsPick: false },
    { name: "Fresh Juice", description: "Rotating seasonal selection", price: "$7.00", chefsPick: false },
    { name: "House Wine", description: "Red or white, by the glass", price: "$10.00", chefsPick: false },
    { name: "Spritz", description: "Aperol, prosecco, soda", price: "$12.00", chefsPick: false },
  ],
  bakery: [
    { name: "Croissant", description: "Butter, flaky, perfectly laminated", price: "$5.00", chefsPick: false },
    { name: "Almond Croissant", description: "Frangipane, toasted almonds", price: "$6.00", chefsPick: false },
    { name: "Cardamom Bun", description: "Scandinavian spiced sweet roll", price: "$5.50", chefsPick: true },
    { name: "Sourdough Loaf", description: "Naturally leavened, baked daily", price: "$9.00", chefsPick: false },
    { name: "Scone", description: "Rotating seasonal flavors", price: "$4.50", chefsPick: false },
    { name: "Cinnamon Roll", description: "Brown butter, cream cheese frosting", price: "$6.00", chefsPick: false },
  ],
};

export default function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="menu" className="bg-cream py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-cafe-accent" />
            <span className="text-cafe-accent uppercase text-xs font-medium tracking-widest">
              What We Serve
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-serif font-light text-charcoal">
            Our Menu
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="coffee" className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b border-stone/15 h-auto p-0 mb-16 flex-wrap gap-4 sm:gap-8">
              <TabsTrigger
                value="coffee"
                className="text-stone/60 data-[state=active]:text-charcoal data-[state=active]:border-b-2 data-[state=active]:border-cafe-accent px-0 pb-4 rounded-none bg-transparent text-xs uppercase tracking-widest font-medium"
              >
                Coffee
              </TabsTrigger>
              <TabsTrigger
                value="brunch"
                className="text-stone/60 data-[state=active]:text-charcoal data-[state=active]:border-b-2 data-[state=active]:border-cafe-accent px-0 pb-4 rounded-none bg-transparent text-xs uppercase tracking-widest font-medium"
              >
                Brunch
              </TabsTrigger>
              <TabsTrigger
                value="drinks"
                className="text-stone/60 data-[state=active]:text-charcoal data-[state=active]:border-b-2 data-[state=active]:border-cafe-accent px-0 pb-4 rounded-none bg-transparent text-xs uppercase tracking-widest font-medium"
              >
                Drinks
              </TabsTrigger>
              <TabsTrigger
                value="bakery"
                className="text-stone/60 data-[state=active]:text-charcoal data-[state=active]:border-b-2 data-[state=active]:border-cafe-accent px-0 pb-4 rounded-none bg-transparent text-xs uppercase tracking-widest font-medium"
              >
                Bakery
              </TabsTrigger>
            </TabsList>

            {Object.entries(menuData).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="space-y-8">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="border-b border-stone/15 pb-6"
                    >
                      <div className="flex justify-between items-baseline gap-4 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-charcoal font-serif text-2xl font-light">
                            {item.name}
                          </h3>
                          {item.chefsPick && (
                            <Badge
                              variant="outline"
                              className="bg-cafe-accent/10 text-cafe-accent border-cafe-accent/20 text-xs"
                            >
                              Chef's Pick
                            </Badge>
                          )}
                        </div>
                        <span className="text-cafe-accent font-medium text-sm flex-shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-stone text-sm leading-relaxed max-w-prose">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16">
            <button className="bg-[#C4956A] text-white px-10 py-4 uppercase text-xs tracking-widest font-medium hover:bg-[#A37A52] transition-colors rounded-none">
              View Full Menu
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
