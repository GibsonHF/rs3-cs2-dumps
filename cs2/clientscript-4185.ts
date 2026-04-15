//
function script4185(int0: inv, int1: int, int2: int, int3: component, int4: component, int5: unknown_int, string0: unknown_string): int {
    var int6 = INV_SIZE(int0);
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = -1 as obj;
    var int11 = -1 as dbrow;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    while ((int7 <= int6)) {
        [int10, int11, int12] = script4195(int0, int7, int1, int2);
        if ((int12 == 1)) {
            [int13, int14] = script4200(int9, int3);
            int8 = script4196(int13, int14, int3, int4, int8, int0, int7, int11, string0, int5);
            int9 = (int9 + 1);
        } else {
            int8 = script4198(int4, int8);
        };
        int7 = (int7 + 1);
    };
    return int14;
}