//
function script19466(int0: number, int1: number, string0: string): number {
    var int2 = 1;
    var int3 = 32;
    var int4 = (int3 + 10);
    var int5 = 24;
    var int6 = 17010;
    if ((int1 == 0)) {
        int6 = 17029;
        int3 = int4;
    };
    stack(int0);
    stack(int2);
    int2 = (int2 + 1);
    script15937(0, 0, 0, 0, 0, 32, 1, 0);
    stack(int0);
    stack(int2);
    int2 = (int2 + 1);
    script7858(0, 0, 0, 0, 0, 0, 1, 1, 4476, string0);
    CC_SETOP(1, "Toggle");
    CC_SETONOP(callback(script19467, int0));
    stack(int0);
    stack(int2);
    int2 = (int2 + 1);
    script7918(10, 0, 2, 1, int5, int5, 0, 0, int6);
    CC_GETDYNAMICLAYER();
    CC_GETDYNAMICLAYER();
    stack(int0);
    stack(int2);
    int2 = (int2 + 1);
    script15937(10, int4, 0, 0, 10, int4, 1, 1);
    return int3;
}