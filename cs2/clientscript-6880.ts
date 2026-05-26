//
function script6880(): void {
    var int0 = 13784 as graphic;
    var int1 = 13786 as graphic;
    var int2 = 13785;
    var int3 = 13782 as graphic;
    var int4 = 13783;
    if (((varbitplayer_674 == -1) || (varbitplayer_674 == 1023))) {
        IF_SETGRAPHIC(int3, comp(1311, 505));
        IF_SETGRAPHIC(int3, comp(1311, 506));
        IF_SETONMOUSEOVER(callback(), comp(1311, 505));
        IF_SETONMOUSELEAVE(callback(), 85918201);
        IF_SETONMOUSEOVER(callback(), 85918202);
        IF_SETONMOUSELEAVE(callback(), 85918202);
    } else if ((varbitplayer_687 == 0)) {
        IF_SETONMOUSEOVER(callback(), comp(1311, 505));
        IF_SETONMOUSELEAVE(callback(), 85918201);
        IF_SETGRAPHIC(int3, 85918202);
        if ((varbitplayer_688 == 1)) {
            IF_SETGRAPHIC(int0, comp(1311, 505));
            IF_SETONMOUSEOVER(callback(script44, -2147483645, int4), comp(1311, 506));
            IF_SETONMOUSELEAVE(callback(script44, -2147483645, int3), 85918202);
        } else {
            IF_SETGRAPHIC(int1, comp(1311, 505));
        };
    } else {
        IF_SETGRAPHIC(int3, comp(1311, 505));
        IF_SETONMOUSEOVER(callback(script44, -2147483645, int4), comp(1311, 505));
        IF_SETONMOUSELEAVE(callback(script44, -2147483645, int3), 85918201);
        IF_SETGRAPHIC(int2, 85918202);
        IF_SETONMOUSEOVER(callback(), 85918202);
        IF_SETONMOUSELEAVE(callback(), 85918202);
    };
    return;
}