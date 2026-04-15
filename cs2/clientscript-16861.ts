//
function script16861(int0: int): unknown_int {
    if ((varplayer_10642 == 1)) {
        return 1;
    };
    var int1 = 0;
    var string0 = "";
    var int2 = 0;
    stack(WORLDLIST_SPECIFIC(int0));
    [int1, string0, int2, string0, int2, int2, string0] = stack();
    if ((TESTBIT(int1, 30) == 1)) {
        return 1;
    };
    return 0;
}