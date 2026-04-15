//
function script5698(int0: unknown_int, int1: int, int2: int, int3: cs2enum): void {
    var int4 = ((int1 + int2) / 2);
    var int5 = push_array(int4);
    pop_array(int4, push_array(int2));
    pop_array(int2, int5);
    var int6 = int1;
    var int7 = int1;
    var int8 = 0;
    var string0 = "";
    var string1 = "";
    var int9 = -1 as obj;
    var int10 = -1 as obj;
    while ((int7 < int2)) {
        int9 = struct_getparam(enum_getvalue(0, 73, int3, push_array(int7)), 2213);
        int10 = struct_getparam(enum_getvalue(0, 73, int3, int5), 2213);
        string0 = script12095(enum_getvalue(0, 73, int3, push_array(int7)));
        if (((int9 != -1 as obj) && (STRING_LENGTH(string0) == 0))) {
            string0 = OC_NAME(int9);
        };
        string1 = script12095(enum_getvalue(0, 73, int3, int5));
        if (((int10 != -1 as obj) && (STRING_LENGTH(string1) == 0))) {
            string1 = OC_NAME(int10);
        };
        if ((strcmp(string0, string1) < AND(int7, 1))) {
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
        script5698(0, int1, (int6 - 1), int3);
    };
    if (((int6 + 1) < int2)) {
        script5698(0, (int6 + 1), int2, int3);
    };
    return;
}