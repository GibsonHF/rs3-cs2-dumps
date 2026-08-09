//
function script7193(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): [number, number, number] {
    var int6 = COS_DEG(0);
    SIN_DEG(int4);
    var int7 = SCALE(int6, SCALE(COS_DEG(int5), int6, int0));
    SIN_DEG(int5);
    var int8 = SCALE(int6, int0);
    var int9 = SCALE(COS_DEG(int4), int6, SCALE(COS_DEG(int5), int6, int0));
    return [(int1 + int7), (int2 + int8), (int3 + int9)];
}