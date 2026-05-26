//
function script6841(int0: number, int1: number, int2: number): void {
    var int3 = IF_GETTRANS(88866816);
    var int4 = -1;
    if ((int0 < int1)) {
        int4 = MIN(255, (int3 + int2));
    };
    if ((int0 > int1)) {
        int4 = MAX(0, (int3 - int2));
    };
    IF_SETTRANS(int4, 88866816);
    if ((int4 == int1)) {
        IF_SETONTIMER(callback(), 88866816);
    };
    return;
}