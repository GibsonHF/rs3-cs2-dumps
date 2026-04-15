//
function script5788(): [int, int] {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    [int0, int1] = script5787(15);
    int0 = int1;
    [int2, int1] = script5787(1);
    var int3 = script14337();
    if ((int3 > int1)) {
        return [int0, int3];
    };
    return [int0, MIN(int1, int3)];
}