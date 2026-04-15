//
function script14493(): int {
    var int0 = ENUM_GETOUTPUTCOUNT(9496 as cs2enum);
    var int1 = 0;
    var int2 = -1;
    while ((++int2 < int0)) {
        if ((script14588(struct_getparam(enum_getvalue(0, 73, 9496 as cs2enum, int2), 6576)) == 1)) {
            int1 = (int1 + 1);
        };
    };
    return int1;
}