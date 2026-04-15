//
function script13531(int0: unknown_int, int1: int, int2: int, int3: boolean): void {
    var int4 = comp(-1, 65535);
    var int5 = -1;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    switch (int0) {
        case 0: {
            [int4, int5] = [comp(137, 213), 8978646];
            int7 = 0;
            break;
        }
        case 1: {
            [int4, int5] = [comp(137, 218), 8978651];
            int7 = 1;
            break;
        }
        case 2: {
            [int4, int5] = [comp(137, 223), 8978656];
            int7 = 2;
            break;
        }
        case 3: {
            [int4, int5] = [comp(137, 228), 8978661];
            int7 = 3;
            break;
        }
        case 4: {
            [int4, int5] = [comp(137, 233), 8978666];
            int7 = 4;
            break;
        }
        case 5: {
            [int4, int5] = [comp(137, 238), 8978671];
            int7 = 5;
            break;
        }
        case 6: {
            [int4, int5] = [comp(137, 243), 8978676];
            int7 = 6;
            break;
        }
        case 15: {
            [int4, int5] = [comp(137, 248), 8978681];
            int7 = 7;
            break;
        }
        case 16: {
            [int4, int5] = [comp(137, 253), 8978691];
            int7 = 8;
            IF_SETHIDE(script12585(int3), int4);
            break;
        }
        case 99: {
            [int4, int5] = [comp(137, 209), 8978642];
            int8 = 35;
            int9 = 0;
            break;
        }
        default: {
            return;
        }
    };
    if ((int0 != 99)) {
        if ((int3 == true)) {
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
        stack(35463);
        stack(int5);
        IF_SETGRAPHIC();
    } else {
        int6 = script9921(int0);
        if (((int6 == 0) || (MODULO((int6 / 25), 2) == 1))) {
            stack(35463);
            stack(int5);
            IF_SETGRAPHIC();
        } else {
            stack(34645);
            stack(int5);
            IF_SETGRAPHIC();
        };
    };
    IF_SETONOP(callback(script9915, -2147483644, 18, int0), int4);
    return;
}