//
function script17943(int0: component, int1: int, int2: int): void {
    var int3 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        int3 = (CC_GET2DANGLE() + (65536 / int2));
        if ((int3 < 0)) {
            int3 = (65536 + int3);
        } else {
            int3 = MODULO(int3, 65536);
        };
        CC_SET2DANGLE(int3);
    };
    return;
}