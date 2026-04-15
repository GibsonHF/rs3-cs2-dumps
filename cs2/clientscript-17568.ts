//
function script17568(int0: unknown_int, int1: component, int2: int, int3: int): void {
    var int4 = ((int2 + int3) / 2);
    var int5 = push_array(int4);
    pop_array(int4, push_array(int3));
    pop_array(int3, int5);
    var int6 = int2;
    var int7 = int2;
    var int8 = -1;
    var int9 = 0;
    while ((int7 < int3)) {
        if (((CC_FIND[1](int1, int5) == 1) && (CC_FIND(int1, push_array(int7)) == 1))) {
            if ((cc_getparam(8872) == cc_getparam[1](8872))) {
                int9 = 0;
            } else if ((cc_getparam(8872) < cc_getparam[1](8872))) {
                int9 = -1;
            } else {
                int9 = 1;
            };
            if ((int9 < AND(int7, 1))) {
                int8 = push_array(int7);
                pop_array(int7, push_array(int6));
                pop_array(int6, int8);
                int6 = (int6 + 1);
            };
        };
        int7 = (int7 + 1);
    };
    pop_array(int3, push_array(int6));
    pop_array(int6, int5);
    if ((int2 < (int6 - 1))) {
        script17568(0, int1, int2, (int6 - 1));
    };
    if (((int6 + 1) < int3)) {
        script17568(0, int1, (int6 + 1), int3);
    };
    return;
}