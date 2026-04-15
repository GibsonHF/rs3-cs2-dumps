//
function script20275(int0: dbrow, int1: component, int2: int): int {
    var int3 = DB_GETFIELDCOUNT(int0, 1384464);
    var int4 = ENUM_GETOUTPUTCOUNT(9083 as cs2enum);
    var int5 = -1;
    var int6 = 0;
    var int7 = 0;
    var int8 = IF_GETNEXTSUBID(int1);
    var int9 = -1 as dbrow;
    var string0 = "";
    var string1 = "";
    var int10 = true;
    while ((++int5 < int3)) {
        int9 = dbrow_getfield(int0, 1384464, int5);
        if ((int9 != -1 as dbrow)) {
            int10 = true;
            string1 = "To teleport, you must meet the following requirements:";
            string0 = dbrow_getfield(int9, 1388544, 0);
            if ((int8 < int4)) {
                string0 = strconcat(enum_getvalue(0, 36, 9083 as cs2enum, int8), string0);
            };
            [int10, string1] = script20154(int9, string1);
            if ((MODULO(int5, 2) == 0)) {
                int6 = 0;
            } else {
                int6 = 2;
            };
            int7 = (int2 + (5 + ((int5 / 2) * 28)));
            script7853(int1, int8, 10, int7, int6, 0, 7373, 24, 2, 0, 4476 as dbrow, string0, int10, 1, false, false);
            CC_SETTEXTFONT(207 as fontmetrics);
            CC_SETMAXLINES(1);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETOP(1, "Select");
            if ((int10 == false)) {
                script3537(string1);
            };
            int8 = (int8 + 1);
        };
    };
    return int7;
}