//
function script9631(int0: component, int1: int, int2: int): void {
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = int1;
    while ((int6 == 0)) {
        if (((int3 == int4) || (int3 == int5))) {
            int7 = (int7 + 5);
            if ((CC_FIND(int0, int7) == 1)) {
                if ((cc_getparam(4032) != -1)) {
                    if ((cc_getparam(4032) == 1)) {
                        if ((cc_getparam(4033) != 1)) {
                            int3 = (int3 + 1);
                            if ((CC_GETGRAPHIC() == 20326 as graphic)) {
                                int4 = (int4 + 1);
                            } else if ((CC_GETGRAPHIC() == 20268 as graphic)) {
                                int5 = (int5 + 1);
                            };
                        };
                    } else if ((cc_getparam(4032) == 0)) {
                        int6 = 1;
                    };
                };
            } else {
                int6 = 1;
            };
        };
    };
    int7 = int1;
    int6 = 0;
    while ((int6 == 0)) {
        if (((int3 == int4) || (int3 == int5))) {
            if ((--int7 < 0)) {
                int6 = 1;
            } else if ((CC_FIND(int0, int7) == 1)) {
                if ((cc_getparam(4032) != -1)) {
                    if ((cc_getparam(4032) == 1)) {
                        if ((cc_getparam(4033) != 1)) {
                            int3 = (int3 + 1);
                            if ((CC_GETGRAPHIC() == 20326 as graphic)) {
                                int4 = (int4 + 1);
                            } else if ((CC_GETGRAPHIC() == 20268 as graphic)) {
                                int5 = (int5 + 1);
                            };
                        };
                    } else if ((cc_getparam(4032) == 0)) {
                        if ((((int3 == int4) && (int2 == 2)) || (((int3 > 0) && (int3 == int4)) && (int2 == 0)))) {
                            CC_SETGRAPHIC(20328 as graphic);
                        } else if ((((int3 == int5) && (int2 == 2)) || (((int3 > 0) && (int3 == int5)) && (int2 == 1)))) {
                            CC_SETGRAPHIC(20328 as graphic);
                        } else if (((int3 == int4) && (int2 == 1))) {
                            CC_SETGRAPHIC(20326 as graphic);
                        } else if (((int3 == int5) && (int2 == 0))) {
                            CC_SETGRAPHIC(20268 as graphic);
                        };
                        int6 = 1;
                    };
                };
            } else {
                int6 = 1;
            };
        };
    };
    return;
}