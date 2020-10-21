/**
 * Interface for movies that will be listed in results
 */
export interface Movie {
    rating: number;
    year: number;
    name: string;
    duration: number;
    type: string;
    description: string;
    thumbnailUrl: string;
}

const movies: Array<Movie> = [
    {
        rating: 4,
        year: 2020,
        name: 'Aquaman',
        duration: 100,
        type: 'Movie',
        thumbnailUrl: 'carousel-images/aquaman.jpg',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        rating: 3,
        year: 2000,
        name: 'Robo Cop',
        duration: 78,
        type: 'TV show',
        thumbnailUrl: 'movie-images/robocop.png',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        rating: 5,
        year: 2020,
        name: 'Lego Batman',
        duration: 96,
        type: 'Movie',
        thumbnailUrl: 'movie-images/lego-batman.jpg',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        rating: 4.5,
        year: 2020,
        name: 'Avatar',
        duration: 100,
        type: 'TV show',
        thumbnailUrl: 'movie-images/avatar.jpg',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        rating: 4,
        year: 2020,
        name: 'The simpsons',
        duration: 110,
        type: 'Movie',
        thumbnailUrl: 'movie-images/simpsons.png',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        rating: 1,
        year: 2020,
        name: 'Dead pool',
        duration: 103,
        type: 'TV show',
        thumbnailUrl: 'carousel-images/deadpool.jpg',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        rating: 3,
        year: 2020,
        name: 'Transformers',
        duration: 70,
        type: 'TV show',
        thumbnailUrl: 'movie-images/transformers.jpg',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        rating: 2.5,
        year: 2020,
        name: 'Wonder woman',
        duration: 50,
        type: 'TV show',
        thumbnailUrl: 'carousel-images/wonder-woman.png',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
]


export default movies;