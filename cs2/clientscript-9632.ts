//
function script9632(int0: component, int1: component, int2: int, int3: int): void {
    var int4 = int2;
    var int5 = 0;
    var int6 = -1;
    var int7 = -1;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    if ((CC_FIND[1](int0, (int2 + 2)) == 1)) {
        if ((CC_GETGRAPHIC[1]() == 20263 as graphic)) {
            CC_SETGRAPHIC[1](18975 as graphic);
            int7 = 0;
        } else if ((CC_GETGRAPHIC[1]() == 18975 as graphic)) {
            CC_SETGRAPHIC[1](20263 as graphic);
            int7 = 1;
        };
        script9641(int3);
        if ((CC_FIND(int0, int2) == 1)) {
            int6 = cc_getparam(4032);
            if ((int6 != -1)) {
                while ((int5 == 0)) {
                    int4 = (int4 + 5);
                    if ((CC_FIND(int0, int4) == 1)) {
                        if ((int9 == 1)) {
                            script9634(int0, int4, int8);
                        } else if ((int7 == 0)) {
                            if ((cc_getparam(4032) != -1)) {
                                if ((cc_getparam(4032) <= int6)) {
                                    int9 = 1;
                                    script9634(int0, int4, int8);
                                } else if ((CC_GETHIDE() == false)) {
                                    int8 = script9633(int0, int4, int8, true);
                                } else if ((CC_GETHEIGHT() != 0)) {
                                    script9634(int0, int4, int8);
                                };
                            } else if ((CC_GETHIDE() == false)) {
                                int8 = script9633(int0, int4, int8, true);
                            } else {
                                script9634(int0, int4, int8);
                            };
                        } else if ((int7 == 1)) {
                            if ((cc_getparam(4032) != -1)) {
                                if ((cc_getparam(4032) <= int6)) {
                                    int9 = 1;
                                    script9634(int0, int4, int8);
                                } else if ((CC_GETHEIGHT() == 0)) {
                                    int10 = 0;
                                } else if ((CC_GETHIDE() == true)) {
                                    int8 = script9633(int0, int4, int8, false);
                                    if ((CC_FIND(int0, (int4 + 2)) == 1)) {
                                        if ((CC_GETGRAPHIC() == 18975 as graphic)) {
                                            int10 = 1;
                                        } else {
                                            int10 = 0;
                                        };
                                    };
                                } else {
                                    script9634(int0, int4, int8);
                                };
                            } else if ((int10 == 0)) {
                                if ((CC_GETHIDE() == true)) {
                                    int8 = script9633(int0, int4, int8, false);
                                } else {
                                    script9634(int0, int4, int8);
                                };
                            } else {
                                script9634(int0, int4, int8);
                            };
                        };
                    } else {
                        int5 = 1;
                    };
                };
            };
        };
    };
    IF_SETSCROLLSIZE(0, (IF_GETSCROLLHEIGHT(int0) + int8), int0);
    script9622(int0, int1);
    return;
}