//
function script59(int0: unknown_int): void {
    var int1 = comp(17, 4);
    var int2 = comp(17, 3);
    var int3 = comp(17, 2);
    var int4 = comp(17, 5);
    var int5 = comp(17, 1);
    if ((int0 == 0)) {
        int1 = comp(1630, 213);
        int2 = comp(1630, 211);
        int3 = comp(1630, 209);
        int4 = comp(1630, 215);
        int5 = comp(1630, 208);
    };
    var int6 = SCALE(varclient_4929, 100, 87);
    var int7 = SCALE(varclient_4931, 100, 87);
    var int8 = SCALE(varclient_4932, 100, 87);
    var int9 = SCALE(varclient_4930, 100, 87);
    IF_SETSIZE(int6, IF_GETHEIGHT(int1), 0, 0, int1);
    IF_SETSIZE(int7, IF_GETHEIGHT(int2), 0, 0, int2);
    IF_SETSIZE(int8, IF_GETHEIGHT(int3), 0, 0, int3);
    IF_SETSIZE(int9, IF_GETHEIGHT(int4), 0, 0, int4);
    IF_SETSIZE((((int6 + int7) + int8) + int9), IF_GETHEIGHT(int5), 0, 0, int5);
    define_array(4);
    define_array[65536](4);
    pop_array[1](0, 1);
    pop_array[1](1, 2);
    pop_array[1](2, 3);
    pop_array[1](3, 4);
    pop_array(0, int6);
    pop_array(1, int7);
    pop_array(2, int8);
    pop_array(3, int9);
    ARRAY_SORT(4, 0, 1);
    var int10 = (((int6 + int7) + int8) + int9);
    switch (push_array[1](0)) {
        case 1: {
            int10 = (int10 - int6);
            IF_SETPOSITION(int10, 0, 0, 0, int1);
            break;
        }
        case 2: {
            int10 = (int10 - int7);
            IF_SETPOSITION(int10, 0, 0, 0, int2);
            break;
        }
        case 3: {
            int10 = (int10 - int8);
            IF_SETPOSITION(int10, 0, 0, 0, int3);
            break;
        }
        case 4: {
            int10 = (int10 - int9);
            IF_SETPOSITION(int10, 0, 0, 0, int4);
            break;
        }
    };
    switch (push_array[1](1)) {
        case 1: {
            int10 = (int10 - int6);
            IF_SETPOSITION(int10, 0, 0, 0, int1);
            break;
        }
        case 2: {
            int10 = (int10 - int7);
            IF_SETPOSITION(int10, 0, 0, 0, int2);
            break;
        }
        case 3: {
            int10 = (int10 - int8);
            IF_SETPOSITION(int10, 0, 0, 0, int3);
            break;
        }
        case 4: {
            int10 = (int10 - int9);
            IF_SETPOSITION(int10, 0, 0, 0, int4);
            break;
        }
    };
    switch (push_array[1](2)) {
        case 1: {
            int10 = (int10 - int6);
            IF_SETPOSITION(int10, 0, 0, 0, int1);
            break;
        }
        case 2: {
            int10 = (int10 - int7);
            IF_SETPOSITION(int10, 0, 0, 0, int2);
            break;
        }
        case 3: {
            int10 = (int10 - int8);
            IF_SETPOSITION(int10, 0, 0, 0, int3);
            break;
        }
        case 4: {
            int10 = (int10 - int9);
            IF_SETPOSITION(int10, 0, 0, 0, int4);
            break;
        }
    };
    switch (push_array[1](3)) {
        case 1: {
            int10 = (int10 - int6);
            IF_SETPOSITION(0, 0, 0, 0, int1);
            break;
        }
        case 2: {
            int10 = (int10 - int7);
            IF_SETPOSITION(0, 0, 0, 0, int2);
            break;
        }
        case 3: {
            int10 = (int10 - int8);
            IF_SETPOSITION(0, 0, 0, 0, int3);
            break;
        }
        case 4: {
            int10 = (int10 - int9);
            IF_SETPOSITION(0, 0, 0, 0, int4);
            break;
        }
    };
    return;
}