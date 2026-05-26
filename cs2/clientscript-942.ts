//
function script942(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if ((int0 == -1)) {
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