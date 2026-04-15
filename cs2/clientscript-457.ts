//
function script457(int0: unknown_int, int1: component, int2: int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int): void {
    if ((CC_FIND(int1, int2) == 1)) {
        CC_SETONTIMER(callback(script469, -2147483645, -2147483643, (CLIENTCLOCK() + 2)));
        if ((CLIENTCLOCK() >= int6)) {
            CC_SETONRELEASE(callback());
            script1763(int0, int3, 3, int5);
        } else {
            CC_SETONRELEASE(callback(script465, int0, -2147483645, -2147483643, int3, int4, int5, (CLIENTCLOCK() + 1)));
        };
    };
    return;
}