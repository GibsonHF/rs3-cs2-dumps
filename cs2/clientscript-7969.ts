//
function script7969(int0: number, int1: number): void {
    if ((CC_FIND(int0, int1) == 1)) {
        script6739(15);
        CC_SETONDRAG(callback());
    } else if (((int1 == -1) && (IF_FIND(int0) == 1))) {
        script6739(15);
        CC_SETONDRAG(callback());
    };
    return;
}