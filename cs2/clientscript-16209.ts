//
function script16209(int0: unknown_int, int1: component, int2: component, int3: dbrow, int4: struct, int5: struct, int6: struct, int7: struct, int8: int, int9: int, string0: string): void {
    var int10 = comp(-1, 65535);
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = false;
    var int17 = 0;
    var int18 = 0;
    CC_DELETEALL(int2);
    var int19 = comp(-1, 65535);
    var int20 = comp(-1, 65535);
    var int21 = 0;
    var string1 = script17938(int3);
    var int22 = -1;
    var int23 = -1 as graphic;
    var int24 = -1 as graphic;
    var int25 = -1 as graphic;
    [int23, int24, int25] = script17993(int3);
    script17927();
    var int26 = 6500;
    int11 = script16211(int3, int2, string1, int11);
    if ((int3 != -1 as dbrow)) {
        int13 = DB_GETFIELDCOUNT(int3, 634896);
        if ((dbrow_getfield(int3, 634912, 0) == true)) {
            IF_SETSIZE(IF_GETWIDTH(int2), 56, 0, 0, int2);
            IF_SETPOSITION(0, 56, 0, 0, int1);
            [int19, int20] = script3529(int3, 0);
            IF_SETSIZE(IF_GETWIDTH(int19), (IF_GETHEIGHT(int19) - 44), 0, 0, int19);
        } else {
            int21 = script17937(int3);
            while ((int12 < int21)) {
                if ((int12 < int13)) {
                    var [string0, int10, int4, int5, int6, int7, int8] = script11776(int3, int12);
                    int14 = MAX((PARAWIDTH(string0, 512, 58 as fontmetrics) - (25 * 2)), 0);
                    int16 = false;
                    switch (int3) {
                        case 3920: {
                            if (((int12 == 6) && (script10992() == 0))) {
                                int16 = true;
                            };
                            if (((int12 == 2) && (script20064(0) == 0))) {
                                int16 = true;
                            };
                            if (((int12 == 7) && (script246(script3609()) == 0))) {
                                int16 = true;
                            };
                            if (((int12 == 1) && (script20110() == 0))) {
                                int16 = true;
                            };
                            if (((int12 != 4) && (IF_GETTOP() == 906))) {
                                int16 = true;
                            };
                            break;
                        }
                        case 8256: {
                            if (((int12 == 3) && ((script17852() == 0) || (script4148() == true)))) {
                                int16 = true;
                            };
                            if (((int12 == 1) && (script17852() == 0))) {
                                int16 = true;
                            };
                            break;
                        }
                    };
                } else {
                    int16 = true;
                };
                if ((script16216(int8) == 0)) {
                    int16 = true;
                };
                CC_CREATE(int2, 5, int11);
                CC_SETGRAPHIC(int23);
                CC_SETSIZE(45, 50, 0, 0);
                CC_SETPOSITION(int15, 0, 0, 2);
                if ((int12 != int9)) {
                    CC_SETHIDE(true);
                } else {
                    CC_SETHIDE(int16);
                };
                if ((int16 == false)) {
                    int15 = (int15 + 45);
                };
                int11 = (int11 + 1);
                CC_CREATE(int2, 5, int11);
                CC_SETGRAPHIC(int24);
                CC_SETSIZE(int14, 50, 0, 0);
                CC_SETPOSITION(int15, 0, 0, 2);
                if ((int12 != int9)) {
                    CC_SETHIDE(true);
                } else {
                    CC_SETHIDE(int16);
                };
                if ((int16 == false)) {
                    int15 = (int15 + int14);
                };
                int11 = (int11 + 1);
                CC_CREATE(int2, 5, int11);
                if ((int12 == int9)) {
                    CC_SETGRAPHIC(int25);
                    CC_SETSIZE(45, 50, 0, 0);
                    CC_SETPOSITION(int15, 0, 0, 2);
                } else {
                    CC_SETGRAPHIC(12872 as graphic);
                    CC_SETSIZE(6, 27, 0, 0);
                    CC_SETPOSITION((int15 + 42), (8 + 12), 0, 2);
                };
                if ((((int12 + 1) == int13) && (int12 != int9))) {
                    CC_SETHIDE(true);
                } else {
                    CC_SETHIDE(int16);
                };
                int11 = (int11 + 1);
                CC_CREATE(int2, 4, int11);
                CC_SETTEXTFONT(58 as fontmetrics);
                if ((int12 == int9)) {
                    CC_SETCOLOUR(14734449);
                } else {
                    CC_SETCOLOUR(8427167);
                    CC_SETONMOUSEOVER(callback(script16223, int2, int11, 1));
                    CC_SETONMOUSELEAVE(callback(script16223, int2, int11, 0));
                };
                CC_SETSIZE((int14 + (25 * 2)), 44, 0, 0);
                CC_SETPOSITION(((int15 - int14) - 25), 12, 0, 2);
                CC_SETTEXTALIGN(1, 1, 16);
                CC_SETTEXT(string0);
                CC_SETHIDE(int16);
                CC_SETOP(1, "Open");
                if ((int16 == false)) {
                    int15 = (int15 + 45);
                };
                int11 = (int11 + 1);
                CC_CREATE(int2, 0, int11);
                CC_SETPOSITION(((int15 - 12) - 4), (44 - 12), 0, 2);
                CC_SETSIZE(20, 20, 0, 0);
                switch (int3) {
                    case 8256: {
                        if (((int12 == 1) && (varplayer_11334 > 0))) {
                            if (((PLATFORMTYPE() == 3) || (PLATFORMTYPE() == 2))) {
                                int22 = 7882;
                            } else {
                                int22 = 7881;
                            };
                            script14933(int2, int26, CC_GETX(), CC_GETY(), 20, 20, 10999 as graphic);
                            CC_SETONVARTRANSMIT(callback(script17041, int22, -1, 0, int2, int26, -1, CC_GETWIDTH(), 9433, 9434, 11334, 3));
                            int26 = (int26 + 1);
                            script14934(int2, int26, 0, CC_GETX(), CC_GETY(), 20, 20);
                            CC_SETONVARTRANSMIT(callback(script17041, int22, -1, 1, int2, int26, -1, CC_GETWIDTH(), 9433, 9434, 11334, 3));
                            int26 = (int26 + 1);
                        };
                        break;
                    }
                };
                int11 = (int11 + 1);
                int12 = (int12 + 1);
            };
            if ((int3 == 8256 as dbrow)) {
                CC_CREATE(int2, 4, int26);
                int26 = (int26 + 1);
                CC_SETPOSITION(10, 12, 2, 2);
                CC_SETSIZE(300, 44, 0, 0);
                CC_SETTEXT(script17972());
                CC_SETTEXTFONT(58 as fontmetrics);
                CC_SETCOLOUR(14734449);
                CC_SETTEXTALIGN(2, 1, 0);
                stack(17973);
                stack(-2147483645);
                stack(-2147483643);
                stack("ii");
                unk11154();
            };
        };
        var [string0, int2, int4, int5, int6, int7, int8] = script11776(int3, int9);
    };
    var int27 = 110;
    var int28 = 170;
    int11 = script16210(int4, int11, 1, int2, int27);
    int11 = script16210(int5, int11, 2, int2, (int27 + (int28 * 1)));
    int11 = script16210(int6, int11, 3, int2, (int27 + (int28 * 2)));
    int11 = script16210(int7, int11, 4, int2, (int27 + (int28 * 3)));
    if ((int3 == 8256 as dbrow)) {
        script17974(int9);
    };
    return;
}