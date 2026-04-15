//
function script14763(int0: component, int1: unknown_int, int2: dbrow, int3: int, int4: int, int5: int, int6: int): int {
    var int7 = DB_GETFIELDCOUNT(int2, 344272);
    var int8 = -1 as obj;
    var int9 = 0;
    var int10 = 11952 as struct;
    var int11 = 40;
    var int12 = 36;
    var int13 = 36;
    var int14 = 32;
    if ((script6431() == true)) {
        int10 = 11954 as struct;
        int11 = 44;
        int12 = 44;
        int13 = 44;
        int14 = 39;
    };
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    [int15, int16, int17] = script12087(int5, int11, 1, 2);
    var int18 = 0;
    var int19 = 0;
    var int20 = -1;
    while ((++int20 < int7)) {
        int8 = dbrow_getfield(int2, 344272, int20);
        if ((int8 != -1 as obj)) {
            int18 = ((int3 + int17) + (MODULO(int20, int15) * int16));
            int19 = (int4 + ((int20 / int15) * (int12 + 2)));
            script14764(int0, int1, int8, script14496(int2, int20), int18, int19, int10, int11, int12, int13, int14, (int6 + int20));
        };
    };
    return (int19 + int12);
}