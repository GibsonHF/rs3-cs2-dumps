//
function script16821(int0: int, int1: int, int2: int, int3: int, string0: string): [int, int] {
    var int4 = script15891(string0, (int3 - (16 + (2 * 2))), 207 as fontmetrics, 0);
    script7918(int0, int2, 0, int1, 0, 0, 16, 16, 0, 0, 21341 as graphic);
    var int2 = (int2 + 1);
    script10485(int0, int2, (CC_GETWIDTH() + 2), int1, 0, 0, (CC_GETWIDTH() + (2 * 2)), int4, 1, 0, 2100 as dbrow, string0);
    int2 = (int2 + 1);
    var int1 = (int1 + int4);
    return [int1, int2];
}