//
function script4688(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = -1;
    var int5 = -1;
    var int6 = comp(-1, 65535);
    var int7 = 1;
    while ((int7 < 5)) {
        switch (int7) {
            case 1: {
                int6 = comp(551, 7);
                int0 = varclient_1549;
                int1 = enum_getvalue(0, 0, 3856 as cs2enum, int7);
                int2 = comp(551, 6);
                int3 = comp(551, 8);
                int4 = 36110340;
                int5 = 36110341;
                break;
            }
            case 2: {
                int6 = comp(551, 15);
                int0 = varclient_1550;
                int1 = enum_getvalue(0, 0, 3856 as cs2enum, int7);
                int2 = comp(551, 14);
                int3 = comp(551, 16);
                int4 = 36110348;
                int5 = 36110349;
                break;
            }
            case 3: {
                int6 = comp(551, 23);
                int0 = varclient_1551;
                int1 = enum_getvalue(0, 0, 3856 as cs2enum, int7);
                int2 = comp(551, 22);
                int3 = comp(551, 24);
                int4 = 36110356;
                int5 = 36110357;
                break;
            }
            case 4: {
                int6 = comp(551, 32);
                int0 = varclient_1552;
                int1 = enum_getvalue(0, 0, 3856 as cs2enum, int7);
                int2 = comp(551, 31);
                int3 = comp(551, 33);
                int4 = 36110365;
                int5 = 36110366;
                break;
            }
            default: {
                return;
            }
        };
        if ((IF_FIND(int6) == 1)) {
            if ((int0 > 0)) {
                CC_SETHIDE(false);
                CC_SETFILL(1);
                CC_SETSIZE(CC_GETWIDTH(), ((int0 * 26) / 100), 0, 0);
            } else {
                CC_SETHIDE(true);
                CC_SETFILL(0);
                CC_SETSIZE(CC_GETWIDTH(), 26, 0, 0);
            };
        };
        if (((int0 > 0) || (varbitplayer_3918 < int1))) {
            IF_SETHIDE(false, int3);
        } else {
            IF_SETCOLOUR(0, int2);
            IF_SETHIDE(true, int3);
        };
        int7 = (int7 + 1);
    };
    IF_SETTEXT(`Morale: ${inttostring(varbitplayer_3918, 10)}`, comp(551, 28));
    return;
}