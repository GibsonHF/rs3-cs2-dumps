//[proc,scrollbar_ondrag_doscroll]
function script157(int0: component, int1: component, int2: int, int3: unknown_int): void {
    var int4 = (IF_GETSCROLLHEIGHT(int1) - IF_GETHEIGHT(int1));
    if ((int4 == 0)) {
        int4 = 1;
    };
    if ((int2 < 0)) {
        var int2 = 0;
    };
    if ((int2 > int4)) {
        int2 = int4;
    };
    IF_SETSCROLLPOS(0, int2, int1);
    var int5 = 0;
    if ((CC_FIND(int0, 1) == 1)) {
        if ((varbitplayer_22875 == 2)) {
            int5 = (IF_GETHEIGHT(int0) - CC_GETHEIGHT());
            CC_SETPOSITION(4, ((int5 * int2) / int4), 0, 0);
        } else {
            int5 = (((IF_GETHEIGHT(int0) - 32) - CC_GETHEIGHT()) - 10);
            CC_SETPOSITION(0, (21 + ((int5 * int2) / int4)), 0, 0);
        };
        if ((CC_FIND[1](int0, 2) == 1)) {
            CC_SETPOSITION[1](0, (CC_GETY() - 5), 0, 0);
        };
        if ((CC_FIND[1](int0, 3) == 1)) {
            CC_SETPOSITION[1](0, (CC_GETY() + CC_GETHEIGHT()), 0, 0);
        };
    };
    return;
}