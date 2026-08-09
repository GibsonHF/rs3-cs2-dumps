//
function script16646(int0: number, int1: number, int2: number): void {
    script15939(int0, int1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
    var int3 = script734(TESTBIT(varplayer_10457, (int1 - 1)));
    script7862(int1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 4479, "", int3, 1, 0, 0);
    stack(0);
    stack(0);
    CC_TEXT_SETTRANS();
    CC_SETPAUSETEXT(`Add ${enum_getvalue(0, 36, int2, int1)}`);
    script7918(int1, 2, 0, 5, 1, 0, 32, 32, 0, 0, enum_getvalue(0, 23, 11337, int1));
    script10485(int1, 3, 0, 0, 0, 2, 0, 32, 1, 1, 5999, enum_getvalue(0, 36, int2, int1));
    return;
}