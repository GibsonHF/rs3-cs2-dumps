//
function script2956(): [int, int, int, int] {
    if ((script6431() == false)) {
        return [0, 0, 0, 0];
    };
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int0, int1, int2, int3] = WINDOW_GETINSETS();
    int0 = (int0 + 5);
    int1 = (int1 + 5);
    int2 = (int2 + 5);
    int3 = (int3 + 5);
    return [int0, int1, int2, int3];
}