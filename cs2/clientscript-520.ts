//
function script520(int0: unknown_int, int1: int, int2: int, int3: cs2enum): void {
    var int4 = ((int1 + int2) / 2);
    var int5 = push_array(int4);
    pop_array(int4, push_array(int2));
    pop_array(int2, int5);
    var int6 = int1;
    var int7 = int1;
    var int8 = -1;
    while ((int7 < int2)) {
        if ((strcmp(LOWERCASE(enum_getvalue(0, 36, int3, push_array(int7))), LOWERCASE(enum_getvalue(0, 36, int3, int5))) < AND(int7, 1))) {
            int8 = push_array(int7);
            pop_array(int7, push_array(int6));
            pop_array(int6, int8);
            int6 = (int6 + 1);
        };
        int7 = (int7 + 1);
    };
    pop_array(int2, push_array(int6));
    pop_array(int6, int5);
    if ((int1 < (int6 - 1))) {
        script520(0, int1, (int6 - 1), int3);
    };
    if (((int6 + 1) < int2)) {
        script520(0, (int6 + 1), int2, int3);
    };
    return;
}