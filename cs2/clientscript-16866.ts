//
function script16866(int0: component): void {
    script2731(int0, -1, 21);
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    if ((IF_FIND(int0) == 1)) {
        [int1, int2, int3] = DATE_RUNEDAY_TODATE((script16829(script12477()) - 7));
        CC_SETTEXT(`${inttostring(int1, 10)} ${enum_getvalue(0, 36, 10036 as cs2enum, int2)}`);
    };
    return;
}