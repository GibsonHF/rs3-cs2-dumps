//
function script17184(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): [number, number] {
    var int0 = ((int0 - (CC_GETWIDTH() / 2)) - int2);
    var int1 = (((int1 - (CC_GETHEIGHT() / 2)) - 20) - int3);
    int0 = MIN(MAX(int0, 0), (int4 - CC_GETWIDTH()));
    int1 = MIN(MAX(int1, 0), (int5 - CC_GETHEIGHT()));
    return [int0, int1];
}