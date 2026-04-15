//
function script8399(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int): int {
    var int8 = 0;
    var int9 = 0;
    int8 = MAX(0, (MIN(int2, int6) - MAX(int0, int4)));
    int9 = MAX(0, (MIN(int3, int7) - MAX(int1, int5)));
    return (int8 * int9);
}