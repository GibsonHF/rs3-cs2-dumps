//
function script14736(int0: number, int1: number, int2: number): void {
    if ((int2 == -1)) {
        if (((IF_FIND(int1) == 1) || (CC_FIND(int1, int2) == 1))) {
            script14738(int0);
        };
    } else if ((CC_FIND(int1, int2) == 1)) {
        script14738(int0);
    };
    return;
}