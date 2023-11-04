export interface House {
  id: number;
  name: string;
  location: string;
  facilities: string[];
  washroom: string;
  kitchen: string;
  bed: string;
  price: string;
  description: string;
  rating: string;
  images: string[];
  postedName: string;
  profileImageURL: any; // You may want to specify a more specific type for profileImageURL.
  options: string;
}

export const houses: House[] = [
  {
    id: 1,
    name: 'Special House mix',
    location: 'Los Angeles, CA',
    facilities: ['High-speed wifi', 'Deskspace', 'Safe location'],
    washroom: '2',
    kitchen: '1',
    bed: '2',
    price: '1500',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ",
    rating: '4',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9PfH8emU42JZPbkp_OC8wJwredfKJlWOdQ7-FcE1RjYKZkIXH9gNNtaTavJOwMgugi1o&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5P2zioCWvoxugBH6KyK4kzW1PaTivP2itsI1kQ88oE7OzQfKZUxk0N2X6GlpO6GZiblM&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXIXT1R0FIrU2xs0aY7g8bEahFhIgEfOVOxHNZToisqB3ppkrxFcnTzqlkM9ReG0Kexg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd4Q1aaFx50dAHsASlwXuLPT9FLCfQm5TyXUEHQs45Y39vIfWk4ZR5tYAOGREWcgV4Cq4&usqp=CAU',
    ],
    postedName: 'Timmy Barner',
    profileImageURL: "https://i.ibb.co/N9ypmqB/profile.png",
    options: '20',
  },
  {
    id: 2,
    name: 'Special House mix',
    location: 'Los Angeles, CA',
    facilities: ['High-speed wifi', 'Deskspace', 'Safe location'],
    washroom: '2',
    kitchen: '1',
    bed: '2',
    price: '1400',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ",
    rating: '4',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd4Q1aaFx50dAHsASlwXuLPT9FLCfQm5TyXUEHQs45Y39vIfWk4ZR5tYAOGREWcgV4Cq4&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9PfH8emU42JZPbkp_OC8wJwredfKJlWOdQ7-FcE1RjYKZkIXH9gNNtaTavJOwMgugi1o&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5P2zioCWvoxugBH6KyK4kzW1PaTivP2itsI1kQ88oE7OzQfKZUxk0N2X6GlpO6GZiblM&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaXIXT1R0FIrU2xs0aY7g8bEahFhIgEfOVOxHNZToisqB3ppkrxFcnTzqlkM9ReG0Kexg&usqp=CAU',
    ],
    postedName: 'Timmy Barner',
    profileImageURL: "https://i.ibb.co/N9ypmqB/profile.png",
    options: '18',
  },
];