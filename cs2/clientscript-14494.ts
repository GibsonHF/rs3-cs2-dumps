//
function script14494(): int {
    var int0 = ENUM_GETOUTPUTCOUNT(9498 as cs2enum);
    var int1 = 0;
    var int2 = -1;
    while ((++int2 < int0)) {
        if ((script14503(enum_getvalue(0, 73, 9498 as cs2enum, int2)) != 0)) {
            int1 = (int1 + 1);
        };
    };
    return int1;
}