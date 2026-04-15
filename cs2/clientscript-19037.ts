//
function script19037(int0: component, int1: int): void {
    var int2 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        int2 = MAX(0, (CC_GETTRANS() + 3));
        CC_SETTRANS(int2);
        if ((int2 >= 255)) {
            CC_DELETE();
        };
    };
    return;
}