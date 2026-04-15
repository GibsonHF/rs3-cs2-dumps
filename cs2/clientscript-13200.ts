//
function script13200(int0: cs2enum, int1: int): [unknown_int, string, graphic, int, int, int] {
    var int2 = enum_getvalue(0, 0, int0, int1);
    if ((int2 < 0)) {
        return [0, "", -1 as graphic, -1, -1, -1];
    };
    var int3 = 0;
    var string0 = "";
    var int4 = -1 as graphic;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    var int11 = -1;
    [int8, int9, int10, int11] = script13199(int2);
    var int12 = -1 as cs2enum;
    switch (int8) {
        case 0: {
            if ((script8292(1, -1) == 0)) {
                return [0, "", -1 as graphic, -1, -1, -1];
            };
            switch (varclient_5938) {
                case 1: {
                    int6 = script13214(int8, int9, 99, 0);
                    int5 = 0;
                    break;
                }
                case 2: {
                    if ((int9 != 2)) {
                        return [0, "", -1 as graphic, -1, -1, -1];
                    };
                    int6 = -1;
                    break;
                }
                case 3: {
                    if ((int9 != 4)) {
                        return [0, "", -1 as graphic, -1, -1, -1];
                    };
                    int6 = -1;
                    break;
                }
                case 4: {
                    if ((int9 != 1)) {
                        return [0, "", -1 as graphic, -1, -1, -1];
                    };
                    int6 = -1;
                    break;
                }
                case 5: {
                    if ((int9 != 3)) {
                        return [0, "", -1 as graphic, -1, -1, -1];
                    };
                    int6 = -1;
                    break;
                }
                case 6: {
                    if ((int9 != 5)) {
                        return [0, "", -1 as graphic, -1, -1, -1];
                    };
                    int6 = -1;
                    break;
                }
                default: {
                    return [0, "", -1 as graphic, -1, -1, -1];
                }
            };
            if ((int11 != 0)) {
                if ((int6 == 0)) {
                    return [0, "", -1 as graphic, -1, -1, -1];
                };
                int6 = script13214(int8, int9, int10, 0);
                if ((int6 == 0)) {
                    return [0, "", -1 as graphic, -1, -1, -1];
                };
                int6 = script13214(int8, int9, int10, int11);
                int3 = 1;
                string0 = enum_getvalue(0, 36, 12194 as cs2enum, int11);
                int5 = (int5 + 2);
                int7 = script13201(int8, int9, int10, int11);
                int4 = enum_getvalue(0, 23, 12195 as cs2enum, int11);
            } else if ((int10 != 99)) {
                if ((int6 == 0)) {
                    return [0, "", -1 as graphic, -1, -1, -1];
                };
                int6 = script13214(int8, int9, int10, int11);
                int3 = 1;
                int12 = enum_getvalue(0, 26, 5959 as cs2enum, int9);
                if ((int12 == -1 as cs2enum)) {
                    string0 = "unknown subcat_names_enum";
                } else {
                    string0 = enum_getvalue(0, 36, int12, int10);
                };
                int5 = (int5 + 1);
                int7 = script13201(int8, int9, int10, int11);
                if ((int9 == 2)) {
                    if ((int10 == 20)) {
                        int4 = 24473 as graphic;
                    } else {
                        int4 = enum_getvalue(0, 23, 9995 as cs2enum, int10);
                    };
                };
            } else {
                int3 = 1;
                string0 = enum_getvalue(0, 36, 12190 as cs2enum, int9);
                int7 = script13201(int8, int9, int10, int11);
                int4 = enum_getvalue(0, 23, 9996 as cs2enum, int9);
            };
            break;
        }
        case 1:
        case 2: {
            if ((((int8 == 1) && (int9 != 0)) && (TESTBIT(script13250(), int9) == 0))) {
                return [0, "", -1 as graphic, -1, -1, -1];
            };
            int6 = script13214(int8, 0, 99, 0);
            int5 = 0;
            if ((int9 != 0)) {
                if ((int6 == 0)) {
                    return [0, "", -1 as graphic, -1, -1, -1];
                };
                int6 = script13214(int8, int9, int10, int11);
                int3 = 1;
                int12 = enum_getvalue(0, 26, 12186 as cs2enum, int8);
                if ((int12 == -1 as cs2enum)) {
                    string0 = "";
                    script12478(`Null entry in mtxmgt_store_filter_category_names_list for $filter: '${inttostring(int8, 10)}'`);
                } else {
                    string0 = enum_getvalue(0, 36, int12, int9);
                };
                int5 = (int5 + 1);
                int7 = script13201(int8, int9, int10, int11);
            } else {
                int3 = 1;
                string0 = enum_getvalue(0, 36, 12185 as cs2enum, int8);
                int7 = script13201(int8, int9, int10, int11);
            };
            break;
        }
        case 3: {
            switch (int9) {
                case 1: {
                    int3 = 1;
                    string0 = "Sorting:";
                    break;
                }
                case 2: {
                    int3 = 1;
                    string0 = "Alphabetical";
                    if ((varbitclient_35141 == 0)) {
                        int4 = 29466 as graphic;
                    } else {
                        int4 = 29467 as graphic;
                    };
                    break;
                }
                case 3: {
                    int3 = 1;
                    string0 = "Newest First";
                    if ((varbitclient_35141 == 2)) {
                        int4 = 29466 as graphic;
                    } else {
                        int4 = 29467 as graphic;
                    };
                    break;
                }
            };
            break;
        }
    };
    return [int3, string0, int4, int5, int6, int7];
}