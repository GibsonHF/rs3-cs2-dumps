//
function script13291(int0: int, int1: int, string0: string, string1: string): [int, string] {
    if ((STRING_LENGTH(string0) > 0)) {
        var string0 = `${string0}<br>`;
    };
    if ((int1 == 1)) {
        string0 = `${string0}<str=FFFFFE>${string1}`;
        return [int0, string0];
    };
    string0 = `${string0}${string1}`;
    return [0, string0];
}