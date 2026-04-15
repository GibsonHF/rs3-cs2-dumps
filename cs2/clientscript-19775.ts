//
function script19775(int0: int): [model, string, unknown_int, int, seq] {
    var int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 938);
    var string0 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 935);
    var int2 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 939);
    var int3 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 937);
    var int4 = 1;
    var int5 = 0;
    if ((struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 940) == 1)) {
        switch (int0) {
            case 0: {
                if ((STAT_BASE(7 as stat) < 40)) {
                    int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 936);
                    int4 = 0;
                };
                break;
            }
            case 1: {
                if ((varbitplayer_14030 < 160)) {
                    int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 936);
                    int4 = 0;
                };
                break;
            }
            case 2: {
                if ((varplayer_2236 < 100)) {
                    int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 936);
                    int4 = 0;
                };
                break;
            }
            case 3: {
                if ((varbitplayer_11858 > 370)) {
                    int5 = 1;
                };
                break;
            }
            case 5: {
                if ((varbitplayer_10987 < 26)) {
                    int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 936);
                    int4 = 0;
                };
                break;
            }
            case 6: {
                if ((varbitplayer_11754 == 1)) {
                    int5 = 1;
                };
                break;
            }
            case 7: {
                if ((varbitplayer_11858 > 370)) {
                    int5 = 1;
                };
                break;
            }
            case 9: {
                if ((STAT_BASE(10 as stat) < 15)) {
                    int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 936);
                    int4 = 0;
                };
                break;
            }
            case 11: {
                if (((varbitplayer_9530 < 16) || (varbitplayer_11779 == 1))) {
                    int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 936);
                    int4 = 0;
                };
                break;
            }
            case 12: {
                if ((varbitplayer_10430 < 135)) {
                    int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 936);
                    int4 = 0;
                } else if ((varbitplayer_13734 == 140)) {
                    int5 = 1;
                };
                break;
            }
            case 28: {
                if ((varbitplayer_9530 < 28)) {
                    int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 936);
                    int4 = 0;
                };
                break;
            }
            case 14: {
                if ((varplayer_3149 < 4)) {
                    int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 936);
                    int4 = 0;
                };
                break;
            }
            case 16: {
                if ((varbitplayer_16374 < 8)) {
                    int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 936);
                    int4 = 0;
                };
                break;
            }
            case 18: {
                if ((varplayer_2777 < 2)) {
                    int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 936);
                    int4 = 0;
                } else if ((varbitplayer_29086 == 3)) {
                    int5 = 1;
                };
                break;
            }
            case 20: {
                if ((varbitplayer_25043 == 0)) {
                    int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 936);
                    int4 = 0;
                };
                break;
            }
            case 27: {
                if ((varbitplayer_52844 < 120)) {
                    int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 936);
                    int4 = 0;
                };
                break;
            }
            case 22: {
                if ((varbitplayer_44469 < 50)) {
                    int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 936);
                    int4 = 0;
                };
                break;
            }
        };
        if ((int5 == 1)) {
            int1 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 942);
            int4 = 1;
            string0 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 941);
            int3 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 943);
            int2 = struct_getparam(enum_getvalue(0, 73, 869 as cs2enum, int0), 944);
        };
    };
    return [int1, string0, int4, int3, int2];
}