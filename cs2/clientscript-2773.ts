//
function script2773(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int): void {
    if ((varplayer_1295 < 6)) {
        return;
    };
    var int9 = -1;
    var int10 = -1;
    var int11 = -1;
    var int12 = -1;
    switch (int0) {
        case 1: {
            CAM_DEC_Y();
            [int9, int10] = [int1, int5];
            [int11, int12] = [2273, 2278];
            break;
        }
        case 2: {
            CAM_INC_Y();
            [int9, int10] = [int2, int6];
            [int11, int12] = [2272, 2277];
            break;
        }
        case 3: {
            CAM_INC_X();
            [int9, int10] = [int3, int7];
            [int11, int12] = [2274, 2279];
            break;
        }
        case 4: {
            CAM_DEC_X();
            [int9, int10] = [int4, int8];
            [int11, int12] = [2275, 2280];
            break;
        }
        default: {
            return;
        }
    };
    stack(2276);
    stack(int9);
    IF_SETGRAPHIC();
    var int13 = 2271;
    IF_SETONTIMER(callback(script1723, -2147483645, -2147483643, int13, (CLIENTCLOCK() + 10)), int9);
    stack(int12);
    stack(int10);
    IF_SETGRAPHIC();
    IF_SETONTIMER(callback(script1723, -2147483645, -2147483643, int11, (CLIENTCLOCK() + 10)), int10);
    return;
}