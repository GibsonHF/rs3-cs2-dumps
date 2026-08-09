//
function script8899(int0: number): void {
    var int1 = -1;
    var int2 = ENUM_GETOUTPUTCOUNT(int0);
    int1 = (int1 + 1);
    while ((int1 < int2)) {
        IF_SETONTIMER(callback(), enum_getvalue(0, 9, int0, int1));
    };
    return;
}