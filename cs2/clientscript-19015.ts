//
function script19015(int0: int): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = -1 as graphic;
    var int4 = -1 as graphic;
    var int5 = -1 as graphic;
    var int6 = script16161();
    if ((CC_FIND(comp(1870, 18), int0) == 1)) {
        switch (int6) {
            case 1515: {
                int4 = 30449 as graphic;
                break;
            }
            case 40380: {
                int4 = 28162 as graphic;
                int1 = script6954(int0);
                if ((int1 != 0)) {
                    int5 = enum_getvalue(0, 23, 16540 as cs2enum, int1);
                };
                break;
            }
            case 7229: {
                int4 = 30449 as graphic;
                int2 = script6397(int0);
                if ((int2 != 0)) {
                    int5 = enum_getvalue(0, 23, 15149 as cs2enum, int2);
                };
                break;
            }
            case 44604: {
                int4 = 12016 as graphic;
                int2 = script2662(int0);
                if ((int2 != 0)) {
                    int5 = enum_getvalue(0, 23, 1651 as cs2enum, int2);
                };
                break;
            }
            case 49941: {
                [int4, int3, int3] = script18988(int0);
                int2 = script18987(int0);
                if ((int2 != 0)) {
                    int5 = enum_getvalue(0, 23, 1651 as cs2enum, int2);
                };
                break;
            }
        };
        switch (script18993(int0)) {
            case 0: {
                CC_SETGRAPHIC(int5);
                break;
            }
            case 1: {
                CC_SETGRAPHIC(int4);
                if ((CC_FIND[1](comp(1870, 17), int0) == 1)) {
                    CC_SETGRAPHIC[1](-1 as graphic);
                    CC_SETONMOUSEOVER[1](callback());
                    CC_SETONMOUSELEAVE[1](callback());
                };
                break;
            }
            case 2: {
                CC_SETGRAPHIC(enum_getvalue(0, 23, 12585 as cs2enum, script5875(int0)));
                CC_SETONMOUSEOVER(callback());
                break;
            }
        };
    };
    return;
}