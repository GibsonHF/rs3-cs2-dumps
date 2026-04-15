//
function script19845(int0: achievement, string0: string, string1: string): string {
    if ((STRING_LENGTH(string1) > 0)) {
        return `You have made progress towards '<col=00FF00>${ACHIEVEMENT_GETNAME(int0)}</col>' (${string0}/${string1}).`;
    };
    return `You have made progress towards '<col=00FF00>${ACHIEVEMENT_GETNAME(int0)}</col>'.`;
}