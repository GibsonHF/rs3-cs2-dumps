//
function script19772(int0: int, int1: int): dbrow {
    if (((int0 < 0) || (int0 > 3))) {
        return -1 as dbrow;
    };
    if (((int1 < 0) || (int1 > 3))) {
        return -1 as dbrow;
    };
    return script14596(script14614(((int0 * 3) + int1)));
}