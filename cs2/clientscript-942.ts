//
function script942(int0: struct, int1: component, int2: int, int3: int, int4: int, int5: int, int6: int, int7: unknown_int): void {
    if ((int0 == -1 as struct)) {
        return;
    };
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    if ((CC_FIND(int1, int2) == 1)) {
        CC_SETHIDE(false);
        CC_SETSIZE(int5, int6, 0, 0);
        CC_SETPOSITION(int3, int4, 0, 0);
        CC_SETONTIMER(callback(script6302, -1, int0, -2147483645, -2147483643, int7));
    };
    return;
}