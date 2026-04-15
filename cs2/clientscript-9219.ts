//
function script9219(int0: component, int1: int): void {
    var int2 = 35082;
    var int3 = struct_getparam(int2, 8005);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1 as material;
    if ((int3 == 1)) {
        int4 = struct_getparam(int2, 8006);
        int5 = struct_getparam(int2, 8006);
        int6 = struct_getparam(int2, 8006);
        int7 = struct_getparam(int2, 8006);
        int8 = struct_getparam(int2, 8006);
        int9 = struct_getparam(int2, 8006);
        int10 = struct_getparam(int2, 8006);
        int11 = struct_getparam(int2, 8006);
        int12 = struct_getparam(int2, 8006);
        int13 = struct_getparam(int2, 8015);
    };
    IF_SETMODEL(enum_getvalue(0, 31, 6182 as cs2enum, int1), int0);
    switch (int1) {
        case 1: {
            IF_SETRETEX(1, 11822 as material, 11824 as material, int0);
            IF_SETRECOL(1, 51884, 82, int0);
            break;
        }
        case 2: {
            IF_SETRETEX(1, 11822 as material, 11825 as material, int0);
            IF_SETRECOL(1, 51884, 10036, int0);
            break;
        }
        case 3: {
            IF_SETRETEX(1, 11822 as material, 11823 as material, int0);
            IF_SETRECOL(1, 51884, 6051, int0);
            break;
        }
        case 4: {
            IF_SETRETEX(1, 11822 as material, 11821 as material, int0);
            IF_SETRECOL(1, 51884, 931, int0);
            break;
        }
        case 5: {
            IF_SETRETEX(1, 11822 as material, 11822 as material, int0);
            IF_SETRECOL(1, 51884, 51884, int0);
            break;
        }
    };
    IF_SETMODELLIGHTING(int4, int5, int6, int7, int8, int9, int10, int11, int12, int13, int0);
    return;
}