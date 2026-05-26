//
function script3832(int0: number, int1: number, int2: number, int3: number): number {
    if ((CC_FINDBYCATEGORY(int0, int1, int2) == 1)) {
        CC_SETPOSITION(CC_GETX(), (CC_GETY() + int3), 0, 0);
        return CC_GETY();
    };
    return -1;
}