//
function script19617(int0: int, int1: int, int2: int, int3: int, int4: int, string0: string): [int, int] {
    var int5 = (16 * int4);
    var int6 = script20478(string0, (((int3 - int5) - 16) - 4), 2100 as dbrow, 0);
    script15937(int0, int1++, 0, int2, 0, 0, 0, int6, 1, 0);
    CC_SETNOCLICKTHROUGH(false);
    script7918(int0, int1++, int5, 0, 0, 0, 16, 16, 0, 0, 21652 as graphic);
    script10485(int0, int1++, 0, 0, 2, 0, ((int5 + 16) + 4), 0, 1, 1, 2100 as dbrow, string0);
    CC_GETDYNAMICLAYER();
    CC_GETDYNAMICLAYER();
    return [int1, ((int2 + int6) + 4)];
}