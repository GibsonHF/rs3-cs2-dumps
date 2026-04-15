//
function script3014(int0: unknown_int): void {
    var int1 = ENUM_GETOUTPUTCOUNT(7783 as cs2enum);
    var int2 = ENUM_GETOUTPUTCOUNT(8300 as cs2enum);
    define_array[73](MAX(int1, int2));
    var int3 = -1 as struct;
    var int4 = -1 as struct;
    var int5 = 0;
    var int6 = 0;
    script10592(comp(-1, 65535), 0);
    script10593(0);
    IF_SETONOP(callback(), comp(907, 37));
    IF_SETONOP(callback(), 59441190);
    IF_SETOP(1, "", 59441190);
    IF_SETONTIMER(callback(), 59375627);
    CC_DELETEALL(59441191);
    IF_SETTEXT("", 59441192);
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    [int7, int8, int9] = USERDETAIL_LOBBY_MEMBERSHIP();
    var int10 = (DATE_RUNEDAY() - varplayer_1749);
    var string0 = "";
    if ((((varplayer_3185 != 4) && (int10 <= 5)) && (varbitplayer_16464 == 2))) {
        int10 = (5 - int10);
        if ((int10 > 1)) {
            IF_SETTEXT(`You have ${inttostring(int10, 10)} days until you need to validate your email address.`, comp(907, 40));
        } else {
            IF_SETTEXT("You have one day until you need to validate your email address.", comp(907, 40));
        };
        IF_SETTEXTFONT(58 as fontmetrics, comp(907, 40));
        IF_SETCOLOUR(0, comp(907, 40));
        IF_SETTEXTALIGN(1, 1, 22, comp(907, 40));
        IF_SETPOSITION(0, 0, 1, 1, comp(907, 40));
        IF_SETSIZE(200, 10, 1, 1, comp(907, 40));
        stack(23884);
        stack(59441190);
        IF_SETGRAPHIC();
        return;
    };
    IF_SETSIZE(345, 35, 0, 0, comp(907, 40));
    IF_SETPOSITION(231, 5, 0, 0, comp(907, 40));
    IF_SETCOLOUR(923907, comp(907, 40));
    IF_SETTEXTFONT(13 as fontmetrics, comp(907, 40));
    IF_SETTEXTALIGN(1, 2, 0, comp(907, 40));
    IF_SETTEXT("", comp(907, 41));
    IF_SETPOSITION(231, 46, 0, 0, comp(907, 41));
    IF_SETSIZE(345, 70, 0, 0, comp(907, 41));
    IF_SETCOLOUR(923907, comp(907, 41));
    var int11 = 0;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "Featured Content";
    IF_SETTEXT(string4, comp(907, 18));
    if (((int0 == 1) && (script18461(13086 as dbrow) == 1))) {
        script18464(13086 as dbrow);
    } else if ((((((varplayer_6601 == 8661) && (DATE_MINUTES() >= (DATE_MINUTES_FROMRUNEDAY(8661) + 720))) || (varplayer_6601 > 8661)) || (varplayer_6601 < 7922)) || (((RANDOM(2) == 0) && (varplayer_6601 >= 7924)) || (varbitplayer_48641 == 0)))) {
        if ((varplayer_6601 > 0)) {
            while ((int5 < int1)) {
                int3 = enum_getvalue(0, 73, 7783 as cs2enum, int5);
                if ((script17266(int3) == true)) {
                    switch (int3) {
                        case 35237: {
                            int4 = int3;
                            break;
                        }
                    };
                    pop_array(int6, int3);
                    int6 = (int6 + 1);
                };
                int5 = (int5 + 1);
            };
        };
        if ((int4 != -1 as struct)) {
            int3 = int4;
        } else if ((int6 == 0)) {
            int3 = enum_getvalue(0, 73, 7783 as cs2enum, -1);
            if ((int3 == 34505 as struct)) {
                int3 = enum_getvalue(0, 73, 8300 as cs2enum, MODULO(varplayer_6601, int2));
                string4 = "Featured Content";
            };
        } else {
            int3 = push_array(RANDOM(int6));
        };
        switch (MAP_LANG()) {
            case 1: {
                string2 = struct_getparam(int3, 6962);
                string3 = struct_getparam(int3, 5558);
                string1 = struct_getparam(int3, 7961);
                break;
            }
            case 2: {
                string2 = struct_getparam(int3, 6963);
                string3 = struct_getparam(int3, 7892);
                string1 = struct_getparam(int3, 7962);
                break;
            }
            case 3: {
                string2 = struct_getparam(int3, 6964);
                string3 = struct_getparam(int3, 7893);
                string1 = struct_getparam(int3, 7963);
                break;
            }
        };
        if ((STRING_LENGTH(string2) == 0)) {
            string2 = struct_getparam(int3, 6394);
        };
        if ((STRING_LENGTH(string3) == 0)) {
            string3 = struct_getparam(int3, 65);
        };
        if ((STRING_LENGTH(string1) == 0)) {
            string1 = struct_getparam(int3, 6393);
        };
        if ((STRING_LENGTH(struct_getparam(int3, 6391)) > 0)) {
            string4 = struct_getparam(int3, 6391);
        };
        if ((STRING_LENGTH(string4) > 0)) {
            IF_SETTEXT(string4, comp(907, 18));
        };
        switch (MAP_LANG()) {
            case 0: {
                int5 = 1;
                if ((struct_getparam(int3, 9361) != -1 as graphic)) {
                    int5 = (int5 + 1);
                    if ((struct_getparam(int3, 9362) != -1 as graphic)) {
                        int5 = (int5 + 1);
                        if ((struct_getparam(int3, 9363) != -1 as graphic)) {
                            int5 = (int5 + 1);
                        };
                    };
                };
                switch (RANDOM(int5)) {
                    case 0: {
                        stack(script19254(int3, 0));
                        stack(59441190);
                        IF_SETGRAPHIC();
                        break;
                    }
                    case 1: {
                        stack(struct_getparam(int3, 9361));
                        stack(59441190);
                        IF_SETGRAPHIC();
                        break;
                    }
                    case 2: {
                        stack(struct_getparam(int3, 9362));
                        stack(59441190);
                        IF_SETGRAPHIC();
                        break;
                    }
                    case 3: {
                        stack(struct_getparam(int3, 9363));
                        stack(59441190);
                        IF_SETGRAPHIC();
                        break;
                    }
                };
                break;
            }
            default: {
                stack(script19254(int3, MAP_LANG()));
                stack(59441190);
                IF_SETGRAPHIC();
                break;
            }
        };
        IF_SETTEXT(string4, comp(907, 18));
        script10593(1);
        switch (struct_getparam(int3, 6392)) {
            case 1: {
                script10592(comp(907, 24), 1);
                IF_SETONOP(callback(script13252), comp(907, 24));
                break;
            }
            case 2:
            case 18: {
                IF_SETOP(1, "Select", comp(907, 38));
                IF_SETONOP(callback(script13252), comp(907, 38));
                break;
            }
            case 3: {
                IF_SETOP(1, "Select", comp(907, 38));
                if ((struct_getparam(int3, 6395) == true)) {
                    IF_SETONOP(callback(script3434, string1, string2), comp(907, 38));
                } else {
                    IF_SETONOP(callback(script7397, string1, string2), comp(907, 38));
                };
                break;
            }
            case 9: {
                IF_SETOP(1, "Select", comp(907, 38));
                IF_SETONOP(callback(script2828, string3), comp(907, 38));
                break;
            }
            case 4: {
                IF_SETOP(1, "Select", comp(907, 38));
                IF_SETONOP(callback(script13252), comp(907, 38));
                break;
            }
            case 5: {
                script10592(comp(907, 25), 1);
                IF_SETONOP(callback(script13252), comp(907, 25));
                break;
            }
            case 7: {
                IF_SETOP(1, "Select", comp(907, 38));
                break;
            }
            case 8: {
                script10592(comp(907, 26), 1);
                break;
            }
            case 10: {
                script10592(comp(907, 29), 1);
                IF_SETONOP(callback(script13252), comp(907, 29));
                break;
            }
            case 12: {
                script10592(comp(907, 30), 1);
                IF_SETONOP(callback(script13252), comp(907, 30));
                break;
            }
            case 13: {
                if (((PLATFORMTYPE() != 0) && (PLATFORMTYPE() != 5))) {
                    script10592(comp(907, 31), 1);
                    IF_SETONOP(callback(script13252), comp(907, 31));
                } else {
                    IF_SETOP(1, "Select", comp(907, 38));
                    IF_SETONOP(callback(script15228, 19), comp(907, 38));
                };
                break;
            }
            case 14: {
                script10592(comp(907, 31), 1);
                IF_SETONOP(callback(script13252), comp(907, 31));
                break;
            }
            case 19: {
                script10592(comp(907, 32), 1);
                IF_SETONOP(callback(script13252), comp(907, 32));
                break;
            }
            case 15: {
                script10592(comp(907, 33), 1);
                break;
            }
            case 11: {
                script10592(comp(907, 23), 1);
                IF_SETONOP(callback(script13252), comp(907, 23));
                break;
            }
        };
    } else {
        int11 = ((DATE_MINUTES_FROMRUNEDAY(8661) + 720) - 1);
        script3568(comp(907, 39), comp(906, 11), int11, DATE_MINUTES(), -1, -1, 0, 0);
        IF_SETONTIMER(callback(script12275, 59441191, 59375627, int11, DATE_MINUTES(), -1, -1, 0, 0), 59375627);
    };
    return;
}