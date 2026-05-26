//
function script8054(int0: number, int1: number, int2: number, int3: number): void {
    if ((int0 != -1)) {
        script8058(int0, int1, -1, -1, int2);
        script8063(int2);
        if ((CC_FIND(int0, int1) == 1)) {
            CC_SETONTIMER(callback(script8055, -2147483645, -2147483643, int2, int3));
        } else if ((IF_FIND(int0) == 1)) {
            CC_SETONTIMER(callback(script13872, -2147483645, int2, int3));
        };
    };
    return;
}