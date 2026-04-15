//[proc,scrollbar_horizontal_doscroll]
function script1702(int0: component, int1: component, int2: int, int3: unknown_int): void {
    var int4 = MAX(1, (IF_GETSCROLLWIDTH(int1) - IF_GETWIDTH(int1)));
    var int2 = MIN(MAX(0, int2), int4);
    var int5 = IF_GETSCROLLX(int1);
    IF_SETSCROLLPOS(int2, IF_GETSCROLLY(int1), int1);
    switch (int1) {
        case 104071170:
        case 110166021: {
            script11827(int1, int2, int3);
            break;
        }
        case 120783109: {
            script13174(int5, int2);
            break;
        }
        case 55902211:
        case 56033285:
        case 55246854: {
            script16220(int1, int2);
            break;
        }
        case 80412708: {
            script18026(int1, int2, int4);
            break;
        }
    };
    var int6 = 0;
    if ((CC_FIND(int0, 1) == 1)) {
        if (((varbitplayer_22875 == 2) || (cc_getparam(7986) == 2))) {
            int6 = (IF_GETWIDTH(int0) - CC_GETWIDTH());
            CC_SETPOSITION(SCALE(int2, int4, int6), 4, 0, 0);
        } else {
            int6 = (((IF_GETWIDTH(int0) - 32) - CC_GETWIDTH()) - 10);
            CC_SETPOSITION((21 + SCALE(int2, int4, int6)), 0, 0, 0);
        };
        if ((CC_FIND[1](int0, 2) == 1)) {
            CC_SETPOSITION[1]((CC_GETX() - 5), 0, 0, 0);
        };
        if ((CC_FIND[1](int0, 3) == 1)) {
            CC_SETPOSITION[1]((CC_GETX() + CC_GETWIDTH()), 0, 0, 0);
        };
    };
    return;
}