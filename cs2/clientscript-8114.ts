//
function script8114(int0: int, int1: int, int2: int): void {
    define_array(14);
    define_array[65536](14);
    var int3 = (14 / 2);
    var int4 = 0;
    var int5 = 0;
    var int6 = 19;
    var int7 = 36;
    var int8 = comp(-1, 65535);
    var int9 = script11799(int0);
    if ((int9 == -1)) {
        return;
    };
    if ((varbitplayer_27169 == 1)) {
        int7 = (int7 + 1);
    } else if ((int1 != 0)) {
        switch (int0) {
            case 1003: {
                if (((int2 == 1) || (int2 == 3))) {
                    int7 = (int7 - 1);
                };
                if ((int2 == 0)) {
                    int7 = (int7 - 1);
                };
                break;
            }
            case 1032:
            case 1033:
            case 1034:
            case 1035: {
                int7 = (int7 - 1);
                break;
            }
        };
    };
    if ((int2 == 0)) {
        if ((int1 == 0)) {
            while ((int4 < 14)) {
                pop_array(int4, (int7 * int4));
                pop_array[1](int4, 0);
                int4 = (int4 + 1);
            };
        } else {
            while ((int4 < 14)) {
                if ((int4 < int3)) {
                    pop_array(int4, (int7 * int4));
                } else {
                    pop_array(int4, (int7 * (int4 - int3)));
                };
                pop_array[1](int4, (int7 * (int4 / int3)));
                int4 = (int4 + 1);
            };
        };
    } else if ((int1 == 0)) {
        while ((int4 < 14)) {
            pop_array[1](int4, (int7 * int4));
            pop_array(int4, 0);
            int4 = (int4 + 1);
        };
    } else {
        while ((int4 < 14)) {
            if ((int4 < int3)) {
                pop_array[1](int4, (int7 * int4));
            } else {
                pop_array[1](int4, (int7 * (int4 - int3)));
            };
            pop_array(int4, (int7 * (int4 / int3)));
            int4 = (int4 + 1);
        };
    };
    int4 = 0;
    while ((int4 < 14)) {
        int8 = script5900(int9, (int4 + 1));
        if ((int8 != comp(-1, 65535))) {
            IF_SETPOSITION(push_array(int4), push_array[1](int4), 0, 0, int8);
        };
        int4 = (int4 + 1);
    };
    return;
}