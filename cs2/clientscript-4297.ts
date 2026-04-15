//
function script4297(int0: int, int1: int): void {
    var int2 = IF_GETWIDTH(comp(1185, 7));
    var int3 = (30 + SCALE(195, 100, (100 - int1)));
    var int4 = (225 - SCALE(195, 100, (100 - int1)));
    var int5 = 0;
    var int6 = 1;
    switch (varbitplayer_40595) {
        case 0: {
            break;
        }
        case 2: {
            int3 = 179;
            int4 = 36;
            int5 = 0;
            IF_SETCOLOUR(script693(int3, int4, int5), comp(1185, 11));
            break;
        }
        case 3: {
            int3 = 255;
            int4 = 51;
            int5 = 153;
            IF_SETCOLOUR(script693(int3, int4, int5), comp(1185, 11));
            break;
        }
        case 1: {
            int3 = 163;
            int4 = 0;
            int5 = 200;
            IF_SETCOLOUR(script693(int3, int4, int5), comp(1185, 11));
            break;
        }
    };
    if ((int2 < int0)) {
        if ((int2 < (int0 - 10))) {
            int6 = 5;
        };
        IF_SETSIZE((int2 + int6), 19, 0, 0, comp(1185, 7));
        IF_SETSIZE((int2 + int6), 19, 0, 0, comp(1185, 9));
        IF_SETCOLOUR(script693(int3, int4, 0), comp(1185, 6));
        IF_SETCOLOUR(script693(int3, int4, 0), comp(1185, 5));
    } else if ((int2 > int0)) {
        if ((int2 > (int0 + 10))) {
            int6 = 5;
        };
        IF_SETSIZE((int2 - int6), 19, 0, 0, comp(1185, 7));
        IF_SETSIZE((int2 - int6), 19, 0, 0, comp(1185, 9));
        IF_SETCOLOUR(script693(int3, int4, int3), comp(1185, 6));
        IF_SETCOLOUR(script693(int3, int4, int5), comp(1185, 5));
    } else {
        IF_SETONTIMER(callback(), comp(1185, 6));
    };
    return;
}