//
function script20339(int0: int, int1: int, int2: int, int3: int, int4: int, int5: graphic, int6: fontmetrics, int7: int, string0: string): [int, int] {
    if ((int6 == -1 as fontmetrics)) {
        var int6 = script20491(2100 as dbrow);
    };
    var int8 = (16 * int4);
    var int9 = script15891(string0, (((int3 - int8) - 16) - 4), int6, 0);
    script15937(int0, int1++, 0, int2, 0, 0, 0, int9, 1, 0);
    CC_SETNOCLICKTHROUGH(false);
    script7918(int0, int1++, int8, 0, 0, 0, 16, 16, 0, 0, int5);
    script10485(int0, int1++, 0, 0, 2, 0, ((int8 + 16) + 4), 0, 1, 1, 2100 as dbrow, string0);
    CC_SETTEXTFONT(int6);
    if ((int7 != -1)) {
        CC_SETCOLOUR(int7);
    };
    CC_GETDYNAMICLAYER();
    CC_GETDYNAMICLAYER();
    return [int1, ((int2 + int9) + 4)];
}