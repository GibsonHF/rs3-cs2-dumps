//
function script4340(int0: int, int1: int, int2: component, int3: unknown_int): void {
    var int4 = ((int0 / 60) / 24);
    var int5 = (int0 - ((int4 * 24) * 60));
    var int6 = (int5 / 60);
    var int7 = MODULO(int5, 60);
    var string0 = "";
    if ((int6 < 10)) {
        string0 = `0${inttostring(int6, 10)}`;
    } else {
        string0 = inttostring(int6, 10);
    };
    var string1 = "";
    if ((int7 < 10)) {
        string1 = `0${inttostring(int7, 10)}`;
    } else {
        string1 = inttostring(int7, 10);
    };
    IF_SETTEXT(`${string0}:${string1}`, int2);
    IF_SETONTIMER(callback(script4342, int6, int7, int1, int2, int3), int2);
    [string0, string1] = script4341(int1, int6, int7);
    IF_SETTEXT(`${string0}:${string1}`, int3);
    return;
}