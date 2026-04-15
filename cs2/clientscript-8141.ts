//
function script8141(int0: int, int1: int, int2: int): [int, int] {
    var int3 = 1;
    var int4 = 1;
    switch (int0) {
        case 1024: {
            if ((int1 == 0)) {
                if ((int2 == 0)) {
                    int3 = 260;
                    int4 = 411;
                };
            } else if ((int2 == 0)) {
                int3 = 470;
                int4 = 411;
            };
            break;
        }
        case 1003: {
            if ((varbitplayer_27169 == 1)) {
                int3 = 552;
                if (((script20655() == 1) || (varbitplayer_27168 == 1))) {
                    int4 = (8 + 30);
                } else {
                    int4 = 76;
                };
            } else if ((int1 == 0)) {
                if ((int2 == 0)) {
                    int3 = 530;
                    if (((script20655() == 1) || (varbitplayer_27168 == 1))) {
                        int4 = (8 + 30);
                    } else {
                        int4 = 76;
                    };
                } else {
                    if (((script20655() == 1) || (varbitplayer_27168 == 1))) {
                        int3 = (8 + 30);
                    } else {
                        int3 = 76;
                    };
                    int4 = 530;
                };
            } else if ((int2 == 0)) {
                int3 = 265;
                if (((script20655() == 1) || (varbitplayer_27168 == 1))) {
                    int4 = (8 + ((2 * 30) - 10));
                } else {
                    int4 = 128;
                };
            } else {
                if (((script20655() == 1) || (varbitplayer_27168 == 1))) {
                    int3 = (8 + ((2 * 30) - 10));
                } else {
                    int3 = 128;
                };
                int4 = 265;
            };
            break;
        }
        case 1032:
        case 1033:
        case 1034:
        case 1035: {
            if ((varbitplayer_27169 == 1)) {
                int3 = 552;
                int4 = 38;
            } else if ((int1 == 0)) {
                if ((int2 == 0)) {
                    int3 = 530;
                    int4 = 38;
                } else {
                    int3 = 38;
                    int4 = 530;
                };
            } else if ((int2 == 0)) {
                int3 = 265;
                int4 = 76;
            } else {
                int3 = 76;
                int4 = 265;
            };
            break;
        }
        case 1031: {
            int3 = struct_getparam(31708, 3484);
            int4 = struct_getparam(31708, 3485);
            break;
        }
        case 1053: {
            int3 = (128 + (int1 * 32));
            int4 = 58;
            break;
        }
    };
    return [int3, int4];
}