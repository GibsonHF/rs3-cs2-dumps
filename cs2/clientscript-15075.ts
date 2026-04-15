//
function script15075(int0: int, int1: int, int2: int, int3: int, string0: string): [int, int] {
    var int4 = script15891(string0, (int3 - 20), 207 as fontmetrics, 19);
    script10485(0, int0++, int1, int2, 0, 0, 20, int4, 1, 0, 2100 as dbrow, string0);
    CC_SETTEXTALIGN(0, 0, 19);
    CC_SETCOLOUR(16777215);
    return [int0, int4];
}