//
function script12313(int0: int, int1: int, int2: int, int3: int): [int, int] {
    if (((int3 > 0) && (int1 > (2147483647 - int3)))) {
        return [2147483647, 2147483647];
    };
    if (((int3 < 0) && (int1 < (-2147483648 - int3)))) {
        return [-2147483648, -2147483648];
    };
    var int1 = (int1 + int3);
    var [int0, int1] = script12312(int0, int1, int2);
    return [int0, int1];
}