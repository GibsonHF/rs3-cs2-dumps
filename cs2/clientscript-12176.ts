//
function script12176(int0: dbrow, int1: unknown_int): void {
    var int2 = 0;
    if ((int0 != -1 as dbrow)) {
        CC_SETGRAPHIC(dbrow_getfield(int0, 16448, 0));
        int2 = script12065(int0);
    } else {
        CC_SETGRAPHIC(-1 as graphic);
    };
    CC_SETONTIMER(callback());
    if ((CC_FIND[1](112197635, cc_getparam(5531)) == 1)) {
        if ((int2 > 1)) {
            CC_SETTEXT[1](inttostring(int2, 10));
            CC_SETHIDE[1](false);
        } else {
            CC_SETTEXT[1]("");
            CC_SETHIDE[1](true);
        };
    };
    if ((int1 == 1)) {
        if ((int0 == -1 as dbrow)) {
            script12184(cc_getparam(5529));
        } else {
            script12184(int0);
        };
    };
    cc_setparam(5529, int0);
    return;
}