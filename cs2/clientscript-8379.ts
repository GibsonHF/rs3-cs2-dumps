//
function script8379(int0: int, int1: int, int2: int, int3: int, int4: int, int5: unknown_int, int6: unknown_int): [int, int, int, int] {
    define_array(4);
    var int7 = 0;
    var int8 = int0;
    var int9 = int1;
    var int10 = int2;
    var int11 = int3;
    if ((struct_getparam(script10405(int4), 3528) == true)) {
        switch (int5) {
            case 0: {
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 1);
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 3);
                break;
            }
            case 1: {
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 1);
                break;
            }
            case 2: {
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 1);
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 4);
                break;
            }
            case 3: {
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 3);
                break;
            }
            case 4: {
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 4);
                break;
            }
            case 5: {
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 6);
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 3);
                break;
            }
            case 6: {
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 6);
                break;
            }
            case 7: {
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 6);
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 4);
                break;
            }
            case 8: {
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 1);
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 3);
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 4);
                [int8, int9, int10, int11] = script8380(int8, int9, int10, int11, int4, 6);
                break;
            }
        };
    };
    var int12 = script10405(int4);
    var int13 = struct_getparam(int12, 3503);
    if (((struct_getparam(script10405(int4), 3529) == false) && (int6 == 1))) {
        [int8, int9, int10, int11] = script8381(int8, int9, int10, int11, int4, int5);
        IF_SETPOSITION(int0, int1, 0, 0, int13);
        IF_SETSIZE(int2, int3, 0, 0, int13);
    };
    return [int8, int9, int10, int11];
}