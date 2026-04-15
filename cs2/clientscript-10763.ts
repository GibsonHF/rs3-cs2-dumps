//
function script10763(int0: int, int1: component, int2: unknown_int): unknown_int {
    var int3 = 300;
    if ((int2 == 97386510)) {
        int3 = (350 - (16 * 2));
    };
    var int4 = IF_GETWIDTH(int1);
    if ((int4 < (MIN(int0, int3) + (16 * 2)))) {
        int4 = (MIN(int0, int3) + (16 * 2));
    };
    IF_SETSIZE(int4, IF_GETHEIGHT(int1), 0, 0, int1);
    return 0;
}