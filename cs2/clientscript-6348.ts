//
function script6348(int0: int): [component, int, int] {
    var int1 = comp(-1, 65535);
    var int2 = -1;
    var int3 = 0;
    [int1, int2, int3] = script6380(int0);
    if (((int1 == comp(-1, 65535)) && (int3 == -1))) {
        return [comp(-1, 65535), -1, -1];
    };
    var int4 = comp(-1, 65535);
    var int5 = -1;
    [int4, int5] = script6349(int1, int2, int3);
    return [int4, int5, int3];
}