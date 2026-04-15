//
function script4200(int0: int, int1: component): [int, int] {
    var int2 = IF_GETWIDTH(int1);
    var int3 = (int2 / 75);
    var int4 = (((int2 - (5 * 2)) - (int3 * 75)) / (int3 - 1));
    var int5 = 3;
    if ((int2 <= 0)) {
        return [0, 0];
    };
    var int6 = MODULO(int0, int3);
    var int7 = (int0 / int3);
    int6 = (5 + (int6 * (75 + int4)));
    int7 = (5 + (int7 * (75 + int5)));
    return [int6, int7];
}