//
function script8139(int0: int, int1: int, int2: int, int3: int, int4: int): void {
    var int5 = 0;
    var int6 = 0;
    if (((int1 == -1) || (int3 == -1))) {
        return;
    };
    if ((int2 == -1)) {
        var int2 = int1;
    };
    if ((int4 == -1)) {
        var int4 = int3;
    };
    [int5, int6] = script8140(int0, int2, int4);
    if ((script8142(int0, int5, int6) == 1)) {
        script8705(int0);
        script8390(int0);
    } else {
        [int5, int6] = script8140(int0, int1, int3);
        script8142(int0, int5, int6);
    };
    return;
}