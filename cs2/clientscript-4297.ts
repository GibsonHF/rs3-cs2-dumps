//
function script4297(int0: number, int1: number): void {
    var int2 = IF_GETWIDTH(77660167);
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
            IF_SETCOLOUR(script693(int3, int4, int5), 77660171);
            break;
        }
        case 3: {
            int3 = 255;
            int4 = 51;
            int5 = 153;
            IF_SETCOLOUR(script693(int3, int4, int5), 77660171);
            break;
        }
        case 1: {
            int3 = 163;
            int4 = 0;
            int5 = 200;
            IF_SETCOLOUR(script693(int3, int4, int5), 77660171);
            break;
        }
    };
    if ((int2 < int0)) {
        if ((int2 < (int0 - 10))) {
            int6 = 5;
        };
        IF_SETSIZE((int2 + int6), 19, 0, 0, 77660167);
        IF_SETSIZE((int2 + int6), 19, 0, 0, 77660169);
        IF_SETCOLOUR(script693(int3, int4, 0), 77660166);
        IF_SETCOLOUR(script693(int3, int4, 0), 77660165);
    } else if ((int2 > int0)) {
        if ((int2 > (int0 + 10))) {
            int6 = 5;
        };
        IF_SETSIZE((int2 - int6), 19, 0, 0, 77660167);
        IF_SETSIZE((int2 - int6), 19, 0, 0, 77660169);
        IF_SETCOLOUR(script693(int3, int4, int3), 77660166);
        IF_SETCOLOUR(script693(int3, int4, int5), 77660165);
    } else {
        IF_SETONTIMER(callback(), 77660166);
    };
    return;
}