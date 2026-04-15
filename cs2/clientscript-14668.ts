//
function script14668(int0: int, int1: int): unknown_int {
    var int2 = -1 as dbrow;
    var int3 = script14662();
    var int4 = 0;
    while ((++int4 <= int3)) {
        int2 = script14655(int0, int4);
        if (((int2 != -1 as dbrow) && (script14680(int2) == int1))) {
            return 1;
        };
    };
    return 0;
}