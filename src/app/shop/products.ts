

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
      name: 'Maseczka',
      price: 799,
      description: 'Maska antywirusowa przeznaczona do jednorazowego użytku stanowi higieniczną i bezpieczną alternatywę dla maseczek wielorazowych, które wykonane są z tkaniny.',
      img: "https://i.imgur.com/OfPX880.png"
    },
    {
      id: 2,
      name: 'Przyłbica',
      price: 699,
      description: 'Łączy w sobie zarówno wygodę maseczki jak i dzięki przeźroczystości spełnia funkcję przyłbicy.',
      img: "https://i.imgur.com/0m2l1jp.jpeg"
    },
    {
      id: 3,
      name: 'Rękawiczki lateksowe',
      price: 299,
      description: 'Rękawiczki lateksowe są wykonane z wysokiej jakości kauczuku naturalnego. Doskonale łączą w sobie właściwości ochronne, takie jak barierowość i wytrzymałość. Cechują się wysoką elastycznością, dlatego dobrze dopasowują się do dłoni i gwarantują tym samym precyzję i swobodę ruchów.',
      img: "https://i.imgur.com/BMIMcJI.jpeg"
    }
  ];