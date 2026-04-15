//
function script8377(int0: component, int1: int): int {
    if ((int0 == comp(-1, 65535))) {
        return -1;
    };
    var int2 = ((script8403(int0) + IF_GETSCROLLX(int0)) / int1);
    int2 = MAX(0, MIN(int2, script8374(int0)));
    return int2;
}