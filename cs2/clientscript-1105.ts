//
function script1105(int0: number): number {
    var int1 = 60;
    var int2 = 30;
    if ((script6431() == 1)) {
        int2 = 40;
        int1 = (int1 + 30);
    };
    IF_SETPOSITION(0, int0, 0, 0, 5963791);
    IF_SETSIZE(0, int1, 1, 0, 5963791);
    IF_SETPOSITION(0, 0, 0, 0, 5963803);
    IF_SETSIZE(0, int2, 1, 0, 5963803);
    IF_SETPOSITION(0, int2, 0, 0, 5963809);
    IF_SETSIZE(0, int2, 1, 0, 5963809);
    return ((int0 + int1) - 4);
}