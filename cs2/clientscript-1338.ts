//
function script1338(int0: int, int1: int, int2: int, int3: int, int4: int): int {
    var int5 = (int2 - int1);
    if ((int5 <= 0)) {
        return int3;
    };
    var int6 = (int4 - int3);
    if ((int6 <= 0)) {
        return int3;
    };
    return ((((int0 - int1) * int6) / int5) + int3);
}