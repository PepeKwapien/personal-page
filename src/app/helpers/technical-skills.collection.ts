import { Stack } from '../enums/stack.enum';
import { ITechnicalSkill } from '../interfaces/technical-skill.interface';

export const technicalSkills: ITechnicalSkill[] = [
    { stack: Stack.dotnet, level: 82 },
    { stack: Stack.angular, level: 90 },
    { stack: Stack.docker, level: 65 },
    { stack: Stack.tsed, level: 60 },
    { stack: Stack.node, level: 70 },
    { stack: Stack.typescript, level: 84 },
    { stack: Stack.javascript, level: 85 },
    { stack: Stack.html, level: 80 },
    { stack: Stack.css, level: 80 },
    { stack: Stack.csharp, level: 90 },
    { stack: Stack.git, level: 63 },
    { stack: Stack.sql, level: 73 },
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
