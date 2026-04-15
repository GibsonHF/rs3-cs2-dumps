//
function script8256(int0: int): void {
    var int1 = -1;
    var int2 = -1 as struct;
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(7717 as cs2enum);
    while ((int3 < int4)) {
        int1 = enum_getvalue(0, 0, 7717 as cs2enum, int3);
        int2 = script10405(int1);
        if ((((int2 != -1 as struct) && (script12616(int2) == 0)) && (struct_getparam(int2, 3539) == 1))) {
            script8257(int0, 0, struct_getparam(int2, 3504));
            script8257(int0, 0, struct_getparam(int2, 3506));
            script8257(int0, 0, struct_getparam(int2, 3508));
            script8257(int0, 0, struct_getparam(int2, 3509));
            script8257(int0, 0, struct_getparam(int2, 3510));
        };
        int3 = (int3 + 1);
    };
    return;
}