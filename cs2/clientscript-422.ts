//
function script422(int0: int, int1: int): [int, int] {
    var int2 = 5;
    var int3 = 5;
    if (((int0 <= int2) || (int1 <= int3))) {
        return [int2, int3];
    };
    if ((int0 > int1)) {
        int2 = (int2 * (int0 / int1));
    } else if ((int1 > int0)) {
        int3 = (int3 * (int1 / int0));
    };
    return [int2, int3];
}