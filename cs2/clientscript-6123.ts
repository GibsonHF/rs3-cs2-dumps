//
function script6123(int0: number, int1: number, int2: number): void {
    var int3 = IF_GETY(int0);
    if ((int3 > int1)) {
        int3 = (int3 - int2);
        if ((int3 <= int1)) {
            int3 = int1;
            IF_SETONTIMER(callback(), int0);
        };
    } else {
        int3 = (int3 + int2);
        if ((int3 >= int1)) {
            int3 = int1;
            IF_SETONTIMER(callback(), int0);
        };
    };
    IF_SETPOSITION(IF_GETX(int0), int3, 0, 0, int0);
    return;
}