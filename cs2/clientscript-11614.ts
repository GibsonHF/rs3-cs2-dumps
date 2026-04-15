//
function script11614(int0: struct): void {
    var int1 = struct_getparam(int0, 8671);
    var int2 = struct_getparam(int0, 8672);
    var int3 = 1;
    var int4 = -1 as model;
    if ((int1 != -1 as cs2enum)) {
        while ((int3 <= 7)) {
            int4 = enum_getvalue(0, 31, int1, int3);
            if (((int4 != -1 as model) && (int4 != 88196 as model))) {
                IF_NPC_SETCUSTOMBODYMODEL(int3, int4, 58392596);
            } else if ((int2 != -1 as cs2enum)) {
                int4 = enum_getvalue(0, 31, int2, int3);
                if (((int4 != -1 as model) && (int4 != 88196 as model))) {
                    IF_NPC_SETCUSTOMBODYMODEL(int3, int4, 58392596);
                };
            };
            int3 = (int3 + 1);
        };
    };
    var int5 = struct_getparam(int0, 8673);
    if ((int5 != -1 as material)) {
        IF_NPC_SETCUSTOMRETEX(4, int5, 58392596);
    };
    return;
}