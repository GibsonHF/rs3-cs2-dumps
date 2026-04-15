//
function script6891(int0: component, int1: int): void {
    var int2 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        int2 = (CC_GETTRANS() + 1);
        if ((int2 >= 255)) {
            CC_DELETE();
            return;
        };
        CC_SETTRANS(int2);
    };
    return;
}