//
function script14115(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int1 == -1)) {
        if (((IF_FIND(int0) == 1) || (CC_FIND(int0, int1) == 1))) {
            script16575(int2, int3, int4);
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        script16575(int2, int3, int4);
    };
    return;
}