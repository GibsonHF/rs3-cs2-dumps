//
function script8360(int0: unknown_int, int1: component, int2: int, int3: component, int4: unknown_int, int5: unknown_int): void {
    if ((((int5 == -1) && (IF_GETSCROLLX(int3) <= 0)) || ((int5 == 1) && (IF_GETSCROLLX(int3) >= (IF_GETSCROLLWIDTH(int3) - IF_GETWIDTH(int3)))))) {
        return;
    };
    if ((CC_FIND(int1, int2) == 1)) {
        CC_SETONCLICKREPEAT(callback(script457, int0, -2147483645, -2147483643, int3, int4, int5, (CLIENTCLOCK() + 10)));
        CC_SETONRELEASE(callback(script465, int0, -2147483645, -2147483643, int3, int4, int5, (CLIENTCLOCK() + 1)));
        CC_SETONTIMER(callback(script469, -2147483645, -2147483643, (CLIENTCLOCK() + 2)));
    };
    return;
}