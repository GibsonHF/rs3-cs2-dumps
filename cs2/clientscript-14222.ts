//
function script14222(int0: component, int1: cs2enum): void {
    var int2 = 29;
    var int3 = 1;
    var int4 = (int2 + int3);
    var int5 = (IF_GETWIDTH(int0) - int4);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    while ((int8 < ENUM_GETOUTPUTCOUNT(int1))) {
        IF_SETPOSITION(int6, int7, 0, 0, enum_getvalue(0, 9, int1, int8));
        int6 = (int6 + int4);
        if ((int6 > int5)) {
            int6 = 0;
            int7 = (int7 + int4);
        };
        int8 = (int8 + 1);
    };
    return;
}