//
function script8507(int0: int, int1: int, int2: unknown_int, int3: unknown_int): int {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    if ((varbitplayer_27169 == 0)) {
        if (((((varbitplayer_38842 == 1) || (varbitplayer_60441 == 0)) || (int2 == 1)) || (int0 == 1019))) {
            [int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, int14, int15] = script8546(int0);
        } else {
            [int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, int14, int15] = script9910();
        };
    } else {
    };
    switch (int1) {
        case 120: {
            return 1;
        }
        case 146: {
            if ((STAFFMODLEVEL() >= 2)) {
                return 1;
            };
            return 0;
        }
        case 115: {
            if ((int0 != 1019)) {
                return 1;
            };
            return 0;
        }
        case 125:
        case 137:
        case 138:
        case 139:
        case 127: {
            if ((int0 != 1019)) {
                return int12;
            };
            return 0;
        }
        case 0:
        case 4:
        case 27:
        case 28:
        case 29:
        case 109:
        case 110:
        case 26:
        case 117:
        case 126:
        case 124:
        case 123:
        case 122:
        case 129:
        case 130:
        case 133:
        case 134:
        case 135:
        case 136:
        case 140:
        case 141:
        case 142:
        case 143:
        case 145: {
            return int4;
        }
        case 1: {
            if (((varbitplayer_27169 == 0) && ((varbitplayer_38842 == 1) || (varbitplayer_60441 == 0)))) {
                if ((int0 == 18)) {
                    return 1;
                };
                return 0;
            };
            if (((int0 != 1019) && ((varbitplayer_22846 == 2) || (varbitplayer_22846 == 0)))) {
                return 1;
            };
            return 0;
        }
        case 2:
        case 17:
        case 116: {
            if ((varbitplayer_36983 == 1)) {
                return 0;
            };
            return int7;
        }
        case 7: {
            switch (int0) {
                case 18: {
                    if ((varbitplayer_20187 == 1)) {
                        return int8;
                    };
                    return 1;
                }
                case 19:
                case 1019: {
                    return 1;
                }
            };
            return int8;
        }
        case 32: {
            if (((varbitplayer_27169 == 0) && (((varbitplayer_38842 == 1) || (varbitplayer_60441 == 0)) && (int0 == 24)))) {
                return int13;
            };
            if ((varbitplayer_27169 == 1)) {
            } else if (((((varbitplayer_38842 == 0) && (varbitplayer_60441 == 1)) && (varbitplayer_22846 == 14)) && (int0 != 1019))) {
                return int13;
            };
            return 0;
        }
        case 3:
        case 5:
        case 18:
        case 6:
        case 19:
        case 30:
        case 31: {
            if (((varbitplayer_27169 == 0) && (((((varbitplayer_38842 == 1) || (varbitplayer_60441 == 0)) && (int0 == 18)) && (varbitplayer_22846 == 0)) && (varbitplayer_20187 == 1)))) {
                return 0;
            };
            return int8;
        }
        case 9:
        case 11:
        case 20: {
            return int9;
        }
        case 100:
        case 101:
        case 103:
        case 105:
        case 106:
        case 108:
        case 111:
        case 112:
        case 113:
        case 114:
        case 118:
        case 119:
        case 132:
        case 102:
        case 104: {
            return int5;
        }
        case 41:
        case 43:
        case 107:
        case 42: {
            switch (int3) {
                case 0: {
                    return int10;
                }
                case 1: {
                    return int15;
                }
            };
            return 0;
        }
        case 144: {
            return int15;
        }
        case 44:
        case 46:
        case 45: {
            return int11;
        }
        case 24:
        case 22:
        case 25:
        case 23:
        case 128: {
            return int14;
        }
    };
    return 0;
}