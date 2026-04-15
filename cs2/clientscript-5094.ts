//
function script5094(): string {
    var int0 = (varclient_995 / 50);
    var int1 = (int0 / 60);
    var int2 = (int1 / 60);
    [int1, int0] = [MODULO(int1, 60), MODULO(int0, 60)];
    var string0 = "";
    var string1 = "";
    if ((int1 < 10)) {
        string1 = `0${inttostring(int1, 10)}`;
    } else {
        string1 = inttostring(int1, 10);
    };
    if ((int0 < 10)) {
        string0 = `0${inttostring(int0, 10)}`;
    } else {
        string0 = inttostring(int0, 10);
    };
    return `${inttostring(int2, 10)}:${string1}:${string0}`;
}