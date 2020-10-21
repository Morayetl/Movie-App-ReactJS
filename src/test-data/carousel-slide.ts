/**
 * Interface for carousel slide that will be listed in carousel
 */
export interface CarouselSlide {
    title: string;
    description: string;
    thumbnailUrl: string;
}

const carouselSlides: Array<CarouselSlide> = [
    {
        title: 'Aquaman',
        thumbnailUrl: 'carousel-images/aquaman.jpg',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        title: 'Dead pool',
        thumbnailUrl: 'carousel-images/deadpool.jpg',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        title: 'Wonder woman',
        thumbnailUrl: 'carousel-images/wonder-woman.png',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
]


export default carouselSlides;