//
function script5690(): void {
    if ((varclient_1753 <= 0)) {
        if ((varbitplayer_3264 > 0)) {
            varclient_1753 = varbitplayer_3264;
        } else {
            varclient_1753 = 8;
        };
    };
    IF_SETHIDE(false, comp(1218, 262));  // skillguide:members_filter_wrapper
    CC_DELETEALL(comp(1218, 246));  // skillguide:content_layer
    CC_DELETEALL(comp(1218, 247));  // skillguide:image_layer
    CC_DELETEALL(comp(1218, 245));  // skillguide:background_layer
    var int0 = 0;
    var int1 = 0;
    var string0 = "";
    var int2 = -1;
    var int3 = 0;
    var int4 = 0;
    var int5 = enum_getvalue(0, 26, 5420 as cs2enum, varclient_1753);
    var int6 = ENUM_GETOUTPUTCOUNT(int5);
    var int7 = -1;
    var int8 = 0;
    var int9 = -1;
    switch (varclient_1753) {
        case 22: {
            int7 = script20816();
            int8 = script20818(int7);
            break;
        }
    };
    var int10 = (int6 + int8);
    define_array((int10 + 1));
    var int11 = 0;
    var int12 = 1;
    switch (varclient_1753) {
        case 1: {
            int12 = varclient_1469;
            break;
        }
        case 2: {
            int12 = varclient_1470;
            break;
        }
        case 5: {
            int12 = varclient_1471;
            break;
        }
        case 3: {
            int12 = varclient_1472;
            break;
        }
        case 7: {
            int12 = varclient_1473;
            break;
        }
        case 4: {
            int12 = varclient_1474;
            break;
        }
        case 6: {
            int12 = varclient_1475;
            break;
        }
        case 8: {
            int12 = varclient_1476;
            break;
        }
        case 9: {
            int12 = varclient_1477;
            break;
        }
        case 10: {
            int12 = varclient_1478;
            break;
        }
        case 11: {
            int12 = varclient_1479;
            break;
        }
        case 19: {
            int12 = varclient_1480;
            break;
        }
        case 13: {
            int12 = varclient_1481;
            break;
        }
        case 14: {
            int12 = varclient_1482;
            break;
        }
        case 15: {
            int12 = varclient_1483;
            break;
        }
        case 16: {
            int12 = varclient_1484;
            break;
        }
        case 17: {
            int12 = varclient_1485;
            break;
        }
        case 18: {
            int12 = varclient_1486;
            break;
        }
        case 12: {
            int12 = varclient_1487;
            break;
        }
        case 20: {
            int12 = varclient_1488;
            break;
        }
        case 21: {
            int12 = varclient_1489;
            break;
        }
        case 22: {
            int12 = varclient_1490;
            break;
        }
        case 23: {
            int12 = varclient_1491;
            break;
        }
        case 24: {
            int12 = varclient_1492;
            break;
        }
        case 25: {
            int12 = varclient_1493;
            break;
        }
        case 26: {
            int12 = varclient_3715;
            break;
        }
        case 27: {
            int12 = varclient_5125;
            break;
        }
        case 28: {
            int12 = varclient_6783;
            break;
        }
        case 29: {
            int12 = varclient_7292;
            break;
        }
    };
    script5712(varclient_1753);
    var int13 = STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, varclient_1753));
    var int14 = -1;
    var int15 = 0;
    var int16 = -1;
    var int17 = 0;
    var int18 = 0;
    var int19 = enum_getvalue(0, 17, 681 as cs2enum, varclient_1753);
    var int20 = -1 as quest;
    var int21 = 0;
    var int22 = 36;
    var int23 = 0;
    var int24 = -1;
    var int25 = script3981();
    if ((int13 > int12)) {
        while ((int1 <= int25)) {
            int20 = enum_getvalue(0, 3, 2252 as cs2enum, int1);
            if ((int20 != -1 as quest)) {
                int18 = (int18 + 1);
                [string0, int0] = script8584(int19, int12, int20);
                if ((int0 == 1)) {
                    if ((quest_getparam(int20, 7829) == -1 as graphic)) {
                        int24 = 2270;
                    } else {
                        int24 = script2107(int20);
                    };
                    int3 = script8790(int3, string0, int24);
                };
            };
            int1 = (int1 + 1);
        };
        int1 = 0;
        while ((int11 < int6)) {
            [int3, int21] = script16268(int11, int10, int3, int21, enum_getvalue(0, 73, int5, int11), -1, int12, int13, 0);
            int11 = (int11 + 1);
        };
        if (((int7 != -1) && (int8 > 0))) {
            switch (varclient_1753) {
                case 22: {
                    unk11023(int7, 1515520, 1);
                    int9 = dbrow_findnext();
                    while ((int9 != -1)) {
                        [int3, int21] = script16268(int11, int10, int3, int21, -1, int9, int12, int13, 0);
                        int11 = (int11 + 1);
                        int9 = dbrow_findnext();
                    };
                    break;
                }
            };
        };
        if ((int3 > 0)) {
            IF_SETHIDE(true, comp(1218, 262));  // skillguide:members_filter_wrapper
            IF_SETHIDE(true, comp(1218, 256));  // skillguide:sort_by_dropdown
            IF_SETHIDE(true, comp(1218, 259));  // skillguide:filter_by_dropdown
            IF_SETHIDE(false, comp(1218, 240));  // skillguide:new_unlocks_layer
            IF_SETHIDE(true, comp(1218, 242));  // skillguide:loading_text
            if ((int3 < IF_GETHEIGHT(comp(1218, 255)))) {  // skillguide:main_content_scrollbar_layer
                IF_SETSCROLLSIZE(0, 0, comp(1218, 244));  // skillguide:main_content_layer
            } else {
                IF_SETSCROLLSIZE(0, int3, comp(1218, 244));  // skillguide:main_content_layer
            };
            IF_SETSCROLLPOS(0, 0, comp(1218, 244));  // skillguide:main_content_layer
            IF_SETSIZE(590, int3, 0, 0, comp(1218, 246));  // skillguide:content_layer
            IF_SETSIZE(590, int3, 0, 0, comp(1218, 247));  // skillguide:image_layer
            script7791(79823103, 79823092);
            return;
        };
    };
    IF_SETHIDE(false, comp(1218, 255));  // skillguide:main_content_scrollbar_layer
    int11 = 0;
    int3 = script6346(varclient_1753, varclient_1754, int3);
    IF_SETHIDE(true, comp(1218, 240));  // skillguide:new_unlocks_layer
    while ((int11 < int6)) {
        [int3, int21] = script16268(int11, int10, int3, int21, enum_getvalue(0, 73, int5, int11), -1, 0, 120, varbitplayer_41394);
        pop_array(int11, int11);
        int11 = (int11 + 1);
    };
    if (((int7 != -1) && (int8 > 0))) {
        switch (varclient_1753) {
            case 22: {
                unk11023(int7, 1515520, 1);
                int9 = dbrow_findnext();
                while ((int9 != -1)) {
                    [int3, int21] = script16268(int11, int10, int3, int21, -1, int9, 0, 120, varbitplayer_41394);
                    pop_array(int11, int11);
                    int11 = (int11 + 1);
                    int9 = dbrow_findnext();
                };
                break;
            }
        };
    };
    varclient_1754 = script12842(varclient_1753);
    pop_array(int10, -1);
    script17567(0, 79823094, 0, (int10 - 1));
    int11 = 0;
    IF_SETPARAM_INT(2221, push_array(int11), comp(1218, 246));  // skillguide:content_layer
    IF_SETPARAM_INT(2222, push_array((int10 - 1)), comp(1218, 246));  // skillguide:content_layer
    while ((int11 < int10)) {
        if ((CC_FIND(comp(1218, 246), push_array(int11)) == 1)) {  // skillguide:content_layer
            CC_SETPARAM_INT(2221, push_array((int11 + 1)));
            if ((int11 > 0)) {
                CC_SETPARAM_INT(2222, push_array((int11 - 1)));
            };
        };
        int11 = (int11 + 1);
    };
    int11 = 0;
    script17568(0, 79823094, 0, (int10 - 1));
    IF_SETPARAM_INT(2223, push_array((int10 - 1)), comp(1218, 246));  // skillguide:content_layer
    IF_SETPARAM_INT(2224, push_array(int11), comp(1218, 246));  // skillguide:content_layer
    while ((int11 < int10)) {
        if ((CC_FIND(comp(1218, 246), push_array(int11)) == 1)) {  // skillguide:content_layer
            CC_SETPARAM_INT(2224, push_array((int11 + 1)));
            if ((int11 > 0)) {
                CC_SETPARAM_INT(2223, push_array((int11 - 1)));
            };
        };
        int11 = (int11 + 1);
    };
    IF_SETSCROLLPOS(0, 0, comp(1218, 244));  // skillguide:main_content_layer
    script5691(varclient_1753);
    return;
}