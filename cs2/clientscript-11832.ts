//
function script11832(int0: component, int1: component, int2: unknown_int, int3: int, int4: int, int5: int, int6: unknown_int): void {
    if ((script13749() == true)) {
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