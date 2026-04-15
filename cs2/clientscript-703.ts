//
function script703(int0: component, int1: int, int2: component, int3: int): void {
    var int4 = 0;
    var int5 = 0;
    if (((CC_FIND(int0, int1) == 1) && (CC_FIND[1](int2, int3) == 1))) {
        int4 = CC_GETX();
        int5 = CC_GETY();
        CC_SETPOSITION(CC_GETX[1](), CC_GETY[1](), 0, 0);
        CC_SETPOSITION[1](int4, int5, 0, 0);
    };
    return;
}