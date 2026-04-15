//
function script19843(int0: achievement, string0: string): string {
    if ((STRING_LENGTH(string0) == 0)) {
        return `You have failed '<col=00FF00>${ACHIEVEMENT_GETNAME(int0)}</col>'.`;
    };
    return `You have failed '<col=00FF00>${ACHIEVEMENT_GETNAME(int0)}</col>': ${string0}.`;
}