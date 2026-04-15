//
function script9060(int0: component, int1: component, int2: int, int3: int, int4: int, int5: unknown_int, int6: int, int7: int, int8: int, int9: achievement, int10: boolean): [int, int] {
    var int11 = 0;
    var int12 = 48;
    if ((int7 == 3)) {
        int12 = (int12 + 24);
    };
    if (((int10 == true) && (int5 == 0))) {
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION(0, int3, 0, 0);
        CC_SETSIZE(0, int12, 1, 0);
        CC_SETGRAPHIC(2744 as graphic);
        CC_SETTRANS(64);
        CC_CREATE(int1, 4, int6);
        CC_SETPOSITION(0, int3, 0, 0);
        CC_SETSIZE(0, int12, 1, 0);
        var int6 = (int6 + 1);
        int11 = 1;
    };
    if ((int7 == 3)) {
        if ((int11 == 0)) {
            script10410(int0, comp(-1, 65535), 2830 as struct, 0, int3, int4, 24, 0, false, "");
        };
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION(10, int3, 0, 0);
        CC_SETSIZE((10 * 2), 24, 1, 0);
        CC_SETTEXT(script9406(int7, int8));
        CC_SETTEXTFONT(28 as fontmetrics);
        CC_SETMAXLINES(2);
        CC_SETTEXTALIGN(0, 1, 0);
        script11024(19);
        script9079(int0, int7, int8, int9);
        var int3 = (int3 + 24);
    };
    var int13 = 8;
    var int14 = 0;
    var int15 = 0;
    var int16 = 2830 as struct;
    if ((int5 == 1)) {
        int16 = 28556 as struct;
    };
    if ((int5 == 0)) {
        int13 = (int13 + 48);
        int14 = script9059(int4, int7, int8, int9);
        if ((int14 > 0)) {
            int13 = (int13 + int14);
            int13 = (int13 + 4);
        };
    } else {
        int13 = 48;
        int15 = 0;
        if ((varplayer_8741 == (1 + (5 - int2)))) {
            int15 = 1;
        };
    };
    if ((int11 == 0)) {
        int6 = script13998(int0, int1, int16, 0, int3, int4, int13, int6, false, "", int15);
    };
    if (((int5 == 0) && (CC_FIND(int1, (int6 - 1)) == 1))) {
        CC_CLEAROPS();
        CC_SETOP(1, "Show Info");
        CC_SETOP(6, "Remove");
    };
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(10, (int3 + 4), 0, 0);
    CC_SETSIZE((((10 * 2) + 40) + 10), 40, 1, 0);
    CC_SETTEXT(script9407(int7, int8, int9));
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETMAXLINES(2);
    CC_SETTEXTALIGN(0, 1, 0);
    script11024(19);
    script9079(int0, int7, int8, int9);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(10, (int3 + 4), 2, 0);
    CC_SETSIZE(40, 40, 0, 0);
    script9082(int7, int8, int9, int5);
    script9097(int0, int7, int8, int9, int5);
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(10, (int3 + 4), 2, 0);
    CC_SETSIZE(40, 40, 0, 0);
    script3562(int7, int8, int9, int5);
    return [++int3, int6];
}