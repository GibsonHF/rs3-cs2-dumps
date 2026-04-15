//[proc,clan_motif_decode]
function script4383(int0: int, int1: int, int2: unknown_int): [material, material] {
    var int3 = enum_getvalue(0, 102, 3685 as cs2enum, int0);
    var int4 = enum_getvalue(0, 102, 3685 as cs2enum, int1);
    if (((int2 == 1) && ((varbitclansettings_8809 == 1) || (ACTIVECLANSETTINGS_GETAFFINEDCOUNT() < 5)))) {
        int3 = 665 as material;
        int4 = 740 as material;
    } else {
        if ((int3 == -1 as material)) {
            int3 = 665 as material;
        };
        if ((int4 == -1 as material)) {
            int4 = 740 as material;
        };
    };
    return [int3, int4];
}