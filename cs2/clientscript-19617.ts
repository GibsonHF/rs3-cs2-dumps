//
function script19617(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string): [number, number] {
    var int5 = (16 * int4);
    var int6 = script20478(string0, (((int3 - int5) - 16) - 4), 2100, 0);
    stack(int0);
    stack(int1);
    var int1 = (int1 + 1);
    script15937(0, int2, 0, 0, 0, int6, 1, 0);
    CC_SETNOCLICKTHROUGH(false);
    stack(int0);
    stack(int1);
    int1 = (int1 + 1);
    script7918(int5, 0, 0, 0, 16, 16, 0, 0, 21652);
    stack(int0);
    stack(int1);
    int1 = (int1 + 1);
    script10485(0, 0, 2, 0, ((int5 + 16) + 4), 0, 1, 1, 2100, string0);
    CC_GETDYNAMICLAYER();
    CC_GETDYNAMICLAYER();
    return [int1, ((int2 + int6) + 4)];
}