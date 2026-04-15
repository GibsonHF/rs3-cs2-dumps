//
function script17184(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int): [int, int] {
    var int0 = ((int0 - (CC_GETWIDTH() / 2)) - int2);
    var int1 = (((int1 - (CC_GETHEIGHT() / 2)) - 20) - int3);
    int0 = MIN(MAX(int0, 0), (int4 - CC_GETWIDTH()));
    int1 = MIN(MAX(int1, 0), (int5 - CC_GETHEIGHT()));
    return [int0, int1];
}