//
function script7193(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int): [int, int, int] {
    stack(COS_DEG(0));
    var int6 = [];
    SIN_DEG(stack(), int4);
    stack(int6);
    stack(COS_DEG(int5));
    var int7 = SCALE(SCALE(int6, int0));
    SIN_DEG(stack(), int5);
    var int8 = SCALE(stack(), int6, int0);
    stack(COS_DEG(int4));
    stack(int6);
    stack(COS_DEG(int5));
    var int9 = SCALE(SCALE(int6, int0));
    return [(int1 + int7), (int2 + int8), (int3 + int9)];
}