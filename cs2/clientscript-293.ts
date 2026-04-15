//[proc,worldmap_quicksort_menu]
function script293(int0: unknown_int, int1: int, int2: int): void {
    var int3 = ((int1 + int2) / 2);
    var int4 = push_array(int3);
    pop_array(int3, push_array(int2));
    pop_array(int2, int4);
    var int5 = int1;
    var int6 = int1;
    var int7 = 0;
    while ((int6 < int2)) {
        if ((strcmp(LOWERCASE(WORLDMAP_GETMAPNAME(enum_getvalue(0, 21, 708 as cs2enum, push_array(int6)))), LOWERCASE(WORLDMAP_GETMAPNAME(enum_getvalue(0, 21, 708 as cs2enum, int4)))) < AND(int6, 1))) {
            int7 = push_array(int6);
            pop_array(int6, push_array(int5));
            pop_array(int5, int7);
            int5 = (int5 + 1);
        };
        int6 = (int6 + 1);
    };
    pop_array(int2, push_array(int5));
    pop_array(int5, int4);
    if ((int1 < (int5 - 1))) {
        script293(0, int1, (int5 - 1));
    };
    if (((int5 + 1) < int2)) {
        script293(0, (int5 + 1), int2);
    };
    return;
}