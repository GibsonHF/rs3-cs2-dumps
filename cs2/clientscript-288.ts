//[clientscript,worldmap_flashelementcategory]
function script288(int0: unknown_int, int1: component, int2: int, int3: unknown_int): void {
    var int4 = -1;
    var int5 = int2;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = -1;
    var int11 = -1;
    if ((CC_FIND(int1, int2) == 1)) {
        int4 = script9635(cc_getparam(3430));
        script9628(int1, int2, -1);
        if ((int3 == 1)) {
            while ((int9 == 0)) {
                if (((int6 == int7) || (int6 == int8))) {
                    int5 = (int5 + 5);
                    if ((CC_FIND(int1, int5) == 1)) {
                        if ((cc_getparam(4032) != -1)) {
                            int9 = 1;
                        } else {
                            int10 = cc_getparam(3430);
                            if ((int10 != -1)) {
                                int6 = (int6 + 1);
                                if ((script9635(int10) == 1)) {
                                    int7 = (int7 + 1);
                                } else {
                                    int8 = (int8 + 1);
                                };
                            };
                        };
                    } else {
                        int9 = 1;
                    };
                };
            };
            int5 = int2;
            int9 = 0;
            while ((int9 == 0)) {
                if (((int6 == int7) || (int6 == int8))) {
                    if ((--int5 < 0)) {
                        int9 = 1;
                    } else if ((CC_FIND(int1, int5) == 1)) {
                        if ((cc_getparam(4032) != -1)) {
                            if (((int6 > 0) && (((int6 == int7) && (int4 == 1)) || ((int6 == int8) && (int4 == 0))))) {
                                CC_SETGRAPHIC(20328 as graphic);
                                int11 = 2;
                            } else if (((int6 == int7) && (int4 == 0))) {
                                CC_SETGRAPHIC(20326 as graphic);
                                int11 = 1;
                            } else if (((int6 == int8) && (int4 == 1))) {
                                CC_SETGRAPHIC(20268 as graphic);
                                int11 = 0;
                            };
                            if (((int11 != -1) && (cc_getparam(4032) == 1))) {
                                script9631(int1, int5, int11);
                            };
                            int9 = 1;
                        } else {
                            int10 = cc_getparam(3430);
                            if ((int10 != -1)) {
                                int6 = (int6 + 1);
                                if ((script9635(int10) == 1)) {
                                    int7 = (int7 + 1);
                                } else {
                                    int8 = (int8 + 1);
                                };
                            };
                        };
                    } else {
                        int9 = 1;
                    };
                };
            };
        };
    };
    return;
}