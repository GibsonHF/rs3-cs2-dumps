//
function script9531(int0: component, int1: int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int2 = -1;
    var int1 = MAX(MIN(int1, 255), 0);
    while ((CC_FIND(int0, ++int2) == 1)) {
        CC_SETTRANS(int1);
    };
    return;
}