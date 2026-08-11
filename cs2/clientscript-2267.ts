//
function script2267(): void {
    script13972(2949138, -1, 28595, "Pouches", script9670(0, varbitplayer_43381));
    script13972(2949139, -1, 28595, "Scrolls", script9670(1, varbitplayer_43381));
    var int0 = 0;
    CC_DELETEALL(comp(45, 3));  // wolf_shard_swap:found_build
    CC_DELETEALL(comp(45, 4));  // wolf_shard_swap:found_icon
    CC_DELETEALL(comp(45, 5));  // wolf_shard_swap:found_click
    CC_DELETEALL(comp(45, 20));  // wolf_shard_swap:not_build
    CC_DELETEALL(comp(45, 21));  // wolf_shard_swap:not_icon
    CC_DELETEALL(comp(45, 22));  // wolf_shard_swap:not_click
    CC_DELETEALL(comp(45, 0));  // wolf_shard_swap:scrolling_layer
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as obj;
    var int9 = -1 as obj;
    var int10 = 0;
    var string0 = "";
    var string1 = "";
    var int11 = -1 as cs2enum;
    var int12 = 57;
    var int13 = 52;
    var int14 = 0;
    var int15 = comp(-1, 65535);
    var int16 = comp(-1, 65535);
    var int17 = comp(-1, 65535);
    if ((varbitplayer_43381 == 0)) {
        int11 = 1182 as cs2enum;
    } else {
        int11 = 10053 as cs2enum;
    };
    var int18 = ENUM_GETOUTPUTCOUNT(int11);
    while ((int0 < int18)) {
        int9 = enum_getvalue(0, 33, int11, int0);
        CC_CREATE(comp(45, 4), 5, int0);  // wolf_shard_swap:found_icon
        CC_CREATE[1](comp(45, 21), 5, int0);  // wolf_shard_swap:not_icon
        if ((int11 == 10053 as cs2enum)) {
            CC_SETOBJECT_ALWAYSNUM(int9, MAX(item_getparam(int9, 599), 1));
            CC_SETOBJECT_ALWAYSNUM[1](int9, MAX(item_getparam(int9, 599), 1));
        } else {
            CC_SETOBJECT(int9, 1);
            CC_SETOBJECT[1](int9, 1);
        };
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETSIZE[1](36, 32, 0, 0);
        CC_SETHIDE(true);
        CC_SETHIDE[1](true);
        int0 = (int0 + 1);
    };
    int0 = 0;
    while ((int0 < int18)) {
        CC_CREATE(comp(45, 5), 4, int0);  // wolf_shard_swap:found_click
        CC_CREATE(comp(45, 22), 4, int0);  // wolf_shard_swap:not_click
        int0 = (int0 + 1);
    };
    int0 = 0;
    while ((int0 < int18)) {
        if ((item_getparam(enum_getvalue(0, 33, int11, int0), 457) <= 0)) {
            if ((item_getparam(enum_getvalue(0, 33, int11, int0), 599) <= 0)) {
                CC_CREATE(comp(45, 5), 4, int0);  // wolf_shard_swap:found_click
                CC_CREATE(comp(45, 22), 4, int0);  // wolf_shard_swap:not_click
            } else {
                int9 = enum_getvalue(0, 33, int11, int0);
                int8 = enum_getvalue(0, 33, 1182 as cs2enum, int0);
                int10 = enum_getvalue(33, 0, 1185 as cs2enum, OC_UNCERT(int8));
                string0 = OC_NAME(int9);
                int14 = item_getparam(int9, 457);
                if ((varplayer_8368 == 1)) {
                    int14 = ADDPERCENT(int14, 10);
                };
                if ((STAT_BASE(23 as stat) >= enum_getvalue(0, 0, 1472 as cs2enum, int10))) {
                    if ((INV_TOTAL(93 as inv, int9) > 0)) {
                        int7 = 1;
                        int5 = int1;
                        int6 = int2;
                        int15 = comp(45, 3);  // wolf_shard_swap:found_build
                        int16 = comp(45, 4);  // wolf_shard_swap:found_icon
                        int17 = comp(45, 5);  // wolf_shard_swap:found_click
                    } else if ((OC_CERT(int9) != int9)) {
                        if ((INV_TOTAL(93 as inv, OC_CERT(int9)) > 0)) {
                            int7 = 1;
                            int5 = int1;
                            int6 = int2;
                            int15 = comp(45, 3);  // wolf_shard_swap:found_build
                            int16 = comp(45, 4);  // wolf_shard_swap:found_icon
                            int17 = comp(45, 5);  // wolf_shard_swap:found_click
                        } else {
                            int7 = 0;
                            int5 = int3;
                            int6 = int4;
                            int15 = comp(45, 20);  // wolf_shard_swap:not_build
                            int16 = comp(45, 21);  // wolf_shard_swap:not_icon
                            int17 = comp(45, 22);  // wolf_shard_swap:not_click
                        };
                    } else {
                        int7 = 0;
                        int5 = int3;
                        int6 = int4;
                        int15 = comp(45, 20);  // wolf_shard_swap:not_build
                        int16 = comp(45, 21);  // wolf_shard_swap:not_icon
                        int17 = comp(45, 22);  // wolf_shard_swap:not_click
                    };
                } else {
                    int7 = 0;
                    int5 = int3;
                    int6 = int4;
                    int15 = comp(45, 20);  // wolf_shard_swap:not_build
                    int16 = comp(45, 21);  // wolf_shard_swap:not_icon
                    int17 = comp(45, 22);  // wolf_shard_swap:not_click
                };
                if ((item_getparam(OC_UNCERT(int9), 394) > enum_getvalue(0, 0, 1471 as cs2enum, STAT_BASE(23 as stat)))) {
                    string1 = `${string0} - You need a Summoning level of ${inttostring(enum_getvalue(0, 0, 1472 as cs2enum, item_getparam(OC_UNCERT(int9), 394)), 10)} to swap this`;
                } else if ((script6431() == 0)) {
                    string1 = string0;
                } else {
                    string1 = "";
                };
                if ((int5 >= 9)) {
                    int5 = 0;
                    int6 = (int6 + 1);
                };
                script2682(int15, 45, 50, (2 + (int5 * int13)), (1 + (int6 * int12)), 1, (int5 + (int6 * 9)));
                script6204(int15, 45, 50, (2 + (int5 * int13)), (1 + (int6 * int12)), 0, 2438);
                if ((CC_FIND(int16, int0) == 1)) {
                    CC_SETPOSITION((8 + (int5 * int13)), (5 + (int6 * int12)), 0, 0);
                    CC_SETHIDE(false);
                };
                CC_CREATE(int17, 4, int0);
                CC_SETSIZE(45, 50, 0, 0);
                CC_SETPOSITION((2 + (int5 * int13)), (1 + (int6 * int12)), 0, 0);
                CC_SETOP(1, "Value");
                CC_SETOPBASE(string0);
                if ((STRING_LENGTH(string1) > 0)) {
                    script14990(0, string1);
                };
                if ((int7 == 1)) {
                    CC_SETOP(2, "Swap-1");
                    CC_SETOP(3, "Swap-5");
                    CC_SETOP(4, "Swap-10");
                    CC_SETOP(5, "Swap-X");
                    CC_SETOP(6, "Swap-All");
                };
                CC_CREATE(int15, 4, IF_GETNEXTSUBID(int15));
                CC_SETCOLOUR(16777215);
                CC_SETTEXTFONT(26 as fontmetrics);
                CC_SETTEXTSHADOW(true);
                CC_SETTEXTALIGN(1, 1, 0);
                CC_SETTEXT(script940(MAX(1, int14)));
                CC_SETSIZE(45, 20, 0, 0);
                CC_SETPOSITION((2 + (int5 * int13)), (35 + (int6 * int12)), 0, 0);
                int5 = (int5 + 1);
                if ((int7 == 1)) {
                    int1 = int5;
                    int2 = int6;
                } else {
                    int3 = int5;
                    int4 = int6;
                };
            };
        } else {
            int9 = enum_getvalue(0, 33, int11, int0);
            int8 = enum_getvalue(0, 33, 1182 as cs2enum, int0);
            int10 = enum_getvalue(33, 0, 1185 as cs2enum, OC_UNCERT(int8));
            string0 = OC_NAME(int9);
            int14 = item_getparam(int9, 457);
            if ((varplayer_8368 == 1)) {
                int14 = ADDPERCENT(int14, 10);
            };
            if ((STAT_BASE(23 as stat) >= enum_getvalue(0, 0, 1472 as cs2enum, int10))) {
                if ((INV_TOTAL(93 as inv, int9) > 0)) {
                    int7 = 1;
                    int5 = int1;
                    int6 = int2;
                    int15 = comp(45, 3);  // wolf_shard_swap:found_build
                    int16 = comp(45, 4);  // wolf_shard_swap:found_icon
                    int17 = comp(45, 5);  // wolf_shard_swap:found_click
                } else if ((OC_CERT(int9) != int9)) {
                    if ((INV_TOTAL(93 as inv, OC_CERT(int9)) > 0)) {
                        int7 = 1;
                        int5 = int1;
                        int6 = int2;
                        int15 = comp(45, 3);  // wolf_shard_swap:found_build
                        int16 = comp(45, 4);  // wolf_shard_swap:found_icon
                        int17 = comp(45, 5);  // wolf_shard_swap:found_click
                    } else {
                        int7 = 0;
                        int5 = int3;
                        int6 = int4;
                        int15 = comp(45, 20);  // wolf_shard_swap:not_build
                        int16 = comp(45, 21);  // wolf_shard_swap:not_icon
                        int17 = comp(45, 22);  // wolf_shard_swap:not_click
                    };
                } else {
                    int7 = 0;
                    int5 = int3;
                    int6 = int4;
                    int15 = comp(45, 20);  // wolf_shard_swap:not_build
                    int16 = comp(45, 21);  // wolf_shard_swap:not_icon
                    int17 = comp(45, 22);  // wolf_shard_swap:not_click
                };
            } else {
                int7 = 0;
                int5 = int3;
                int6 = int4;
                int15 = comp(45, 20);  // wolf_shard_swap:not_build
                int16 = comp(45, 21);  // wolf_shard_swap:not_icon
                int17 = comp(45, 22);  // wolf_shard_swap:not_click
            };
            if ((item_getparam(OC_UNCERT(int9), 394) > enum_getvalue(0, 0, 1471 as cs2enum, STAT_BASE(23 as stat)))) {
                string1 = `${string0} - You need a Summoning level of ${inttostring(enum_getvalue(0, 0, 1472 as cs2enum, item_getparam(OC_UNCERT(int9), 394)), 10)} to swap this`;
            } else if ((script6431() == 0)) {
                string1 = string0;
            } else {
                string1 = "";
            };
            if ((int5 >= 9)) {
                int5 = 0;
                int6 = (int6 + 1);
            };
            script2682(int15, 45, 50, (2 + (int5 * int13)), (1 + (int6 * int12)), 1, (int5 + (int6 * 9)));
            script6204(int15, 45, 50, (2 + (int5 * int13)), (1 + (int6 * int12)), 0, 2438);
            if ((CC_FIND(int16, int0) == 1)) {
                CC_SETPOSITION((8 + (int5 * int13)), (5 + (int6 * int12)), 0, 0);
                CC_SETHIDE(false);
            };
            CC_CREATE(int17, 4, int0);
            CC_SETSIZE(45, 50, 0, 0);
            CC_SETPOSITION((2 + (int5 * int13)), (1 + (int6 * int12)), 0, 0);
            CC_SETOP(1, "Value");
            CC_SETOPBASE(string0);
            if ((STRING_LENGTH(string1) > 0)) {
                script14990(0, string1);
            };
            if ((int7 == 1)) {
                CC_SETOP(2, "Swap-1");
                CC_SETOP(3, "Swap-5");
                CC_SETOP(4, "Swap-10");
                CC_SETOP(5, "Swap-X");
                CC_SETOP(6, "Swap-All");
            };
            CC_CREATE(int15, 4, IF_GETNEXTSUBID(int15));
            CC_SETCOLOUR(16777215);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETTEXT(script940(MAX(1, int14)));
            CC_SETSIZE(45, 20, 0, 0);
            CC_SETPOSITION((2 + (int5 * int13)), (35 + (int6 * int12)), 0, 0);
            int5 = (int5 + 1);
            if ((int7 == 1)) {
                int1 = int5;
                int2 = int6;
            } else {
                int3 = int5;
                int4 = int6;
            };
        };
        int0 = (int0 + 1);
    };
    IF_SETPOSITION(0, 25, 0, 0, comp(45, 2));  // wolf_shard_swap:not_found
    if (((int1 > 0) || (int2 >= 1))) {
        IF_SETPOSITION(0, (((int2 * int12) + int12) + 40), 0, 0, comp(45, 2));  // wolf_shard_swap:not_found
        IF_SETPOSITION(0, 20, 0, 0, comp(45, 1));  // wolf_shard_swap:found
        CC_CREATE(comp(45, 0), 4, IF_GETNEXTSUBID(comp(45, 0)));  // wolf_shard_swap:scrolling_layer
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXTFONT(57 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXT("Able to swap for shards");
        CC_SETSIZE(0, 15, 1, 0);
        CC_SETPOSITION(5, 1, 0, 0);
        CC_CREATE(comp(45, 0), 4, IF_GETNEXTSUBID(comp(45, 0)));  // wolf_shard_swap:scrolling_layer
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXTFONT(57 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXT("Not able to swap");
        CC_SETSIZE(0, 15, 1, 0);
        CC_SETPOSITION(5, (((int2 * int12) + int12) + 20), 0, 0);
        IF_SETSCROLLSIZE(0, ((((int2 + int4) * int12) + (int12 * 3)) - 20), comp(45, 0));  // wolf_shard_swap:scrolling_layer
    } else {
        CC_CREATE(comp(45, 0), 4, IF_GETNEXTSUBID(comp(45, 0)));  // wolf_shard_swap:scrolling_layer
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXTFONT(57 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXT("Not able to swap");
        CC_SETSIZE(0, 20, 1, 0);
        CC_SETPOSITION(5, 1, 0, 0);
        IF_SETSCROLLSIZE(0, ((((int2 + int4) * int12) + int12) + 20), comp(45, 0));  // wolf_shard_swap:scrolling_layer
    };
    script7791(2949136, 2949120);
    return;
}