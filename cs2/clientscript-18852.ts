//
function script18852(): string {
    var int0 = script15113();
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    [int1, int2, int3] = DATE_RUNEDAY_TODATE(int0);
    return `${script15112(int0)} ${script12832(int1)} ${enum_getvalue(0, 36, 10036 as cs2enum, int2)} ${inttostring(int3, 10)}`;
}