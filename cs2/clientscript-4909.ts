//
function script4909(int0: coordgrid): [int, int] {
    var int1 = 0;
    var int2 = 0;
    var int3 = 216;
    var int4 = 216;
    var int5 = 127;
    if ((int0 == -1 as coordgrid)) {
        return [0, 0];
    };
    var int6 = COORDX(int0);
    if (((int6 > int5) || (int6 < 0))) {
        return [-1, -1];
    };
    var int7 = (int5 - COORDZ(int0));
    if (((int7 > 127) || (int7 < 0))) {
        return [-1, -1];
    };
    int1 = ((int6 * int3) / int5);
    int2 = ((int7 * int4) / int5);
    return [int1, int2];
}