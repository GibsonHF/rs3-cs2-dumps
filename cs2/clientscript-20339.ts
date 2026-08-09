//
function script20339(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, string0: string): [number, number] {
    if ((int6 == -1 as fontmetrics)) {
        var int6 = script20491(2100);
    };
    var int8 = (16 * int4);
    var int9 = script15891(string0, (((int3 - int8) - 16) - 4), int6, 0);
    stack(int0);
    stack(int1);
    var int1 = (int1 + 1);
    script15937(0, int2, 0, 0, 0, int9, 1, 0);
    CC_SETNOCLICKTHROUGH(false);
    stack(int0);
    stack(int1);
    int1 = (int1 + 1);
    script7918(int8, 0, 0, 0, 16, 16, 0, 0, int5);
    stack(int0);
    stack(int1);
    int1 = (int1 + 1);
    script10485(0, 0, 2, 0, ((int8 + 16) + 4), 0, 1, 1, 2100, string0);
    CC_SETTEXTFONT(int6);
    if ((int7 != -1)) {
        CC_SETCOLOUR(int7);
    };
    CC_GETDYNAMICLAYER();
    CC_GETDYNAMICLAYER();
    return [int1, ((int2 + int9) + 4)];
}