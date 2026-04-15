//
function script5861(int0: int): void {
    var int1 = 0;
    var string0 = "";
    var int2 = 0;
    var string1 = "";
    var int3 = 0;
    var int4 = 0;
    var string2 = "";
    stack(WORLDLIST_SPECIFIC(int0));
    [int1, string0, int2, string1, int3, int4, string2] = stack();
    var int5 = unk11027(int0, string2);
    if ((int5 == 1)) {
        script16919();
    };
    if (((TESTBIT(int1, 24) == 1) || (varbitplayer_58378 == 1))) {
        IF_TRIGGEROP(comp(906, 2), -1, 1);
    };
    return;
}