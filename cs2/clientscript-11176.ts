//
function script11176(): void {
    var int0 = comp(1486, 14);
    var int1 = cc_getparam(4261);
    stack(737280);
    stack(int1);
    DB_FIND(0);
    dbrow_findnext();
    var int2 = stack();
    if ((int2 == -1)) {
        return;
    };
    var int3 = (200 + 50);
    var int4 = 0;
    var int5 = 0;
    var int6 = -1;
    if ((script6431() == true)) {
        int3 = 300;
    };
    var int7 = DB_GETFIELDCOUNT(int2, 737312);
    var int8 = dbrow_getfield(int2, 737312, MAX((int7 - 1), 0));
    var int9 = 0;
    var string0 = "";
    var int10 = -1;
    if ((int8 != -1 as struct)) {
        [int9, string0, int10] = script16461(int8, script42(struct_getparam(int8, 2217)));
    };
    var string1 = dbrow_getfield(int2, 737296, 0);
    if (((STRING_LENGTH(string1) == 0) && (int8 != -1 as struct))) {
        string1 = struct_getparam(int8, 2210);
    };
    int5 = script14747(int0, 0, int5, int3, string1, int10, 0);
    if ((int8 != -1 as struct)) {
        int5 = script14748(int0, 0, int5);
    };
    if ((STRING_LENGTH(string0) > 0)) {
        int5 = script16462(int0, 0, int5, int3, int9, string0);
        int5 = script14748(int0, 0, int5);
    };
    int6 = -1;
    while ((++int6 < int7)) {
        int8 = dbrow_getfield(int2, 737312, int6);
        if ((int8 != -1 as struct)) {
            if (((int6 == 0) && (STRING_LENGTH(string1) == 0))) {
                string1 = struct_getparam(int8, 2210);
            };
            int5 = script11177(int0, int5, ++int4, int3, int8, int7);
        };
    };
    IF_SETSIZE(int3, (int5 - 2), 0, 0, int0);
    return;
}