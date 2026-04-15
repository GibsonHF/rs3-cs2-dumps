//
function script12528(): void {
    var int0 = 5;
    var int1 = 0;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    while ((int1 < 5)) {
        [int2, int3] = script12527(int1);
        if ((IF_GETHIDE(int2) == false)) {
            IF_SETPOSITION(0, int0, 1, 0, int2);
            int0 = ((int0 + IF_GETHEIGHT(int2)) + 5);
        };
        int1 = (int1 + 1);
    };
    return;
}