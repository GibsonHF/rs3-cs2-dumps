//
function script8332(int0: int): void {
    var int1 = script10405(int0);
    var int2 = struct_getparam(int1, 3511);
    if ((int2 == comp(-1, 65535))) {
        return;
    };
    var int3 = struct_getparam(int1, 3499);
    var int4 = struct_getparam(int1, 3500);
    [int3, int4] = script8333(int0);
    if (((int3 == 0) && (int4 == 0))) {
        return;
    };
    var int5 = script8418(int1, 0);
    var int6 = struct_getparam(int1, 3505);
    var int7 = 0;
    var int8 = 0;
    var int9 = 16;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 16;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = 0;
    var int28 = 0;
    if ((CC_FIND(int2, 3) == 1)) {
        int28 = CC_GETY();
    };
    if ((CC_FIND(int2, 11) == 1)) {
        int17 = CC_GETX();
    };
    var int29 = 0;
    var int30 = 0;
    var int31 = int3;
    int31 = MAX(int31, 1);
    int31 = MAX(int31, IF_GETWIDTH(int6));
    var int32 = int4;
    int32 = MAX(int32, 1);
    int32 = MAX(int32, IF_GETHEIGHT(int6));
    IF_SETSCROLLSIZE(int31, int32, int6);
    [int29, int30] = script8336(int6);
    var int33 = 0;
    var int34 = 0;
    [int33, int34] = script8346(int31, int32, int29, int30);
    var int35 = true;
    if ((int33 == 1)) {
        int35 = false;
        script8339(int6, 1);
    } else {
        script8340(int6, 1);
    };
    var int36 = true;
    if ((int34 == 1)) {
        int36 = false;
        script8339(int6, 2);
    } else {
        script8340(int6, 2);
    };
    int29 = IF_GETWIDTH(int6);
    int30 = IF_GETHEIGHT(int6);
    var int37 = (10 + 6);
    int7 = int30;
    int10 = MAX(1, (int29 - (2 * 10)));
    int11 = MAX(1, (int10 - (2 * 6)));
    int12 = (10 + 6);
    int13 = MAX(1, (int31 - int29));
    int14 = SCALE(int29, int31, int10);
    int16 = (int14 - (3 * 6));
    int15 = ((10 + 6) + (int11 - int16));
    int17 = MAX(int37, int17);
    int17 = MIN(int17, int15);
    int18 = int29;
    int21 = MAX(1, (int30 - (2 * 10)));
    int22 = MAX(1, (int21 - (2 * 6)));
    int23 = (10 + 6);
    int24 = MAX(1, (int32 - int30));
    int25 = SCALE(int30, int32, int21);
    int27 = (int25 - (3 * 6));
    int26 = ((10 + 6) + (int22 - int27));
    int28 = MAX(int37, int28);
    int28 = MIN(int28, int26);
    if ((CC_FIND(int2, 9) == 1)) {
        CC_SETHIDE(int35);
        CC_SETPOSITION(10, int7, 0, 0);
    };
    if ((CC_FIND(int2, 10) == 1)) {
        CC_SETHIDE(int35);
        CC_SETPOSITION(((10 + int10) - 6), int7, 0, 0);
    };
    if ((CC_FIND(int2, 8) == 1)) {
        CC_SETHIDE(int35);
        CC_SETPOSITION(int12, int7, 0, 0);
        CC_SETSIZE(int11, 10, 0, 0);
    };
    if ((CC_FIND(int2, 12) == 1)) {
        CC_SETHIDE(int35);
        CC_SETPOSITION((int17 - 6), int7, 0, 0);
        CC_SETSIZE(6, 10, 0, 0);
    };
    if ((CC_FIND(int2, 13) == 1)) {
        CC_SETHIDE(int35);
        CC_SETPOSITION((int17 + int16), int7, 0, 0);
        CC_SETSIZE(6, 10, 0, 0);
    };
    if ((CC_FIND(int2, 11) == 1)) {
        CC_SETHIDE(int35);
        CC_SETPOSITION(int17, int7, 0, 0);
        CC_SETSIZE(int16, 10, 0, 0);
    };
    if ((CC_FIND(int2, 14) == 1)) {
        CC_SETHIDE(int35);
        CC_SETPOSITION(0, int7, 0, 0);
    };
    if ((CC_FIND(int2, 15) == 1)) {
        CC_SETHIDE(int35);
        CC_SETPOSITION((10 + int10), int7, 0, 0);
    };
    if ((CC_FIND(int2, 1) == 1)) {
        CC_SETHIDE(int36);
        CC_SETPOSITION(int18, 10, 0, 0);
    };
    if ((CC_FIND(int2, 2) == 1)) {
        CC_SETHIDE(int36);
        CC_SETPOSITION(int18, ((10 + int21) - 6), 0, 0);
    };
    if ((CC_FIND(int2, 0) == 1)) {
        CC_SETHIDE(int36);
        CC_SETPOSITION(int18, int23, 0, 0);
        CC_SETSIZE(10, int22, 0, 0);
    };
    if ((CC_FIND(int2, 4) == 1)) {
        CC_SETHIDE(int36);
        CC_SETPOSITION(int18, (int28 - 6), 0, 0);
        CC_SETSIZE(10, 6, 0, 0);
    };
    if ((CC_FIND(int2, 5) == 1)) {
        CC_SETHIDE(int36);
        CC_SETPOSITION(int18, (int28 + int27), 0, 0);
        CC_SETSIZE(10, 6, 0, 0);
    };
    if ((CC_FIND(int2, 3) == 1)) {
        CC_SETHIDE(int36);
        CC_SETPOSITION(int18, int28, 0, 0);
        CC_SETSIZE(10, int27, 0, 0);
    };
    if ((CC_FIND(int2, 6) == 1)) {
        CC_SETHIDE(int36);
        CC_SETPOSITION(int18, 0, 0, 0);
    };
    if ((CC_FIND(int2, 7) == 1)) {
        CC_SETHIDE(int36);
        CC_SETPOSITION(int18, (10 + int21), 0, 0);
    };
    var int38 = 0;
    var int39 = 0;
    var int40 = 0;
    var int41 = 0;
    var int42 = 0;
    var int43 = IF_GETSCROLLX(int6);
    var int44 = IF_GETSCROLLY(int6);
    if (((CC_FIND(int2, 8) == 1) && (CC_FIND[1](int2, 11) == 1))) {
        int38 = CC_GETX();
        int39 = (int38 + CC_GETWIDTH());
        int39 = (int39 - CC_GETWIDTH[1]());
        int40 = (int39 - int38);
        int40 = MAX(int40, 1);
        int41 = (CC_GETX[1]() - int38);
        int42 = MAX(1, (IF_GETSCROLLWIDTH(int6) - IF_GETWIDTH(int6)));
        int43 = SCALE(int41, int40, int42);
    };
    if (((CC_FIND(int2, 0) == 1) && (CC_FIND[1](int2, 3) == 1))) {
        int38 = CC_GETY();
        int39 = (int38 + CC_GETHEIGHT());
        int39 = (int39 - CC_GETHEIGHT[1]());
        int40 = (int39 - int38);
        int40 = MAX(int40, 1);
        int41 = (CC_GETY[1]() - int38);
        int42 = MAX(1, (IF_GETSCROLLHEIGHT(int6) - IF_GETHEIGHT(int6)));
        int44 = SCALE(int41, int40, int42);
    };
    IF_SETSCROLLPOS(int43, int44, int6);
    if (((int35 == true) && (int36 == true))) {
        script14182(int2);
    } else {
        script14181(int0, int2);
    };
    return;
}