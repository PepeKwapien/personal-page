import { Images } from '../enums/images.enum';
import { IProject } from '../interfaces/project.interface';

export const projects: IProject[] = [
    {
        name: 'TwinkleCards✨',
        description: 'Best place to create, organize and study from your own collections of flashcards',
        image: Images.twinklecards,
        link: 'https://twinklecards.pl',
        tags: [
            'firebase',
            'angular',
            'realtime',
            'css',
            'serverless',
            'animations',
            'html',
            'typescript',
            'modules',
            'flashcards'
        ]
    },
    {
        name: 'PokeWeakness',
        description: 'Project for people that want to be the very best and learn how to beat... ekhem, catch them all',
        image: Images.pokeweakness,
        link: 'https://github.com/PepeKwapien/PokeWeakness',
        tags: ['angular', 'css', 'html', 'typescript', 'mat-angular', 'modules', 'pokemon']
    },
    {
        name: 'Pokemon Basics',
        description: 'Foundation for my future projects related to Pokemons. Includes API Crawler, logger and API',
        image: Images.pokemonbasics,
        link: 'https://github.com/PepeKwapien/PokemonBasics',
        tags: ['.netcore', 'api', 'apicrawler', 'efcore', 'mappers', 'logger', 'tests', 'pokemon']
    },
    {
        name: 'Collapp (co-creator)',
        description:
            'Entire system designed to create workspaces in which people could collaborate and even write their own plugins. Final project for my CS studies with my friends (most repos are private right now)',
        image: Images.collapp,
        link: 'https://collapp-zpi.github.io/#/',
        tags: [
            'react',
            'nextjs',
            'auth',
            'plugins',
            'micro-frontends',
            'bucket',
            'tailwindcss',
            'smtp',
            'postgres',
            'prisma',
            'orm',
            'collaboration',
            'teamwork',
            'bachelor'
        ]
    },
    {
        name: 'Learn Japanese',
        description: 'App designed to help you learn and remember Hiragana and Katakana characters',
        image: Images.learnjapanese,
        link: 'https://pepekwapien.github.io/LearnJapanese/',
        tags: ['angular', 'typescript', 'deployed', 'japanese']
    },
    {
        name: 'PepeDex',
        description: 'Desktop Encyclopedia for Pokemons',
        image: Images.pepedex,
        link: 'https://github.com/PepeKwapien/pepe-dex',
        tags: ['python', 'tkinter', 'rest']
    },
    {
        name: 'Mancala',
        description:
            'Simple game engine to play Mancala either with other person or bot using MinMax algorithm (with Alpha Beta pruning)',
        image: Images.mancala,
        link: 'https://github.com/PepeKwapien/Mancala',
        tags: ['java', 'minmax', 'cli', 'alphabeta']
    },
    {
        name: 'Personal page (old)',
        description: 'Previous about me page',
        image: Images.personalold,
        link: 'https://pepekwapien.github.io/PersonalPage/',
        tags: ['html', 'css', 'js']
    }
    // {
    //     name: 'Tarczynews',
    //     description: 'Basic ASP.Net MVC app to keep track of collected Tarczyn caps',
    //     image: Images.tarczynews,
    //     link: 'https://github.com/PepeKwapien/Tarczynews',
    //     tags: ['.netcore', 'mvc', 'identity', 'efcore']
    // }
];
