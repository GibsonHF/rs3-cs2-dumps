//
function script8706(int0: int): void {
    var int1 = script10405(int0);
    if (((int1 == -1 as struct) || (struct_getparam(int1, 3519) == false))) {
        return;
    };
    var int2 = 0;
    var int3 = -1 as struct;
    var int4 = 0;
    var int5 = ENUM_GETOUTPUTCOUNT(7717 as cs2enum);
    while ((int4 < int5)) {
        int2 = enum_getvalue(0, 0, 7717 as cs2enum, int4);
        int3 = script10405(int2);
        if (((int3 != -1 as struct) && (struct_getparam(int3, 3520) == int0))) {
            script8705(int2);
        };
        int4 = (int4 + 1);
    };
    return;
}