//
function script20265(int0: number, int1: number, int2: number, int3: number, int4: number): [number, number] {
    var int5 = dbrow_getfield(int0, 1347616, 0);
    if ((int5 == -1 as obj)) {
        return [int1, int2];
    };
    var int6 = 0;
    var int7 = DB_GETFIELDCOUNT(int0, 1347664);
    var int8 = 0;
    var int9 = 0;
    var string0 = "";
    var int10 = false;
    var int11 = 1;
    var int12 = -1 as var_reference;
    var int13 = 0;
    while ((int6 < int7)) {
        stack(dbrow_getfield(int0, 1347664, int6));
        [int12, int13, int10, string0] = stack();
        if (((STRING_LENGTH(string0) > 0) && (int10 == true))) {
            if ((((int4 == 1) && (WORLDMAP_GETDISPLAYCOORD(int12) != 1)) || ((int4 == 0) && (int13 == 2)))) {
                int11 = 0;
            } else {
                int11 = 1;
            };
            int8 = MAX(18, script15891(string0, (int3 - 34), 207, 0));
            script7961(94568468, int6, 0, 16, int9, 0, 0, 16, int8, 1, 0, 2550, string0, int4, 1, int11);
            CC_SETOP(1, "Toggle");
            int9 = ((int9 + int8) + 4);
        };
        int6 = (int6 + 1);
    };
    if (((int9 > 0) && (IF_FIND(94568467) == 1))) {
        var [int1, int2] = script19613(0, int1, int2, int3, "Toggleable Effects");
        IF_SETPOSITION(0, int2, 0, 0, 94568468);
        IF_SETSIZE(0, int9, 1, 0, 94568468);
        int2 = (int2 + int9);
        [int1, int2] = script19613(0, int1, int2, int3, "Always Active Effects");
    };
    return [int1, int2];
}