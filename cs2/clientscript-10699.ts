//
function script10699(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if (((varbitplayer_22875 == int3) || (varbitplayer_22875 == int4))) {
        return;
    };
    if ((int1 == -1)) {
        if (((IF_FIND(int0) == 1) || (CC_FIND(int0, int1) == 1))) {
            script10643(int2);
        };
    } else if ((CC_FIND(int0, int1) == 1)) {
        script10643(int2);
    };
    return;
}