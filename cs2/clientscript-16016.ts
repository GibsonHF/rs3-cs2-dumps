//
function script16016(int0: component, int1: int): void {
    var int2 = (IF_GET2DANGLE(int0) + (65536 / int1));
    if ((int2 < 0)) {
        int2 = (65536 + int2);
    } else {
        int2 = MODULO(int2, 65536);
    };
    IF_SET2DANGLE(int2, int0);
    return;
}