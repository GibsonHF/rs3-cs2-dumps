//
function script10901(int0: int, int1: int, int2: unknown_int): string {
    var string0 = "";
    if ((int0 < 10)) {
        string0 = `0${inttostring(int0, 10)}`;
    } else {
        string0 = inttostring(int0, 10);
    };
    var string1 = "";
    if ((int1 < 10)) {
        string1 = `0${inttostring(int1, 10)}`;
    } else {
        string1 = inttostring(int1, 10);
    };
    if ((int2 == 1)) {
        return `${string0}:${string1}`;
    };
    return `${string0} ${string1}`;
}