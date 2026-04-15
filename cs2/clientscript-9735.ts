//
function script9735(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int3 = varclient_4190;
    int0 = MODULO(int3, 60);
    int3 = ((int3 - int0) / 60);
    int1 = MODULO(int3, 60);
    int3 = ((int3 - int1) / 60);
    int2 = MIN(int3, 23);
    if ((int2 < 10)) {
        string0 = `0${inttostring(int2, 10)}`;
    } else {
        string0 = inttostring(int2, 10);
    };
    if ((int1 < 10)) {
        string1 = `0${inttostring(int1, 10)}`;
    } else {
        string1 = inttostring(int1, 10);
    };
    if ((int0 < 10)) {
        string2 = `0${inttostring(int0, 10)}`;
    } else {
        string2 = inttostring(int0, 10);
    };
    IF_SETTEXT(`${string0}:${string1}:${string2}`, comp(945, 26));
    return;
}