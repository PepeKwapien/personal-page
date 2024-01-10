export const personalTraits: string[] = [
    'organized 🗂️',
    'fluent in English 🌎',
    'an interesting speaker 🗣️',
    'determined 🧗',
    'a careful listener 👂',
    'reliable 🔐',
    'a can-do approacher 🤠',
    'a fast learner 📚',
    'open-minded 🤯',
    'an analytical thinker 👩‍💻'
];

export const personalTraitsOrdered: string[] = personalTraits.sort((a, b) => {
    return a.length - b.length;
});
