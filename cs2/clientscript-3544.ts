//
function script3544(int0: component, int1: int, int2: int, int3: int): int {
    if ((CC_FINDBYCATEGORY(int0, int1, int2) == 1)) {
        CC_SETPOSITION((CC_GETX() + int3), CC_GETY(), 0, 0);
        return CC_GETX();
    };
    return -1;
}