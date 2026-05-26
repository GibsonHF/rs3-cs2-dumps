//
function script17812(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, string0: string): number {
    var int7 = (IF_GETWIDTH(int0) - 16);
    var int8 = 0;
    if ((int6 != -1)) {
        script2994(int0, IF_GETNEXTSUBID(int0), int8, int1, 0, 0, 18, 18, 0, 0, int6);
        int8 = (int8 + CC_GETWIDTH());
    };
    if ((int3 != -1)) {
        script2994(int0, IF_GETNEXTSUBID(int0), int8, int1, 0, 0, 18, 18, 0, 0, int3);
        int8 = (int8 + CC_GETWIDTH());
    };
    if ((int4 != -1)) {
        script9731(int0, IF_GETNEXTSUBID(int0), int8, int1, 0, 0, 18, 18, 0, 0, int4, -1);
        int8 = (int8 + CC_GETWIDTH());
    };
    var string0 = strconcat(" ", string0);
    script2995(int0, IF_GETNEXTSUBID(int0), int8, int1, 0, 0, (int7 - int8), (18 * PARAHEIGHT(string0, (int7 - int8), 207 as fontmetrics)), 0, 0, int2, string0);
    script2731(int0, CC_GETID(), int5);
    return (CC_GETHEIGHT() + 4);
}