//
function script11832(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    if ((script13749() == 1)) {
        return;
    };
    CC_SETMOUSEOVERCURSOR(194);
    CC_SETDRAGGABLE(int0, -1);
    CC_SETDRAGDEADTIME(1);
    CC_SETDRAGDEADZONE(1);
    CC_SETONDRAG(callback(script11833, CC_GETID(), int0, int1, int2, -2147483647, -2147483646, int3, int4, int5));
    CC_SETONDRAGCOMPLETE(callback(script11834, -2147483641, int2, int0, int1, int6));
    return;
}