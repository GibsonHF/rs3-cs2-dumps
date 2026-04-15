//
function script18045(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, string0: string): [int, int] {
    var int6 = 209 as fontmetrics;
    var int7 = 10;
    var int8 = 6;
    var int9 = 12;
    script2995(int0, int1, ((int2 + (int7 * int4)) - int8), int3, 0, 0, int8, int9, 0, 0, 2100 as dbrow, "-");
    CC_SETTEXTFONT(int6);
    CC_SETCOLOUR(16777215);
    var int1 = (int1 + 1);
    var int10 = script17951(int0, int1, ((int2 + (int7 * int4)) + 3), int3, 0, 0, ((int2 + (int7 * int4)) + 3), 1, 2100 as dbrow, string0, int5, int6);
    CC_SETTEXTFONT(int6);
    CC_SETCOLOUR(16777215);
    int1 = (int1 + 1);
    var int3 = (int3 + int10);
    return [int1, int3];
}