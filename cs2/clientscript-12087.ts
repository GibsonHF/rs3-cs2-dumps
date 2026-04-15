//
function script12087(int0: int, int1: int, int2: int, int3: int): [int, int, int] {
    var int4 = (int0 - (int2 * 2));
    var int5 = ((int4 + int3) / (int1 + int3));
    if ((int5 <= 1)) {
        return [1, int1, ((int0 - int1) / 2)];
    };
    var int6 = (int4 - (int5 * int1));
    var int7 = (int6 / (int5 - 1));
    int6 = (int6 - (int7 * (int5 - 1)));
    var int8 = (int2 + (int6 / 2));
    return [int5, (int1 + int7), int8];
}