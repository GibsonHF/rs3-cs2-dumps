//
function script6492(): void {
    if ((varplayer_1442 == -1 as struct)) {
        return;
    };
    var int0 = -1 as struct;
    var int1 = 0;
    var int2 = comp(-1, 65535);
    var string0 = "";
    var int3 = 0;
    while ((int1 < ENUM_GETOUTPUTCOUNT(5994 as cs2enum))) {
        int2 = enum_getvalue(0, 9, 5994 as cs2enum, int1);
        if ((int2 != comp(-1, 65535))) {
            if ((int1 == 0)) {
                int0 = struct_getparam(varplayer_1442, 2483);
            } else if ((int1 == 1)) {
                int0 = struct_getparam(varplayer_1442, 2484);
            } else if ((int1 == 2)) {
                int0 = struct_getparam(varplayer_1442, 2485);
            } else if ((int1 == 3)) {
                int0 = struct_getparam(varplayer_1442, 2486);
            } else if ((int1 == 4)) {
                int0 = struct_getparam(varplayer_1442, 2487);
            } else if ((int1 == 5)) {
                int0 = struct_getparam(varplayer_1442, 2488);
            } else if ((int1 == 6)) {
                int0 = struct_getparam(varplayer_1442, 2489);
            } else if ((int1 == 7)) {
                int0 = struct_getparam(varplayer_1442, 2490);
            } else if ((int1 == 8)) {
                int0 = struct_getparam(varplayer_1442, 2491);
            } else if ((int1 == 9)) {
                int0 = struct_getparam(varplayer_1442, 2492);
            } else if ((int1 == 10)) {
                int0 = struct_getparam(varplayer_1442, 2493);
            } else if ((int1 == 11)) {
                int0 = struct_getparam(varplayer_1442, 2494);
            } else if ((int1 == 12)) {
                int0 = struct_getparam(varplayer_1442, 2495);
            } else if ((int1 == 13)) {
                int0 = struct_getparam(varplayer_1442, 2496);
            } else if ((int1 == 14)) {
                int0 = struct_getparam(varplayer_1442, 2497);
            } else if ((int1 == 15)) {
                int0 = struct_getparam(varplayer_1442, 2498);
            } else if ((int1 == 16)) {
                int0 = struct_getparam(varplayer_1442, 9060);
            };
            if ((int0 != -1 as struct)) {
                CC_CREATE(int2, 3, int3);
                CC_SETPOSITION(2, 2, 0, 0);
                CC_SETSIZE(2, 2, 1, 1);
                CC_SETCOLOUR(struct_getparam(int0, 2502));
                CC_SETFILL(1);
                int3 = (int3 + 1);
                if ((varbitplayer_4287 == int1)) {
                    CC_CREATE(int2, 3, int3);
                    CC_SETPOSITION(2, 2, 0, 0);
                    CC_SETSIZE(5, 5, 1, 1);
                    CC_SETCOLOUR(3814187);
                    CC_SETFILL(0);
                    int3 = (int3 + 1);
                };
                CC_CREATE(int2, 5, int3);
                CC_SETPOSITION(0, 0, 0, 0);
                CC_SETSIZE(20, 20, 0, 0);
                int3 = (int3 + 1);
                if ((varbitplayer_4286 == int1)) {
                    CC_SETGRAPHIC(2289 as graphic);
                    string0 = "This is the current colour for the set.";
                } else {
                    CC_SETGRAPHIC(2288 as graphic);
                    string0 = "Recolour the item you currently have selected to this colour.";
                };
                if (((varbitplayer_4287 == int1) && (varbitplayer_4286 != int1))) {
                    string0 = "This is your original colour for the set.";
                };
                script14990(0, string0);
                int0 = -1 as struct;
                int3 = 0;
            };
            int2 = comp(-1, 65535);
        };
        int1 = (int1 + 1);
    };
    return;
}