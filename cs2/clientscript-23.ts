//
function script23(int0: int, int1: int, int2: int): [int, int] {
    var int3 = 5;
    if ((int0 >= (int3 * 4))) {
        var int1 = int3;
        var int2 = script24(int1, int0);
    } else {
        while ((int0 > (int1 * int2))) {
            if (((int1 < int3) && ((int2 + 1) == int1))) {
                int1 = (int1 + 1);
            } else {
                int2 = (int2 + 1);
            };
        };
    };
    return [int1, int2];
}