//
function script18864(int0: int): string {
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    [int1, int2, int3] = DATE_RUNEDAY_TODATE(int0);
    return `${script12832(int1)} ${enum_getvalue(0, 36, 10036 as cs2enum, int2)}`;
}