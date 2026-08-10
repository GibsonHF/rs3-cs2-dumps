//
function script20265(int0: number, int1: number, int2: number, int3: number, int4: number): [number, number] {
    var int5 = 0;
    var int6 = DB_GETFIELDCOUNT(int0, 1347744);
    var int7 = 0;
    var int8 = 0;
    var string0 = "";
    var int9 = 0;
    var int10 = 1;
    var int11 = -1;
    var int12 = 0;
    while ((int5 < int6)) {
        [int11, int12, int9, string0] = dbrow_getfield(int0, 1347744, int5);
        if (((STRING_LENGTH(string0) > 0) && (int9 == 1))) {
            if ((int4 == 1)) {
                if ((WORLDMAP_GETDISPLAYCOORD(int11) != 1)) {
                    int10 = 0;
                } else if ((int4 == 0)) {
                    if ((int12 == 2)) {
                        int10 = 0;
                    } else {
                        int10 = 1;
                    };
                } else {
                    int10 = 1;
                };
            } else if ((int4 == 0)) {
                if ((int12 == 2)) {
                    int10 = 0;
                } else {
                    int10 = 1;
                };
            } else {
                int10 = 1;
            };
            int7 = MAX(18, script15891(string0, (int3 - 40), 207, 0));
            script7961(94568472, int5, 0, 16, int8, 0, 0, 16, int7, 1, 0, 2550, string0, int4, 1, int10);
            CC_SETOP(1, "Toggle");
            int8 = ((int8 + int7) + 4);
        };
        int5 = (int5 + 1);
    };
    if (((int8 > 0) && (IF_FIND(comp(1443, 23)) == 1))) {
        [int1, int2] = script19613(0, int1, int2, int3, "Toggleable Effects");
        IF_SETPOSITION(0, int2, 0, 0, comp(1443, 24));
        IF_SETSIZE(0, int8, 1, 0, comp(1443, 24));
        int2 = (int2 + int8);
        [int1, int2] = script19613(0, int1, int2, int3, "Always Active Effects");
    };
    return [int1, int2];
}