//
function script10762(int0: component, int1: int, int2: int, int3: int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int4 = (IF_GETWIDTH(int0) / 2);
    if ((int1 > -1)) {
        while (((int1 <= int2) && (CC_FIND(int0, int1) == 1))) {
            CC_SETPOSITION((((CC_GETX() + (CC_GETWIDTH() / 2)) - int4) + int3), CC_GETY(), 1, 0);
            var int1 = (int1 + 1);
        };
    };
    return;
}