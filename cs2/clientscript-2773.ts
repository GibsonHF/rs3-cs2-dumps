//
function script2773(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    if ((varplayer_1295 < 6)) {
        return;
    };
    var int9 = comp(-1, 65535);
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
    IF_SETGRAPHIC(2276 as graphic, int9);
    var int13 = 2271;
    IF_SETONTIMER(callback(script1723, -2147483645, -2147483643, int13, (CLIENTCLOCK() + 10)), int9);
    IF_SETGRAPHIC(int12, int10);
    IF_SETONTIMER(callback(script1723, -2147483645, -2147483643, int11, (CLIENTCLOCK() + 10)), int10);
    return;
}