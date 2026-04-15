//
function script4161(int0: component, int1: int): void {
    var int2 = 0;
    while ((int2 < IF_GETNEXTSUBID(int0))) {
        if ((CC_FIND(int0, int2) == 1)) {
            CC_SETTRANS(int1);
        };
        int2 = (int2 + 1);
    };
    return;
}