//
function script6999(int0: unknown_int): void {
    if (((int0 == 1) && (script792() == 1))) {
        return;
    };
    var int1 = -1 as cs2enum;
    var int2 = -1 as struct;
    var int3 = comp(-1, 65535);
    var int4 = 1;
    var int5 = -1 as obj;
    var int6 = 0;
    var int7 = 0;
    var int8 = comp(-1, 65535);
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = -1;
    var int15 = 0;
    var int16 = -1;
    var int17 = -1;
    if ((int0 == 1)) {
        if ((varclient_5066 != 1)) {
            while ((int4 <= 70)) {
                int1 = -1 as cs2enum;
                int2 = -1 as struct;
                int5 = -1 as obj;
                switch (((int4 - 1) / 14)) {
                    case 0: {
                        [int14, int15] = [1430, int4];
                        break;
                    }
                    case 1: {
                        [int14, int15] = [1670, (int4 - 14)];
                        break;
                    }
                    case 2: {
                        [int14, int15] = [1671, (int4 - (2 * 14))];
                        break;
                    }
                    case 3: {
                        [int14, int15] = [1672, (int4 - (3 * 14))];
                        break;
                    }
                    case 4: {
                        [int14, int15] = [1673, (int4 - (4 * 14))];
                        break;
                    }
                };
                int3 = script7974(int14, int15);
                int8 = script7977(int14, int15);
                [int6, int7, int5] = script11795(int14, int15);
                if ((int6 == 14)) {
                    int5 = INV_GETOBJ(94 as inv, int7);
                };
                [int9, int10] = script8825(5, int4);
                if ((IF_FIND(int3) == 1)) {
                    script7033();
                    if (((int5 != -1 as obj) || (int6 >= 1))) {
                        switch (int6) {
                            case 1: {
                                int1 = 10147 as cs2enum;
                                break;
                            }
                            case 5: {
                                int1 = 6738 as cs2enum;
                                break;
                            }
                            case 6: {
                                int1 = 6740 as cs2enum;
                                break;
                            }
                            case 17: {
                                int1 = 16973 as cs2enum;
                                break;
                            }
                            case 3: {
                                int1 = 6736 as cs2enum;
                                break;
                            }
                            case 4: {
                                int1 = 6737 as cs2enum;
                                break;
                            }
                            case 7: {
                                int1 = 6739 as cs2enum;
                                break;
                            }
                            case 13: {
                                int2 = 14724 as struct;
                                break;
                            }
                            case 11: {
                                int1 = 13200 as cs2enum;
                                break;
                            }
                        };
                        if ((int1 != -1 as cs2enum)) {
                            int2 = enum_getvalue(0, 73, int1, int7);
                        };
                        int11 = 0;
                        if (((int2 != -1 as struct) && (struct_getparam(int2, 2875) == 1))) {
                            int11 = 1;
                        };
                        if (((int6 == 13) && (varbitplayer_6068 != 1))) {
                            int11 = 0;
                        };
                        if ((int5 != -1 as obj)) {
                            [int5, int17, int16] = script196(int5);
                            int13 = script7000(int5, int16, int7);
                        } else {
                            int13 = 1;
                        };
                        if ((((int5 != -1 as obj) && (item_getparam(int5, 3921) == 1)) && ((int13 > 3) || (script16476() == 1)))) {
                            int11 = 1;
                        };
                        if ((script792() == 0)) {
                            if ((int11 == 0)) {
                                CC_SETOPKEY(int13, int9, int10, -1, 0, -1, 0, -1, 0, -1, 0);
                                if ((int5 != -1 as obj)) {
                                    CC_SETOPKEYRATE(int13, 6, 50);
                                };
                            } else {
                                script3898(int9, int10, int3, -1);
                            };
                            if ((CC_GETCOLOUR() == 3355443)) {
                                script7968(int8, 0);
                            } else {
                                script7968(int8, 1);
                            };
                        } else {
                            script7968(int8, 0);
                        };
                    };
                };
                int4 = (int4 + 1);
            };
        };
        script8844(6, script8825(5, 71), comp(1430, 259), -1);
        script8844(7, script8825(5, 72), comp(1430, 259), -1);
        script8844(8, script8825(5, 73), comp(1430, 259), -1);
        script8844(9, script8825(5, 74), comp(1430, 259), -1);
        script8844(10, script8825(5, 75), comp(1430, 259), -1);
        script8844(6, script8825(5, 76), comp(1430, 258), -1);
        script8844(7, script8825(5, 77), comp(1430, 258), -1);
        script8844(8, script8825(5, 78), comp(1430, 258), -1);
        script8844(9, script8825(5, 79), comp(1430, 258), -1);
        script8844(10, script8825(5, 80), comp(1430, 258), -1);
        script8844(6, script8825(5, 93), comp(1430, 257), -1);
        script8844(7, script8825(5, 94), comp(1430, 257), -1);
        script8844(8, script8825(5, 95), comp(1430, 257), -1);
        script8844(9, script8825(5, 97), comp(1430, 257), -1);
        script8844(10, script8825(5, 98), comp(1430, 257), -1);
        script8844(6, script8825(5, 99), comp(1430, 256), -1);
        script8844(7, script8825(5, 100), comp(1430, 256), -1);
        script8844(8, script8825(5, 101), comp(1430, 256), -1);
        script8844(1, script8825(5, 82), comp(1430, 265), -1);
        script8844(1, script8825(5, 81), comp(1430, 264), -1);
        if ((CC_FIND(comp(1477, 71), 1) == 1)) {
            script8844(2, script8825(5, 83), comp(1477, 71), 1);
        } else {
            IF_SETONTIMER(callback(script7967, 96796743, 1, -2147483645), 93716740);
        };
        script8844(1, script8825(5, 85), comp(1430, 11), -1);
        script8844(1, script8825(5, 85), comp(1504, 2), -1);
        script8844(1, script8825(5, 84), comp(1430, 16), -1);
        script8844(1, script8825(5, 84), comp(1505, 2), -1);
        script8844(1, script8825(5, 87), comp(1430, 57), -1);
        script8844(2, script8825(5, 87), comp(1616, 10), -1);
        script8844(1, script8825(5, 88), comp(1430, 55), -1);
        script8844(1, script8825(5, 88), comp(1616, 10), -1);
        if (((varbitplayer_6068 == 1) && (script340() == 1))) {
            IF_SETOPKEY(1, 0, 0, script8082());
            script8845(script8825(5, 86), script8082(), -1);
        } else {
            unk11165(0, 0, script8082());
            script8844(1, script8825(5, 86), script8082(), -1);
        };
        script8844(1, script8825(5, 91), comp(1430, 3), -1);
        script8844(1, script8825(5, 91), comp(1616, 16), -1);
        script8844(2, script8825(5, 90), comp(1430, 3), -1);
        script8844(2, script8825(5, 90), comp(1616, 16), -1);
        script8845(script8825(5, 92), comp(1430, 2), -1);
        script8845(script8825(5, 92), comp(1616, 15), -1);
    } else {
        if ((varclient_5066 != 1)) {
            while ((int4 <= 70)) {
                switch (((int4 - 1) / 14)) {
                    case 0: {
                        [int14, int15] = [1430, int4];
                        break;
                    }
                    case 1: {
                        [int14, int15] = [1670, (int4 - 14)];
                        break;
                    }
                    case 2: {
                        [int14, int15] = [1671, (int4 - (2 * 14))];
                        break;
                    }
                    case 3: {
                        [int14, int15] = [1672, (int4 - (3 * 14))];
                        break;
                    }
                    case 4: {
                        [int14, int15] = [1673, (int4 - (4 * 14))];
                        break;
                    }
                };
                int3 = script7974(int14, int15);
                int8 = script7977(int14, int15);
                if (((int3 != comp(-1, 65535)) && (IF_FIND(int3) == 1))) {
                    script7033();
                };
                if ((int8 != comp(-1, 65535))) {
                    script7968(int8, 0);
                };
                int4 = (int4 + 1);
            };
        };
        IF_SETOPKEY(6, 0, 0, comp(1430, 259));
        IF_SETOPKEY(7, 0, 0, comp(1430, 259));
        IF_SETOPKEY(8, 0, 0, comp(1430, 259));
        IF_SETOPKEY(9, 0, 0, comp(1430, 259));
        IF_SETOPKEY(10, 0, 0, comp(1430, 259));
        IF_SETOPKEY(6, 0, 0, comp(1430, 258));
        IF_SETOPKEY(7, 0, 0, comp(1430, 258));
        IF_SETOPKEY(8, 0, 0, comp(1430, 258));
        IF_SETOPKEY(9, 0, 0, comp(1430, 258));
        IF_SETOPKEY(10, 0, 0, comp(1430, 258));
        IF_SETOPKEY(6, 0, 0, comp(1430, 257));
        IF_SETOPKEY(7, 0, 0, comp(1430, 257));
        IF_SETOPKEY(8, 0, 0, comp(1430, 257));
        IF_SETOPKEY(9, 0, 0, comp(1430, 257));
        IF_SETOPKEY(10, 0, 0, comp(1430, 257));
        IF_SETOPKEY(6, 0, 0, comp(1430, 256));
        IF_SETOPKEY(7, 0, 0, comp(1430, 256));
        IF_SETOPKEY(8, 0, 0, comp(1430, 256));
        IF_SETOPKEY(1, 0, 0, comp(1430, 260));
        IF_SETOPKEY(2, 0, 0, comp(1430, 260));
        IF_SETOPKEY(3, 0, 0, comp(1430, 260));
        IF_SETOPKEY(4, 0, 0, comp(1430, 260));
        IF_SETOPKEY(5, 0, 0, comp(1430, 260));
        IF_SETOPKEY(6, 0, 0, comp(1430, 260));
        IF_SETOPKEY(7, 0, 0, comp(1430, 260));
        IF_SETOPKEY(8, 0, 0, comp(1430, 260));
        IF_SETOPKEY(9, 0, 0, comp(1430, 260));
        IF_SETOPKEY(10, 0, 0, comp(1430, 260));
        IF_SETOPKEY(1, 0, 0, comp(1430, 265));
        IF_SETOPKEY(1, 0, 0, comp(1430, 264));
        if ((CC_FIND(comp(1477, 71), 1) == 1)) {
            CC_SETOPKEY(2, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
        };
        IF_SETOPKEY(1, 0, 0, comp(1430, 11));
        IF_SETOPKEY(1, 0, 0, comp(1504, 2));
        IF_SETOPKEY(1, 0, 0, comp(1430, 16));
        IF_SETOPKEY(1, 0, 0, comp(1505, 2));
        IF_SETOPKEY(1, 0, 0, comp(1430, 57));
        IF_SETOPKEY(1, 0, 0, comp(1430, 55));
        IF_SETOPKEY(1, 0, 0, comp(1616, 10));
        IF_SETOPKEY(2, 0, 0, comp(1616, 10));
        IF_SETOPKEY(1, 0, 0, script8082());
        unk11165(0, 0, script8082());
        IF_SETOPKEY(1, 0, 0, comp(1430, 3));
        IF_SETOPKEY(1, 0, 0, comp(1616, 16));
        IF_SETOPKEY(2, 0, 0, comp(1430, 3));
        IF_SETOPKEY(2, 0, 0, comp(1616, 16));
        unk11165(0, 0, comp(1430, 2));
        unk11165(0, 0, comp(1616, 15));
    };
    return;
}