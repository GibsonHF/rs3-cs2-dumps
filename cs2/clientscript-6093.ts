//
function script6093(int0: inv): void {
    var int1 = comp(1265, 20);
    var int2 = comp(1265, 24);
    var int3 = comp(1265, 21);
    var int4 = comp(1265, 22);
    if ((int0 == varplayer_305)) {
        int1 = comp(1265, 14);
        int2 = comp(1265, 17);
        int3 = comp(1265, 15);
        int4 = comp(-1, 65535);
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as obj;
    var int8 = 0;
    while ((int5 < INV_SIZE(int0))) {
        int7 = INV_GETOBJ(int0, int5);
        int8 = INV_GETNUM(int0, int5);
        if ((int7 != -1 as obj)) {
            if ((CC_FIND(int1, int5) == 1)) {
                CC_SETOP(1, "Info");
                if ((int0 == varplayer_305)) {
                    CC_SETONOP(callback(script6105, varplayer_305, int5));
                    if ((int8 > 0)) {
                        CC_SETOP(2, "Take 1");
                    };
                    if ((int8 >= 5)) {
                        CC_SETOP(3, "Take 5");
                    };
                    if ((int7 == 36 as obj)) {
                        CC_SETOP(3, "Take 4");
                    };
                    if ((int8 >= 10)) {
                        CC_SETOP(4, "Take 10");
                    };
                    if ((int8 >= 50)) {
                        CC_SETOP(5, "Take 50");
                    };
                    if ((int8 >= 500)) {
                        CC_SETOP(6, "Take 500");
                    };
                    if ((int8 > 1)) {
                        CC_SETOP(7, "Take All");
                    };
                } else if ((int0 == 93 as inv)) {
                    CC_SETONOP(callback(script6105, 93, int5));
                    if ((int8 > 0)) {
                        CC_SETOP(2, "Sell 1");
                    };
                    if ((int8 >= 5)) {
                        CC_SETOP(3, "Sell 5");
                    };
                    if ((int7 == 36 as obj)) {
                        CC_SETOP(3, "Sell 4");
                    };
                    if ((int8 >= 10)) {
                        CC_SETOP(4, "Sell 10");
                    };
                    if ((int8 >= 50)) {
                        CC_SETOP(5, "Sell 50");
                    };
                    if ((int8 >= 500)) {
                        CC_SETOP(6, "Sell 500");
                    };
                    if ((int8 > 1)) {
                        CC_SETOP(7, "Sell All");
                    };
                } else {
                    CC_SETONOP(callback(script6105, varplayer_304, int5));
                    if ((int8 > 0)) {
                        CC_SETOP(2, "Buy 1");
                    };
                    if ((int8 >= 5)) {
                        CC_SETOP(3, "Buy 5");
                    };
                    if ((int7 == 36 as obj)) {
                        CC_SETOP(3, "Buy 4");
                    };
                    if ((int8 >= 10)) {
                        CC_SETOP(4, "Buy 10");
                    };
                    if ((int8 >= 50)) {
                        CC_SETOP(5, "Buy 50");
                    };
                    if ((int8 >= 500)) {
                        CC_SETOP(6, "Buy 500");
                    };
                    if ((int8 > 1)) {
                        CC_SETOP(7, "Buy All");
                    };
                };
            };
            if (((CC_FIND(int2, int5) == 1) && (CC_GETINVOBJECT() == int7))) {
                if ((OC_UNCERT(int7) == 1391 as obj)) {
                    switch (int0) {
                        case 600: {
                            CC_SETOBJECT_ALWAYSNUM(int7, script2002());
                            break;
                        }
                        case 744: {
                            if ((script12952() == 1)) {
                                CC_SETOBJECT_ALWAYSNUM(int7, (31 - varbitplayer_26602));
                            } else {
                                CC_SETOBJECT_ALWAYSNUM(int7, (16 - varbitplayer_26602));
                            };
                            break;
                        }
                        case 734: {
                            if ((script12952() == 1)) {
                                CC_SETOBJECT_ALWAYSNUM(int7, (31 - varbitplayer_30004));
                            } else {
                                CC_SETOBJECT_ALWAYSNUM(int7, (16 - varbitplayer_30004));
                            };
                            break;
                        }
                        case 418:
                        case 419: {
                            if ((script12952() == 1)) {
                                CC_SETOBJECT_ALWAYSNUM(int7, (40 - varbitplayer_30113));
                            } else {
                                CC_SETOBJECT_ALWAYSNUM(int7, (20 - varbitplayer_30113));
                            };
                            break;
                        }
                        default: {
                            CC_SETOBJECT_ALWAYSNUM(int7, INV_GETNUM(int0, int5));
                            break;
                        }
                    };
                } else {
                    CC_SETOBJECT_ALWAYSNUM(int7, INV_GETNUM(int0, int5));
                };
            };
            if ((CC_FIND(int3, int5) == 1)) {
                int6 = script2720(int7);
                if ((varplayer_303 == 1)) {
                    if ((TESTBIT(varclient_1879, int5) == 0)) {
                        int6 = -1;
                    } else {
                        int6 = script6077(varplayer_306, int7, varplayer_304);
                    };
                };
                if ((int6 == -1)) {
                    CC_SETTEXT("N/A");
                } else if ((int0 == varplayer_305)) {
                    CC_SETTEXT("Free!");
                } else {
                    CC_SETTEXT(script940(int6));
                };
            };
            if (((int4 != comp(-1, 65535)) && (CC_FIND(int4, int5) == 1))) {
                if (((varplayer_303 == 1) && (int6 == -1))) {
                    CC_SETGRAPHIC(2180 as graphic);
                } else {
                    CC_SETGRAPHIC(enum_getvalue(0, 23, 200 as cs2enum, varplayer_306));
                };
            };
        } else if (((CC_FIND(int1, int5) == 1) && (CC_GETGRAPHIC() != -1 as graphic))) {
            script6087(varplayer_304, varplayer_305, varplayer_303, varbitplayer_987);
            if ((varplayer_301 == int5)) {
                script6107();
            };
            return;
        };
        int5 = (int5 + 1);
    };
    return;
}