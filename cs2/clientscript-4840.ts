//
function script4840(): void {
    var int0 = 0;
    switch (varbitplayer_6981) {
        case 1: {
            int0 = varbitplayer_6986;
            break;
        }
        case 2: {
            int0 = varbitplayer_6995;
            break;
        }
        case 3: {
            int0 = varbitplayer_7004;
            break;
        }
    };
    if ((int0 == 0)) {
        return;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    [int1, int2, int3, int4, int5, int6] = script4841(varbitplayer_6981);
    var int10 = enum_getvalue(0, 23, 4286 as cs2enum, int1);
    var int11 = enum_getvalue(0, 23, 4286 as cs2enum, int3);
    var int12 = enum_getvalue(0, 23, 4286 as cs2enum, int5);
    switch (int0) {
        case 1: {
            if ((int2 > 0)) {
                IF_SETTEXT(inttostring(int2, 10), comp(1258, 486));
            } else {
                IF_SETTEXT("", comp(1258, 486));
            };
            int7 = comp(1258, 483);
            int8 = comp(1258, 484);
            int9 = comp(1258, 485);
            break;
        }
        case 2: {
            if ((int2 > 0)) {
                IF_SETTEXT(inttostring(int2, 10), comp(1258, 411));
            } else {
                IF_SETTEXT("", comp(1258, 411));
            };
            if ((int4 > 0)) {
                IF_SETTEXT(inttostring(int4, 10), comp(1258, 412));
            } else {
                IF_SETTEXT("", comp(1258, 412));
            };
            int7 = comp(1258, 408);
            int8 = comp(1258, 409);
            int9 = comp(1258, 410);
            break;
        }
        case 3: {
            if ((int2 > 0)) {
                IF_SETTEXT(inttostring(int2, 10), comp(1258, 330));
            } else {
                IF_SETTEXT("", comp(1258, 330));
            };
            if ((int4 > 0)) {
                IF_SETTEXT(inttostring(int4, 10), comp(1258, 332));
            } else {
                IF_SETTEXT("", comp(1258, 332));
            };
            if ((int6 > 0)) {
                IF_SETTEXT(inttostring(int6, 10), comp(1258, 331));
            } else {
                IF_SETTEXT("", comp(1258, 331));
            };
            int7 = comp(1258, 327);
            int8 = comp(1258, 328);
            int9 = comp(1258, 329);
            break;
        }
        default: {
            return;
        }
    };
    IF_SETGRAPHIC(int10, int7);
    IF_SETGRAPHIC(int11, int8);
    IF_SETGRAPHIC(int12, int9);
    return;
}