//
function script8804(int0: component, int1: int, int2: int): void {
    if ((CLIENTCLOCK() > int2)) {
        script8808();
        return;
    };
    var int3 = 1;
    if ((int1 >= 0)) {
        if ((CC_FIND(int0, int1) == 1)) {
            int3 = script6351();
        } else {
            int3 = 0;
        };
    } else {
        int3 = script6352(int0);
    };
    if ((int3 == 0)) {
        script8808();
    };
    return;
}