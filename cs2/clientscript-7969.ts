//
function script7969(int0: component, int1: int): void {
    if (((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1)))) {
        script6739(15);
        CC_SETONDRAG(callback());
    };
    return;
}