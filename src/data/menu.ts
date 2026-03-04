import type { MenuCategory } from "@/types/menu";

export const MENU: MenuCategory[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    availableNote: "Available All Day",
    sections: [
      {
        id: "eggs",
        title: "Eggs Your Way",
        subtitle: "Served with grilled tomato & toasted Turkish bread",
        items: [
          {
            id: "eggs-your-way",
            name: "Eggs Your Way",
            tags: ["VG", "GFO"],
            variants: [
              { label: "Classic", price: 15 },
              { label: "With Bacon or Boneless Ham", price: 19 },
              { label: "With Avocado or Mushrooms", price: 19 },
              { label: "With Salmon", price: 22 },
            ],
          },
        ],
      },
      {
        id: "wraps",
        title: "Wrap / Burger",
        items: [
          {
            id: "brekkie-wrap",
            name: "Brekkie Wrap",
            description:
              "Bacon, fried egg, hashbrowns & your choice of Tomato or BBQ sauce",
            price: 20,
          },
          {
            id: "avo-toast",
            name: "Smashed Avo",
            description:
              "Avocado, feta, tomatoes on toasted Turkish bread with balsamic glaze. Add 2 poached eggs +$6",
            price: 20,
            tags: ["VG", "GFO"],
            featured: true,
          },
          {
            id: "brekkie-burger",
            name: "Brekkie Burger",
            description:
              "Bacon, fried egg, hashbrowns, onion, cheese & your choice of Tomato or BBQ sauce",
            price: 25,
          },
          {
            id: "vegan-breakfast",
            name: "Vegan Breakfast",
            description:
              "Toasted English muffin with Avocado, grilled tomato, spinach, smokey kale/Quinoa Pattie and relish",
            price: 25,
            tags: ["V", "VG", "GFO"],
          },
        ],
      },
      {
        id: "benedict",
        title: "Benedict / Omelette",
        items: [
          {
            id: "eggs-benedict",
            name: "Eggs Benedict",
            description:
              "Poached eggs, spinach & hollandaise sauce on toasted English muffin",
            tags: ["VG"],
            variants: [
              { label: "Classic", price: 20 },
              { label: "With Bacon or Boneless Ham", price: 24 },
              { label: "With Salmon", price: 25 },
            ],
          },
          {
            id: "omelette",
            name: "Create Your Own Omelette",
            description:
              "Choose 3 ingredients: Boneless ham, Cheese, Tomato, Bacon, Spinach, Sundried Tomato, Onion, Fetta or Mushroom. Served with toasted ciabatta bread",
            tags: ["VG", "GFO"],
          },
          {
            id: "savory-mince",
            name: "Savory Mince",
            description: "Savory mince with 2 poached eggs & toasted Turkish bread",
            price: 20,
          },
        ],
      },
      {
        id: "bowls",
        title: "Bowls / Kids",
        items: [
          {
            id: "greek-yogurt-bowl",
            name: "Greek Yogurt Bowl",
            description: "Greek yogurt, homemade granola & seasonal fruits",
            price: 18,
            tags: ["VG"],
          },
          {
            id: "acai-bowl",
            name: "Acai Bowl",
            description:
              "Acai, homemade granola, seasonal fruit, chia seeds & coconut flakes. Add Peanut Butter or Nutella +$2",
            price: 18,
            tags: ["VG"],
          },
          {
            id: "porridge",
            name: "Creamy Oat Porridge",
            description: "With seasonal fruit, honey & milk on the side",
            price: 18,
            tags: ["VG"],
          },
          {
            id: "kids-bacon-egg",
            name: "Kids Bacon & Egg",
            description: "One bacon, one egg & one toast. Add Hashbrown +$4",
            price: 14,
          },
        ],
      },
    ],
  },
  {
    id: "lunch",
    label: "Lunch",
    availableNote: "Available All Day",
    sections: [
      {
        id: "mains",
        title: "Main",
        items: [
          {
            id: "chicken-club",
            name: "Club Sandwich",
            description:
              "Chicken breast, crispy bacon, lettuce, tomato, cheese & aioli dressing. Served with fries",
            price: 25,
            tags: ["GFO"],
            featured: true,
          },
          {
            id: "lasagne",
            name: "Lasagne of the Day",
            description: "Beef mince. Add chips or salad +$5",
            price: 13,
          },
          {
            id: "quiche",
            name: "Quiche of the Day",
            description: "Vegetarian or with Ham. Add chips or salad +$5",
            price: 11,
            tags: ["VG"],
          },
        ],
      },
      {
        id: "bagels",
        title: "Bagels / Soup / Toasties",
        items: [
          {
            id: "salmon-bagel",
            name: "Salmon Bagel",
            description: "Cream cheese, salmon, red onion & cucumber",
            price: 20,
          },
          {
            id: "avocado-bagel",
            name: "Avocado Bagel",
            description:
              "Cream cheese, avocado, red onion, spinach and tomato",
            price: 17,
            tags: ["VG"],
          },
          {
            id: "chicken-bagel",
            name: "Chicken Bagel",
            description:
              "Cream cheese, chicken breast, red onion, lettuce & pesto/mayo",
            price: 18,
          },
          {
            id: "soup-of-day",
            name: "Soup of the Day",
            description: "Served with bread",
            price: 18,
            tags: ["VG", "GFO"],
          },
          {
            id: "toasties",
            name: "Create Your Own Toasties",
            description:
              "Choose 3 ingredients: Boneless Ham, Cheese, Tomato, Chicken, Avocado or Onion. Extra ingredients +$2",
            price: 12,
          },
        ],
      },
      {
        id: "sides",
        title: "Extras / Sides",
        items: [
          {
            id: "extra-bread",
            name: "Any Extra Bread incl. Gluten Free",
            price: 2,
          },
          {
            id: "hollandaise",
            name: "Hollandaise",
            price: 2,
          },
          {
            id: "extra-egg",
            name: "Extra Egg",
            price: 3,
          },
          {
            id: "tomato-beans-hash",
            name: "Grilled or Fresh Tomato, Baked Beans or Hashbrowns",
            price: 4,
          },
          {
            id: "avo-mushrooms",
            name: "Avocado or Mushrooms",
            price: 5,
          },
          {
            id: "halloumi-ham-bacon",
            name: "Halloumi, Boneless Ham or Bacon",
            price: 6,
          },
          {
            id: "smoked-salmon-side",
            name: "Smoked Salmon",
            price: 8,
          },
        ],
      },
    ],
  },
];

export const FEATURED_ITEMS = MENU.flatMap((cat) =>
  cat.sections.flatMap((sec) => sec.items.filter((item) => item.featured))
);

export function getCategoryById(id: string): MenuCategory | undefined {
  return MENU.find((cat) => cat.id === id);
}

export const DIETARY_LABELS: Record<string, string> = {
  VG: "Vegetarian",
  V: "Vegan",
  GFO: "Gluten Free Option",
  GF: "Gluten Free",
  DF: "Dairy Free",
  N: "Contains Nuts",
};
