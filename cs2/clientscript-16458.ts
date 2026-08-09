//
function script16458(): void {
    var int0 = 97386510;
    var int1 = cc_getparam(4261);
    stack(704512);
    stack(int1);
    DB_FIND(0);
    var int2 = dbrow_findnext();
    if ((int2 == -1)) {
        return;
    };
    var int3 = 200;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    if ((script6431() == 1)) {
        int3 = 300;
    };
    var int8 = DB_GETFIELDCOUNT(int2, 704544);
    if ((int8 <= 0)) {
        return;
    };
    var int9 = dbrow_getfield(int2, 704544, MAX((int8 - 1), 0));
    if ((int9 == -1)) {
        return;
    };
    var int10 = 0;
    var string0 = "";
    var int11 = 0;
    [int10, string0, int11] = script16461(int9, script42(struct_getparam(int9, 2217)));
    var string1 = dbrow_getfield(int2, 704528, 0);
    if ((STRING_LENGTH(string1) == 0)) {
        string1 = struct_getparam(int9, 2210);
    };
    int6 = script14747(int0, 0, int6, int3, string1, int11, 0);
    int6 = script14748(int0, 0, int6);
    if ((STRING_LENGTH(string0) > 0)) {
        int6 = script16462(int0, 0, int6, int3, int10, string0);
        int6 = script14748(int0, 0, int6);
    };
    int7 = -1;
    int7 = (int7 + 1);
    while ((int7 < int8)) {
        int9 = dbrow_getfield(int2, 704544, int7);
        if ((int9 != -1)) {
            if (((int7 == 0) && (STRING_LENGTH(string1) == 0))) {
                string1 = struct_getparam(int9, 2210);
            };
            stack(int0);
            stack(int2);
            stack(int6);
            int4 = (int4 + 1);
            int6 = script16459(int4, int3, int9, int8);
        };
    };
    IF_SETSIZE(int3, (int6 - 2), 0, 0, int0);
    return;
}