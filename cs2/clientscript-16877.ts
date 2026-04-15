//
function script16877(int0: component, int1: unknown_int, int2: unknown_int): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = script16829(script12477());
    if (((int1 == 0) && (int2 == 0))) {
        int6 = (int6 + 7);
    };
    [int3, int4, int5] = DATE_RUNEDAY_TODATE(int6);
    script2731(int0, -1, 3);
    var string0 = "";
    string0 = `Mon ${inttostring(int3, 10)} ${enum_getvalue(0, 36, 10036 as cs2enum, int4)} ${inttostring(int5, 10)}`;
    if ((int2 == 1)) {
        string0 = `${string0} 12:00 GMT`;
    } else {
        string0 = `${string0} 11:59 GMT`;
    };
    IF_SETTEXT(string0, int0);
    return;
}