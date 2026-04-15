//
function script8353(int0: int): unknown_int {
    if ((struct_getparam(script10405(int0), 3521) == false)) {
        return 0;
    };
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int3, int4] = script8718(int0);
    [int1, int2] = script8726(8, int0);
    if (((int3 != int1) || (int4 != int2))) {
        int5 = 0;
        while ((int3 != -1)) {
            int3 = script8719(int3);
        };
        while ((int4 != -1)) {
            int4 = script8720(int4);
        };
        return 1;
    };
    return 0;
}