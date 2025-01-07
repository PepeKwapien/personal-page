export const personalTraits: string[] = [
    'organized 🗂️',
    'fluent in English 🌎',
    'engaging communicator 🗣️',
    'determined 🎯',
    'careful listener 👂',
    'trustworthy 🔐',
    'quick learner 📚',
    'open-minded 🤯',
    'analytical thinker 👩‍💻',
    'collaborative team player 👥'
];

export const personalTraitsOrdered: string[] = personalTraits.sort((a, b) => {
    return a.length - b.length;
});
