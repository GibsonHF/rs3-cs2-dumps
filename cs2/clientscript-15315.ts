//
function script15315(int0: component, int1: int): void {
    var int2 = 0;
    var int3 = IF_GETNEXTSUBID(int0);
    while ((int2 < int3)) {
        if ((CC_FIND(int0, int2) == 1)) {
            CC_SETCOLOUR(int1);
        };
        int2 = (int2 + 1);
    };
    return;
}