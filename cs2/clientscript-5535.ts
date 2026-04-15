//
function script5535(int0: unknown_int): unknown_int {
    var int1 = -1;
    var int2 = 0;
    while ((++int1 <= 3)) {
        int2 = (int2 + script5534(int0, int1));
    };
    if ((int2 == 16)) {
        return 1;
    };
    return 0;
}