//
function script7025(int0: int): string {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int3] = DATE_RUNEDAY_TODATE(int0);
    int2 = (int2 + 1);
    var string0 = inttostring(int1, 10);
    if ((int1 < 10)) {
        string0 = `0${string0}`;
    };
    var string1 = inttostring(int2, 10);
    if ((int2 < 10)) {
        string1 = `0${string1}`;
    };
    return `${string0}/${string1}/${inttostring(int3, 10)}`;
}