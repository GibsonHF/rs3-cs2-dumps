//
function script8055(int0: component, int1: int, int2: int, int3: int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int3 > 0)) {
            CC_SETONTIMER(callback(script8055, -2147483645, -2147483643, int2, (int3 - 1)));
        } else {
            script8059(int2);
            CC_SETONTIMER(callback());
        };
    };
    return;
}