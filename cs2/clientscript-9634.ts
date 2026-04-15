//
function script9634(int0: component, int1: int, int2: int): void {
    CC_SETPOSITION(CC_GETX(), (CC_GETY() + int2), 0, 0);
    var int3 = 1;
    while (((int3 < 5) && (CC_FIND(int0, (int1 + int3)) == 1))) {
        CC_SETPOSITION(CC_GETX(), (CC_GETY() + int2), 0, 0);
        int3 = (int3 + 1);
    };
    return;
}