//
function script20900(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number): [number, number, number] {
    var int11 = script20901(int7);
    if ((int11 != 0)) {
        return [int2, int3, int11];
    };
    script7852(int0, IF_GETNEXTSUBID(int0), int2, int3, 0, 0, int4, int5, 0, 0, callback(script4476));
    CC_SETOP(1, "Select");
    CC_SETONOP(callback(script11703, int7, int10));
    CC_SETONMOUSEREPEAT(callback(script9564, int7, -2147483645, -2147483643));
    if ((int6 == int7)) {
        script7872(1, 1, 1, 1);
        varclient_6790 = int3;
    } else {
        script7872(1, 1, 1, 0);
    };
    script9731(int1, IF_GETNEXTSUBID(int1), (int2 + 5), (int3 + int8), 0, 0, 36, 32, 0, 0, -1, 1);
    cc_setparam(4677, int7);
    script20480(int0, IF_GETNEXTSUBID(int0), ((int2 + 5) + 36), (int3 + 4), 0, 0, int9, (int5 - (4 * 2)), 0, 0, 2101, script18300(int7), -1, 0, 1);
    CC_SETMAXLINES(3);
    CC_SETTEXTFONT(206 as fontmetrics);
    if ((INV_TOTAL(890 as inv, int7) > 0)) {
        script2994(int0, IF_GETNEXTSUBID(int0), (int2 + (5 / 2)), (int3 + (5 / 2)), 0, 0, 14, 14, 0, 0, 23794);
    };
    if ((((int2 + int4) + 5) >= (IF_GETWIDTH(int0) - 5))) {
        var int2 = 5;
        var int3 = ((int3 + int5) + 5);
    } else {
        int2 = ((int2 + int4) + 5);
    };
    return [int2, int3, int11];
}