const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Networking para introvertidos',
    description:
      'Nós sabemos: Networking não é divertido se você for uma pessoa introvertida. É por isso que criamos este evento - vai ser muito mais fácil. Prometido!',
    location: 'Impossível',
    date: '2022-05-30',
    image: 'images/introvert-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Programação para todos',
    description:
      'Todos podem aprender a programar! Sim, todos! Neste evento ao vivo, vamos passar por todos os fundamentos básicos e começar também a programação.',
    location: 'Deus sabe onde',
    date: '2023-02-13',
    image: 'images/coding-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: 'Networking para introvertidos',
    description:
      'Nós sabemos: Networking não é divertido se você for uma pessoa introvertida. É por isso que criamos este evento - vai ser muito mais fácil. Prometido!',
    location: 'Impossível',
    date: '2023-03-30',
    image: 'images/introvert-event.jpg',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
