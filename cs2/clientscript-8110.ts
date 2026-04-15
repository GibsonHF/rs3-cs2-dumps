//
function script8110(int0: int): void {
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = script8138(int0);
    if (((int1 == -1) || (int2 == -1))) {
        return;
    };
    var int3 = 0;
    if (((int2 == 1) || (int2 == 3))) {
        int3 = 1;
    };
    if ((int0 == 1003)) {
        script8111(int1, int2);
        script13765(int1, int2);
        script8115(int1, int2);
        script8114(int0, int1, int2);
        script8112(int1, int3);
        script8116(int3);
        script8122(comp(1430, 7), 0);
        script8123(comp(1430, 14), 0);
        script8124(comp(1430, 20), 0);
        script8125(comp(1430, 55), 0);
    } else {
        script11807(int0, int1, int2);
        script8114(int0, int1, int2);
    };
    return;
}