//
function script1642(int0: int): [int, int, int] {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    if ((int0 >= 43200)) {
        int1 = (int0 / 43200);
        var int0 = (int0 - (int1 * 43200));
    };
    if ((int0 >= 10080)) {
        int2 = (int0 / 10080);
        int0 = (int0 - (int2 * 10080));
    };
    if ((int0 >= 1440)) {
        int3 = (int0 / 10080);
        int0 = (int0 - (int3 * 10080));
    };
    return [int1, int2, int3];
}