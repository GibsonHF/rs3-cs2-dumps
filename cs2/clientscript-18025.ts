//
function script18025(int0: int, int1: int, int2: component, int3: int, int4: boolean, int5: int, int6: unknown_int): [int, int] {
    var int7 = script17874(varplayer_11339, int3);
    var int8 = 0;
    var int9 = -1 as dbrow;
    var int10 = -1 as dbrow;
    var int11 = -1 as dbrow;
    var int12 = -1 as dbrow;
    var int13 = -1 as dbrow;
    [int8, int9, int10, int11, int12, int13] = script17878(varplayer_11339, int3);
    var int14 = -1 as dbrow;
    var int15 = -1;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = -1;
    var int20 = -1;
    var int21 = script18023();
    var int22 = script18023();
    var int23 = int21;
    var int24 = script18024();
    var int25 = 0;
    var int26 = 0;
    script10028(int0, int1, (int24 / 2), 0, 0, 1, int24, int22, 1, 0, 0, int24);
    var int27 = int1;
    var int28 = 0;
    var int29 = dbrow_getfield(varplayer_11339, 991264, 0);
    var int1 = (int1 + 1);
    while ((int18 < int8)) {
        int14 = script17877(int18, int9, int10, int11, int12, int13);
        if ((CC_FINDBYCATEGORY(int2, int0, int27) == 1)) {
            script15937(int0, int1, 0, 0, 0, 0, 0, 0, 1, 1);
            int1 = (int1 + 1);
            [int25, int26] = script17895(int3, int18);
            script7858(int25, int26, 0, 0, 0, 0, 0, 0, 1, 1, script17987(int29, int7, int4), "");
            CC_SETOP(1, "Select reward");
            CC_SETONOP(callback(script18000, int14, int7, int3, -2147483645, -2147483643, int18, int8, int6));
            int1 = script17965(int14, int0, int1, int23);
        };
        int18 = (int18 + 1);
    };
    return [int0, int1];
}