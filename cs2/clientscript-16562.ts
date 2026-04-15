//
function script16562(int0: cs2enum, int1: int, int2: component): [boolean, int] {
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(int0);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as dbrow;
    var string0 = "";
    var int9 = 3;
    var int10 = 22;
    var int11 = 24;
    var int12 = 24;
    var int13 = 26 as fontmetrics;
    if ((script6431() == true)) {
        int10 = 28;
        int11 = 32;
        int12 = 32;
        int13 = 28 as fontmetrics;
    };
    while ((int3 < int4)) {
        int8 = enum_getvalue(0, 74, int0, int3);
        if ((script16564(int8, int2) == true)) {
            int7 = script16565(int8, int2);
            switch (int7) {
                case 0: {
                    int5 = (int5 + (int12 + int9));
                    break;
                }
                case 3: {
                    string0 = dbrow_getfield(int8, 114688, 0);
                    int5 = (int5 + (((STRINGWIDTH(string0, int13) + int10) + 4) + 12));
                    break;
                }
                case 1: {
                    [string0, int6] = script17399(varclient_6480);
                    int5 = (int5 + (4 + STRINGWIDTH(string0, int13)));
                    break;
                }
                case 2: {
                    [string0, int6] = script16568(int8, int7);
                    int5 = (int5 + ((int10 + int9) + STRINGWIDTH(string0, int13)));
                    break;
                }
            };
        };
        int3 = (int3 + 1);
    };
    if ((int5 >= int1)) {
        return [false, int5];
    };
    return [true, int5];
}