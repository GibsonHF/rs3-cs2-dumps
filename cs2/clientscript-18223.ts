//
function script18223(int0: component, int1: int, int2: int, int3: int, int4: unknown_int): void {
    var int5 = 0;
    var int6 = -1 as obj;
    var int7 = 81;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    [int5, int6] = script18150(int3, int2);
    [int9, int10] = script18229(int2, int4);
    if ((int4 == 3)) {
        int7 = 102;
        int8 = 11;
        script10485(int1, 2, 0, 7, 0, 0, 0, 16, 1, 0, 2100 as dbrow, inttostring(int1, 10));
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXTFONT(169 as fontmetrics);
        if ((int9 == 2)) {
            CC_SETCOLOUR(0);
        } else {
            CC_SETTEXTSHADOW(true);
        };
    };
    var string0 = "";
    if ((((int6 != -1 as obj) && (int5 > 0)) && (CC_FINDBYCATEGORY(int0, int1, 0) == 1))) {
        script7918(int1, 1, 0, 0, 0, 0, 81, int7, 0, 0, script18226(int9, int4));
        script9861(int1, 3, 2, int8, 1, 1, 44, 39, 0, 0, int6, int5, 2, 0);
        CC_SETOP(1, "Info");
        CC_SETOPBASE(`${script4033(int6)}${OC_NAME(int6)}`);
        CC_SETONOP(callback(script18227, int6, int5));
        CC_SETMOUSEOVERCURSOR(172);
        string0 = `${inttostring(int5, 10)} x ${OC_NAME(int6)}`;
        if ((CC_FINDBYCATEGORY(int0, int1, 3) == 1)) {
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        };
        script7918(int1, 4, 6, 5, 0, 2, 32, 32, 0, 0, script18225(int9, int4));
        if ((int1 > 1)) {
            script18224(int1, int9);
        };
    };
    return;
}