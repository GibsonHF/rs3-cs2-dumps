//
function script18408(int0: int): string {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int1, int2, int3] = DATE_RUNEDAY_TODATE(int0);
    var string0 = enum_getvalue(0, 36, 10036 as cs2enum, int2);
    return `${script12832(int1)} ${string0} ${inttostring(int3, 10)}`;
}