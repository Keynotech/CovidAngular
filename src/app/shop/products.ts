

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string
  }

  export const products = [
    {
      id: 1,
      name: 'Mask',
      price: 799,
      description: 'A single-use anti-virus mask is a hygienic and safe alternative to reusable masks made of fabric.',
      img: "https://i.imgur.com/BIc6zSl.png"
    },
    {
      id: 2,
      name: 'Visor',
      price: 699,
      description: 'It combines both the convenience of the mask and, thanks to its transparency, it acts as a visor.',
      img: "https://i.imgur.com/tK4Z5ej.png"
    },
    {
      id: 3,
      name: 'Latex gloves',
      price: 299,
      description: 'Latex gloves are made of high-quality natural rubber. They perfectly combine protective properties such as barrier and durability. They are characterized by high flexibility, therefore they fit well to the hand and thus guarantee precision and freedom of movement.',
      img: "https://i.imgur.com/ISOYeOy.png"
    }
  ];
