//
function script16924(int0: component, int1: component): void {
    var int2 = IF_GETWIDTH(int0);
    if ((int2 <= 1920)) {
        IF_SETSIZE(0, 0, 1, 1, int1);
        return;
    };
    var int3 = SCALE(int2, 17778, 10000);
    if ((MODULO(int3, 2) != 0)) {
        int3 = (int3 + 1);
    };
    if ((MODULO(int2, 2) != 0)) {
        int2 = (int2 + 1);
    };
    IF_SETSIZE(int2, int3, 0, 0, int1);
    return;
}