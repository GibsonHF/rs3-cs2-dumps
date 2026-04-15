//
function script9214(int0: obj, int1: inv, int2: int, int3: unknown_int): void {
    if ((enum_getvalue(33, 1, 15589 as cs2enum, int0) == true)) {
        printmessage("You can't wear this item.");
        return;
    };
    if ((script3848(int0, int1) != 0)) {
        return;
    };
    if ((script925(int0) == 0)) {
        return;
    };
    var int4 = OC_WEARPOS(int0);
    if ((int4 == -1)) {
        printmessage("You can't wear this item.");
        return;
    };
    if ((int4 == 17)) {
        int4 = 17;
    };
    var int5 = INV_GETOBJ(94 as inv, int4);
    if ((int5 == int0)) {
        if ((OC_STACKABLE(int0) == 0)) {
            return;
        };
        int5 = -1 as obj;
    };
    if ((int5 != -1 as obj)) {
        if ((int5 == int0)) {
            if ((OC_STACKABLE(int0) == 0)) {
                return;
            };
            int5 = -1 as obj;
        } else if ((script9224(int5, int0) == 1)) {
            return;
        };
    };
    var int6 = 0;
    var int7 = -1 as obj;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    if ((int0 != -1 as obj)) {
        int8 = MIN((2147483647 - INV_TOTAL(94 as inv, int0)), INV_TOTAL(int1, int0));
    };
    if ((int5 != -1 as obj)) {
        int9 = MIN((2147483647 - INV_TOTAL(int1, int5)), INV_TOTAL(94 as inv, int5));
        if ((int9 < INV_TOTAL(94 as inv, int5))) {
            return;
        };
    };
    if ((OC_WEARPOS(int0) == 5)) {
        int7 = INV_GETOBJ(94 as inv, 3);
        if ((int7 != -1 as obj)) {
            if ((OC_WEARPOS2(int7) == 5)) {
                int10 = MIN((2147483647 - INV_TOTAL(int1, int7)), INV_TOTAL(94 as inv, int7));
                int6 = 3;
            } else {
                int7 = -1 as obj;
            };
        };
    } else if ((OC_WEARPOS2(int0) == 5)) {
        int7 = INV_GETOBJ(94 as inv, 5);
        if ((int7 != -1 as obj)) {
            int10 = MIN((2147483647 - INV_TOTAL(int1, int7)), INV_TOTAL(94 as inv, int7));
            if ((int7 == int0)) {
                if ((int10 < INV_TOTAL(94 as inv, int7))) {
                    return;
                };
                int7 = -1 as obj;
            } else {
                int6 = 5;
            };
        };
    };
    if ((script3847(int5, int7, int0, int1) == 0)) {
        return;
    };
    if ((int1 == 93 as inv)) {
        script9215(int4, int2);
    } else if ((int1 == 95 as inv)) {
        script3968(int0, INV_TOTAL(int1, int0), int2, 94 as inv, int4);
    };
    var int11 = -1;
    var int12 = -1;
    if ((int6 > 0)) {
        if ((int1 == 93 as inv)) {
            if ((int5 != -1 as obj)) {
                int11 = script9249(93 as inv);
            } else {
                int11 = int2;
            };
            script9215(int6, int11);
        } else if ((int1 == 95 as inv)) {
            if ((varbitplayer_45141 <= 1)) {
                int11 = script14295();
            } else {
                [int12, int11] = script5787(script14372(varbitplayer_45141));
            };
            script2295(94 as inv, int7, INV_GETNUM(94 as inv, int6), int6, 1, 1);
        };
    };
    return;
}