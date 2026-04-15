//
function script9058(int0: unknown_int): void {
    var int1 = comp(1854, 3);
    var int2 = comp(1854, 8);
    var int3 = comp(1854, 7);
    var int4 = comp(1854, 6);
    var int5 = comp(1854, 5);
    var int6 = comp(1854, 9);
    if ((int0 == 1)) {
        int1 = comp(1855, 3);
        int2 = comp(1855, 4);
        int3 = comp(1855, 5);
        int4 = comp(-1, 65535);
        int5 = comp(-1, 65535);
        int6 = comp(1855, 6);
    };
    IF_SETHIDE(true, int6);
    IF_SETSIZE(0, 0, 1, 1, int1);
    IF_SETSCROLLSIZE(0, 0, int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    if ((int4 != comp(-1, 65535))) {
        CC_DELETEALL(int4);
    };
    if ((int5 != comp(-1, 65535))) {
        CC_DELETEALL(int5);
    };
    var int7 = IF_GETWIDTH(int1);
    var string0 = "Choose a Path...";
    var int8 = 0;
    var int9 = 5;
    if ((script8237() == 1)) {
        if ((script8223() == 1)) {
            int9 = (int9 + script7593(string0, int7, 31 as fontmetrics, 14));
            int9 = (++int9 + script8952(int7));
            if ((int0 == 0)) {
                if ((script4708() > 60)) {
                    int9 = (++int9 + 30);
                    if ((script6431() == true)) {
                        int9 = (++int9 + 30);
                    };
                } else if ((script6431() == true)) {
                    int9 = (++int9 + 30);
                };
                int9 = (int9 + 5);
            };
        } else if ((int0 == 0)) {
            int9 = (++int9 + 5);
        };
        if ((int9 > IF_GETHEIGHT(int1))) {
            IF_SETSIZE(16, 0, 1, 1, int1);
            IF_SETHIDE(false, int6);
        };
        int7 = IF_GETWIDTH(int1);
        int9 = 5;
        if ((script8223() == 0)) {
            if ((int0 == 0)) {
                script10410(int2, int3, 28556 as struct, 10, int9, (int7 - (10 * 2)), 30, 0, false, "Find More");
                int9 = (++int9 + 5);
            };
        } else {
            int8 = script7593(string0, int7, 31 as fontmetrics, 14);
            CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
            CC_SETTEXT(string0);
            CC_SETTEXTFONT(31 as fontmetrics);
            CC_SETPOSITION(0, int9, 0, 0);
            CC_SETSIZE(0, int8, 1, 0);
            CC_SETTEXTALIGN(1, 1, 14);
            script11024(0);
            int9 = (int9 + int8);
            int9 = (int9 + 5);
            int9 = script8953(int2, int3, 5, int9);
            if ((int0 == 0)) {
                if ((script4708() > 60)) {
                    int9 = (int9 + 16);
                    script10410(int2, int4, 28556 as struct, 5, int9, (int7 - 10), 30, 0, false, "Find More");
                    int9 = (int9 + 30);
                };
                int9 = (int9 + 5);
            };
        };
        if ((IF_GETHIDE(int6) == false)) {
            IF_SETSCROLLSIZE(0, int9, int1);
            IF_SETSCROLLPOS(0, 0, int1);
            script7791(int6, int1);
        };
        return;
    };
    var int10 = 5;
    var int11 = 0;
    var int12 = -1;
    var int13 = 0;
    var int14 = -1 as achievement;
    while ((int10 > -1)) {
        int11 = script8224((5 - int10));
        if ((int11 > 0)) {
            int14 = -1 as achievement;
            int12 = -1;
            if ((int11 != 2)) {
                int12 = script8226((5 - int10));
            } else {
                int14 = script15324((5 - int10));
            };
            if ((int11 == 3)) {
                int13 = (int13 + 24);
            };
            int13 = (int13 + 48);
            if ((int0 == 0)) {
                int13 = (int13 + script9059(int7, int11, int12, int14));
                int13 = (int13 + 4);
            };
            int13 = (int13 + 5);
        };
        int10 = (int10 - 1);
    };
    if ((int13 > IF_GETHEIGHT(int1))) {
        IF_SETHIDE(false, int6);
        IF_SETSIZE(16, 0, 1, 1, int1);
        int7 = IF_GETWIDTH(int1);
    };
    int9 = 0;
    int10 = 5;
    var int15 = 0;
    var int16 = 0;
    var int17 = script6431();
    while ((int10 > 0)) {
        int11 = script8224((5 - int10));
        if ((int11 > 0)) {
            if ((int11 != 2)) {
                int12 = script8226((5 - int10));
            } else {
                int14 = script15324((5 - int10));
            };
            [int9, int16] = script9060(int2, int3, int10, int9, int7, int0, int16, int11, int12, int14, int17);
            if ((int0 == 0)) {
                int9 = script9078(int2, int9, int7, int0, int11, int12, int14, int17);
                if ((int17 == true)) {
                    CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
                    CC_SETSIZE(53, 2, 1, 0);
                    CC_SETPOSITION(0, int9, 1, 0);
                    CC_SETGRAPHIC(2749 as graphic);
                    int9 = (int9 + 6);
                } else {
                    int9 = (int9 + 4);
                };
            };
            int9 = (int9 + 5);
        };
        int10 = (int10 - 1);
    };
    if ((IF_GETHIDE(int6) == false)) {
        IF_SETSCROLLSIZE(0, int9, int1);
        IF_SETSCROLLPOS(0, MIN(int9, IF_GETSCROLLY(int1)), int1);
        script7791(int6, int1);
    } else {
        IF_SETSCROLLPOS(0, 0, int1);
    };
    return;
}