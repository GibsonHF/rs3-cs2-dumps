//
function script13531(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = -1;
    var int5 = -1;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    switch (int0) {
        case 0: {
            [int4, int5] = [8978645, 8978646];
            int7 = 0;
            break;
        }
        case 1: {
            [int4, int5] = [8978650, 8978651];
            int7 = 1;
            break;
        }
        case 2: {
            [int4, int5] = [8978655, 8978656];
            int7 = 2;
            break;
        }
        case 3: {
            [int4, int5] = [8978660, 8978661];
            int7 = 3;
            break;
        }
        case 4: {
            [int4, int5] = [8978665, 8978666];
            int7 = 4;
            break;
        }
        case 5: {
            [int4, int5] = [8978670, 8978671];
            int7 = 5;
            break;
        }
        case 6: {
            [int4, int5] = [8978675, 8978676];
            int7 = 6;
            break;
        }
        case 15: {
            [int4, int5] = [8978680, 8978681];
            int7 = 7;
            break;
        }
        case 16: {
            [int4, int5] = [8978685, 8978691];
            int7 = 8;
            IF_SETHIDE(script12585(int3), int4);
            break;
        }
        case 99: {
            [int4, int5] = [8978641, 8978642];
            int8 = 35;
            int9 = 0;
            break;
        }
        default: {
            return;
        }
    };
    if ((int0 != 99)) {
        if ((int3 == 1)) {
            int8 = 51;
        } else {
            int8 = 55;
        };
        if ((varbitplayer_27169 == 1)) {
            int8 = (int8 + 2);
        };
        int9 = (35 + (int7 * int8));
    };
    IF_SETSIZE(int8, 0, 0, 1, int4);
    IF_SETPOSITION(int9, 0, 0, 2, int4);
    if (((int0 == 1) && (varbitplayer_36983 == 1))) {
        script9917(int0, 3);
    } else if ((int1 == 0)) {
        script9917(int0, 0);
    } else if ((int2 == 1)) {
        script9917(int0, 1);
    } else {
        script9917(int0, 2);
    };
    if (((varclient_41 != -1) && (script9913(int0) == 1))) {
        IF_SETGRAPHIC(35463, int5);
    } else {
        int6 = script9921(int0);
        if (((int6 == 0) || (MODULO((int6 / 25), 2) == 1))) {
            IF_SETGRAPHIC(35463, int5);
        } else {
            IF_SETGRAPHIC(34645, int5);
        };
    };
    IF_SETONOP(callback(script9915, -2147483644, 18, int0), int4);
    return;
}