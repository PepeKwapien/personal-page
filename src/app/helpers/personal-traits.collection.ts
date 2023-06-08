export const personalTraits: string[] = [
    'organized 🗂️',
    'fluent in English 🌎',
    'an interesting speaker 🗣️',
    'determined 📈',
    'a careful listener 👂',
    'reliable 🔐',
    'can-do attitude 🤠',
    'a fast learner 📚',
    'open-minded 🤯'
];

export const personalTraitsOrdered: string[] = personalTraits.sort((a, b) => {
    return a.length - b.length;
});
