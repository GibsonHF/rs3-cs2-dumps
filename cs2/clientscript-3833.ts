//
function script3833(int0: obj, int1: unknown_int): int {
    if ((int0 == -1 as obj)) {
        return 0;
    };
    if ((script7113(int0) == 0)) {
        return 0;
    };
    var int2 = script7112(int0);
    if ((int1 == 0)) {
        int2 = 0;
    };
    var int3 = item_getparam(int0, 2655);
    var int4 = script14490(int0, 1);
    var int5 = item_getparam(int0, 5456);
    var int6 = item_getparam(int0, 2675);
    var int7 = item_getparam(int0, 2686);
    var int8 = script15148(int0);
    var int9 = 1;
    var int10 = 0;
    var int11 = 0;
    var int12 = script18374(int0);
    var int13 = 1;
    var int14 = 0;
    var int15 = 0;
    var int16 = INV_TOTAL(93 as inv, int0);
    while ((int9 <= 10)) {
        [int3, int5, int4, int6, int7] = script2517(int0, int9);
        if ((int6 != -1 as struct)) {
            [int11, int10] = script7109(int0, int6, int12, int8, int2);
            int8 = MIN(int8, int11);
            if ((int10 == 0)) {
                int13 = 0;
                int14 = (int14 - 1);
            };
        } else if (((int3 != -1 as obj) && (int4 > 0))) {
            [int3, int5, int4] = script2734(int0, int3, int5, int4);
            int15 = script7115(int0, int4, int3, int5, int2);
            if ((OC_STACKABLE(int3) == 0)) {
                int13 = 0;
                int14 = (int14 - 1);
            };
            if ((int15 != -1)) {
                if ((int7 == false)) {
                    if ((((2147483647 - int15) - ((int4 * int12) - 1)) <= 0)) {
                        int8 = MIN(int8, ((int15 - int16) / ((int4 * int12) - 1)));
                    } else {
                        int8 = MIN(int8, ((int15 + ((int4 * int12) - 1)) / (int4 * int12)));
                    };
                } else {
                    int8 = MIN(int8, (int15 / int4));
                };
            };
        } else if ((((int6 == -1 as struct) && (int3 == -1 as obj)) && (int4 <= 0))) {
            int9 = 11;
        };
        if ((int8 == 0)) {
            return 0;
        };
        int9 = (int9 + 1);
    };
    var int17 = item_getparam(int0, 7764);
    if ((item_getparam(int0, 8878) == false)) {
        int17 = 0;
    };
    var int18 = OC_STACKABLE(int0);
    if ((((item_getparam(int0, 7801) > 0) && (int18 == 1)) && (int16 > 0))) {
        int16 = 0;
        int18 = 0;
    };
    if ((int17 == -1)) {
        int17 = script2628(int0);
    };
    if ((int17 <= 0)) {
        return int8;
    };
    var int19 = 0;
    var int20 = (int17 + int14);
    if ((int20 <= 0)) {
        if ((int18 == 1)) {
            if (((int16 > 0) && (int8 > (2147483647 - int16)))) {
                return (2147483647 - int16);
            };
        } else {
            int19 = script15390(int0);
        };
        if ((int17 <= 0)) {
            return int8;
        };
        return MIN((INV_SIZE(93 as inv) - int19), int8);
    };
    if ((int20 > 0)) {
        if ((int18 == 1)) {
            if ((int16 > 0)) {
                if ((int8 > (2147483647 - int16))) {
                    return (2147483647 - int16);
                };
                return int8;
            };
            if ((INV_FREESPACE(93 as inv) >= int17)) {
                return int8;
            };
            return 0;
        };
        if ((int13 == 1)) {
            return MIN(int8, (INV_FREESPACE(93 as inv) / int20));
        };
        return MIN(int8, (INV_SIZE(93 as inv) / int20));
    };
    return 0;
}