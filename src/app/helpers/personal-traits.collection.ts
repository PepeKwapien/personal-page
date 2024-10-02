export const personalTraits: string[] = [
    'organized 🗂️',
    'fluent in English 🌎',
    'an engaging communicator 🗣️',
    'determined 🎯',
    'a careful listener 👂',
    'trustworthy 🔐',
    'a quick learner 📚',
    'open-minded 🤯',
    'an analytical thinker 👩‍💻',
    'collaborative team player 👥'
];

export const personalTraitsOrdered: string[] = personalTraits.sort((a, b) => {
    return a.length - b.length;
});
