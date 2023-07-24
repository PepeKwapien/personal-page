import { Stack } from '../enums/stack.enum';
import { ITechnicalSkill } from '../interfaces/technical-skill.interface';

export const technicalSkills: ITechnicalSkill[] = [
    { stack: Stack.dotnet, level: 80 },
    { stack: Stack.angular, level: 75 },
    { stack: Stack.docker, level: 55 },
    { stack: Stack.tsed, level: 50 },
    { stack: Stack.node, level: 50 },
    { stack: Stack.typescript, level: 76 },
    { stack: Stack.javascript, level: 77 },
    { stack: Stack.html, level: 75 },
    { stack: Stack.css, level: 80 },
    { stack: Stack.csharp, level: 90 },
    { stack: Stack.git, level: 63 },
    { stack: Stack.sql, level: 68 },
    { stack: Stack.python, level: 30 }
];

export const technicalSkillsOrdered = technicalSkills.sort((skill1, skill2) => {
    if (skill1.level > skill2.level) {
        return -1;
    }
    if (skill1.level < skill2.level) {
        return 1;
    }

    if (skill1.stack > skill2.stack) {
        return 1;
    }
    if (skill1.stack < skill2.stack) {
        return -1;
    }

    return 0;
});
