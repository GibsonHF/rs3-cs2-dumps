//
function script882(): void {
    var int0 = enum_getvalue(0, 0, 14245 as cs2enum, (varbitplayer_39302 - 1));
    var int1 = varbitplayer_39303;
    var int2 = script12422(int1, int0, 123);
    IF_SETSIZE(int2, 12, 0, 0, comp(1930, 219));
    IF_SETTEXT(`${inttostring(int1, 10)}/${inttostring(int0, 10)}`, comp(1930, 222));
    IF_SETTEXT(inttostring(varbitplayer_39302, 10), comp(1930, 2));
    script884();
    return;
}