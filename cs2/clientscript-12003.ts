//
function script12003(int0: cs2enum, int1: int): [struct, int, string, graphic, graphic, graphic, int] {
    var int2 = script9101(enum_getvalue(0, 73, int0, int1));
    var int3 = script7083(int2);
    var string0 = "Deactivate";
    var int4 = -1 as graphic;
    var int5 = struct_getparam(int2, 735);
    var int6 = struct_getparam(int2, 736);
    var int7 = struct_getparam(int2, 2807);
    if ((int3 == 1)) {
        string0 = "Activate";
        int4 = 14710 as graphic;
    };
    return [int2, int3, string0, int4, int5, int6, int7];
}