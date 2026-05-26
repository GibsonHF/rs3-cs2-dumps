//
function script12343(int0: number, int1: number): [number, number, number, number, number] {
    if ((int0 == -1)) {
        return [-1, 0, 0, 0, 0];
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    switch (int1) {
        case 0: {
            int6 = 94896131;
            int2 = struct_getparam(int0, 3457);
            int3 = struct_getparam(int0, 3458);
            int4 = struct_getparam(int0, 3459);
            int5 = struct_getparam(int0, 3460);
            break;
        }
        case 1: {
            int6 = 94896133;
            int2 = struct_getparam(int0, 3462);
            int3 = struct_getparam(int0, 3463);
            int4 = struct_getparam(int0, 3464);
            int5 = struct_getparam(int0, 3465);
            break;
        }
        case 2: {
            int6 = 94896135;
            int2 = struct_getparam(int0, 3467);
            int3 = struct_getparam(int0, 3468);
            int4 = struct_getparam(int0, 3469);
            int5 = struct_getparam(int0, 3470);
            break;
        }
        case 3: {
            int6 = 94896137;
            int2 = struct_getparam(int0, 3472);
            int3 = struct_getparam(int0, 3473);
            int4 = struct_getparam(int0, 3474);
            int5 = struct_getparam(int0, 3475);
            break;
        }
        case 4: {
            int6 = 94896139;
            int2 = struct_getparam(int0, 3477);
            int3 = struct_getparam(int0, 3478);
            int4 = struct_getparam(int0, 3479);
            int5 = struct_getparam(int0, 3480);
            break;
        }
    };
    if ((varbitplayer_38842 == 0)) {
        if ((int5 == 404)) {
            int5 = 450;
        } else if ((int5 == 202)) {
            int5 = 225;
        } else if ((int5 == 394)) {
            int5 = 440;
        };
        if ((int3 == 202)) {
            int3 = 225;
        };
    };
    return [int6, int2, int3, int4, int5];
}