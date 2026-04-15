//
function script14257(int0: component, int1: cs2enum): void {
    var int2 = -1;
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(int1);
    var int5 = -1;
    while ((int3 < int4)) {
        if ((IF_GETPARENTLAYER(enum_getvalue(0, 9, int1, int3)) == int0)) {
            int2 = int3;
            int3 = int4;
        };
        int3 = (int3 + 1);
    };
    script14258(int2, int1);
    return;
}