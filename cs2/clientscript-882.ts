//
function script882(): void {
    var int0 = enum_getvalue(0, 0, 14245 as cs2enum, (varbitplayer_39302 - 1));
    var int1 = varbitplayer_39303;
    var int2 = script12422(int1, int0, 123);
    IF_SETSIZE(int2, 12, 0, 0, 126484699);
    IF_SETTEXT(`${inttostring(int1, 10)}/${inttostring(int0, 10)}`, 126484702);
    IF_SETTEXT(inttostring(varbitplayer_39302, 10), 126484482);
    script884();
    return;
}