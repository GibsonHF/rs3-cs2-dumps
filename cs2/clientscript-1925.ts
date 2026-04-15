//
function script1925(int0: component, int1: int, int2: unknown_int, int3: int, int4: int, int5: struct): void {
    var int6 = 0;
    var int7 = (int4 + 1);
    var int8 = 2310 as graphic;
    var int9 = 2291 as graphic;
    var int10 = enum_getvalue(0, 73, 14536 as cs2enum, int3);
    if ((int2 == 0)) {
        switch (int3) {
            case 0: {
                int6 = (BITCOUNT(varplayer_8160) * 25);
                break;
            }
            case 1: {
                int6 = (BITCOUNT(varplayer_8161) * 25);
                break;
            }
            case 2: {
                int6 = (BITCOUNT(varplayer_8162) * 25);
                break;
            }
        };
        if ((CC_FIND(int0, (int1 + 1)) == 1)) {
            CC_SETTEXT(`${inttostring(int6, 10)} / ${inttostring(struct_getparam(int10, 7502), 10)}`);
        };
    } else if ((int2 == 1)) {
        switch (int3) {
            case 0: {
                if ((BITCOUNT(varplayer_8160) >= int7)) {
                    int8 = 2294 as graphic;
                };
                break;
            }
            case 1: {
                if ((BITCOUNT(varplayer_8161) >= int7)) {
                    int8 = 2294 as graphic;
                };
                break;
            }
            case 2: {
                if ((BITCOUNT(varplayer_8162) >= int7)) {
                    int8 = 2294 as graphic;
                };
                break;
            }
            case 3: {
                if ((struct_getparam(int5, 7504) < varplayer_1297)) {
                    int8 = 2294 as graphic;
                };
                break;
            }
        };
        if (((int3 == varbitplayer_42074) && (int4 <= varbitplayer_42075))) {
            int8 = 2294 as graphic;
        };
        if ((CC_FIND(int0, (int1 + 0)) == 1)) {
            CC_SETGRAPHIC(int8);
        };
    } else if ((int2 == 2)) {
        switch (int3) {
            case 0: {
                if ((BITCOUNT(varplayer_8160) >= int7)) {
                    int9 = 2290 as graphic;
                };
                break;
            }
            case 1: {
                if ((BITCOUNT(varplayer_8161) >= int7)) {
                    int9 = 2290 as graphic;
                };
                break;
            }
            case 2: {
                if ((BITCOUNT(varplayer_8162) >= int7)) {
                    int9 = 2290 as graphic;
                };
                break;
            }
            case 3: {
                if ((struct_getparam(int5, 7504) < varplayer_1297)) {
                    int9 = 2290 as graphic;
                };
                break;
            }
        };
        if ((int3 == varbitplayer_42074)) {
            if ((int4 < varbitplayer_42075)) {
                int9 = 2290 as graphic;
            } else if ((int4 == varbitplayer_42075)) {
                int9 = 2260 as graphic;
            };
        };
        if ((CC_FIND(int0, (int1 + 0)) == 1)) {
            CC_SETGRAPHIC(int9);
        };
    };
    return;
}