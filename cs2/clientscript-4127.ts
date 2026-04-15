//[proc,rgb_to_hsl]
function script4127(int0: int, int1: int, int2: int): [int, int, int] {
    var int3 = MIN(int0, MIN(int1, int2));
    var int4 = MAX(int0, MAX(int1, int2));
    var int5 = (int4 - int3);
    var int6 = 0;
    var int7 = 0;
    var int8 = ((int3 + int4) / 2);
    if ((int5 != 0)) {
        if ((int8 < 128)) {
            int7 = SCALE(int5, (2 * int8), 255);
        } else {
            int7 = SCALE(int5, (510 - (2 * int8)), 255);
        };
        if ((int0 == int4)) {
            int6 = SCALE(MODULO((SCALE((int1 - int2), int5, 10000) + 60000), 60000), 10000, 60);
        };
        if ((int1 == int4)) {
            int6 = SCALE((SCALE((int2 - int0), int5, 10000) + 20000), 10000, 60);
        };
        if ((int2 == int4)) {
            int6 = SCALE((SCALE((int0 - int1), int5, 10000) + 40000), 10000, 60);
        };
    };
    return [int6, int7, int8];
}