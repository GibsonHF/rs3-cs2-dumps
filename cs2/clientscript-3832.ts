//
function script3832(int0: component, int1: int, int2: int, int3: int): int {
    if ((CC_FINDBYCATEGORY(int0, int1, int2) == 1)) {
        CC_SETPOSITION(CC_GETX(), (CC_GETY() + int3), 0, 0);
        return CC_GETY();
    };
    return -1;
}