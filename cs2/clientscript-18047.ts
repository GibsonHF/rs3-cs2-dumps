//
function script18047(int0: component, int1: int, int2: int, int3: int, int4: int, string0: string): [int, int] {
    var int3 = (int3 + 10);
    var int5 = 58 as fontmetrics;
    var int6 = script17951(int0, int1, int2, int3, 0, 0, int2, 1, 2064 as dbrow, string0, int4, int5);
    CC_SETTEXTFONT(int5);
    CC_SETCOLOUR(14734449);
    var int1 = (int1 + 1);
    int3 = (int3 + int6);
    int3 = (int3 + 5);
    return [int1, int3];
}