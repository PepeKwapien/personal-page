import { Images } from '../enums/images.enum';
import { IProject } from '../interfaces/project.interface';

export const projects: IProject[] = [
    {
        name: 'Pokemon Basics',
        description: 'Foundation for my future projects related to Pokemons. Includes API Crawler, logger and soon API',
        image: Images.pokemonbasics,
        link: 'https://github.com/PepeKwapien/PokemonBasics'
    },
    {
        name: 'Learn Japanese',
        description: 'App designed to help you learn and remember Hiragana and Katakana characters',
        image: Images.learnjapanese,
        link: 'https://pepekwapien.github.io/LearnJapanese/'
    },
    {
        name: 'PepeDex',
        description: 'Desktop Encyclopedia for Pokemons',
        image: Images.pepedex,
        link: 'https://github.com/PepeKwapien/pepe-dex'
    },
    {
        name: 'Mancala',
        description:
            'Simple game engine to play Mancala either with other person or bot using MinMax algorithm (with Alpha Beta pruning)',
        image: Images.mancala,
        link: 'https://github.com/PepeKwapien/Mancala'
    },
    {
        name: 'Personal page (old)',
        description: 'Personal page about me I made some time ago',
        image: Images.personalold,
        link: 'https://pepekwapien.github.io/PersonalPage/'
    },
    {
        name: 'Tarczynews',
        description: 'Basic ASP.Net MVC app to keep track of collected Tarczyn caps',
        image: Images.tarczynews,
        link: 'https://github.com/PepeKwapien/Tarczynews'
    }
];
