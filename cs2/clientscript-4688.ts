//
function script4688(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = 1;
    while ((int7 < 5)) {
        switch (int7) {
            case 1: {
                int6 = 36110343;
                int0 = varclient_1549;
                int1 = enum_getvalue(0, 0, 3856 as cs2enum, int7);
                int2 = 36110342;
                int3 = 36110344;
                int4 = 36110340;
                int5 = 36110341;
                break;
            }
            case 2: {
                int6 = 36110351;
                int0 = varclient_1550;
                int1 = enum_getvalue(0, 0, 3856 as cs2enum, int7);
                int2 = 36110350;
                int3 = 36110352;
                int4 = 36110348;
                int5 = 36110349;
                break;
            }
            case 3: {
                int6 = 36110359;
                int0 = varclient_1551;
                int1 = enum_getvalue(0, 0, 3856 as cs2enum, int7);
                int2 = 36110358;
                int3 = 36110360;
                int4 = 36110356;
                int5 = 36110357;
                break;
            }
            case 4: {
                int6 = 36110368;
                int0 = varclient_1552;
                int1 = enum_getvalue(0, 0, 3856 as cs2enum, int7);
                int2 = 36110367;
                int3 = 36110369;
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
                CC_SETHIDE(0);
                CC_SETFILL(1);
                CC_SETSIZE(CC_GETWIDTH(), ((int0 * 26) / 100), 0, 0);
            } else {
                CC_SETHIDE(1);
                CC_SETFILL(0);
                CC_SETSIZE(CC_GETWIDTH(), 26, 0, 0);
            };
        };
        if (((int0 > 0) || (varbitplayer_3918 < int1))) {
            IF_SETHIDE(0, int3);
        } else {
            IF_SETCOLOUR(0, int2);
            IF_SETHIDE(1, int3);
        };
        int7 = (int7 + 1);
    };
    IF_SETTEXT(`Morale: ${inttostring(varbitplayer_3918, 10)}`, 36110364);
    return;
}