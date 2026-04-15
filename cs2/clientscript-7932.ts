//
function script7932(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    if ((script6431() == true)) {
        [int0, int1, int2, int3] = WINDOW_GETINSETS();
        int2 = (int2 + 5);
        IF_SETPOSITION(int0, int1, 0, 0, comp(1420, 43));
        IF_SETSIZE((int0 + int2), (int1 + int3), 1, 1, comp(1420, 43));
    };
    script8869();
    return;
}