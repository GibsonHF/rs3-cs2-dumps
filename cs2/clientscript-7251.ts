//
function script7251(): void {
    script7252(varplayer_3390);
    if ((varplayer_3393 < 0)) {
        IF_SETOPKEY(1, 13, 0, 60031320);
        IF_SETOPKEY(1, 0, 0, 60031357);
        return;
    };
    IF_SETOPKEY(1, 0, 0, 60031320);
    IF_SETOPKEY(1, 13, 0, 60031357);
    var int0 = script7311(varplayer_3393);
    var int1 = INV_GETOBJ(677, varplayer_3393);
    var int2 = 0;
    if (((script7294(varplayer_3390) == -1) && (((varplayer_3390 == 1) && (varplayer_3393 == 0)) || (((varplayer_3390 == 2) && (varplayer_3393 == 6)) || (((varplayer_3390 == 3) && (varplayer_3393 == 12)) || ((varplayer_3390 == 4) && (varplayer_3393 == 18))))))) {
        int2 = 1;
    } else if ((int1 != -1)) {
        int2 = enum_hasoutput(33, 2173, int1);
    };
    return;
}