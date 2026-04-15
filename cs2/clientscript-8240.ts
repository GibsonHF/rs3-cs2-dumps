//
function script8240(int0: struct, int1: obj): string {
    var int2 = -1;
    var int3 = -1;
    if ((int0 != -1 as struct)) {
        int2 = struct_getparam(int0, 3830);
    };
    if ((int1 != -1 as obj)) {
        int3 = item_getparam(int1, 3830);
    };
    if (((int2 == 1) || (int3 == 1))) {
        return "On damaging attacks: ";
    };
    if ((int0 != -1 as struct)) {
        int2 = struct_getparam(int0, 3831);
    };
    if ((int1 != -1 as obj)) {
        int3 = item_getparam(int1, 3831);
    };
    if (((int2 == 1) || (int3 == 1))) {
        return "When damaged: ";
    };
    if ((int0 != -1 as struct)) {
        int2 = struct_getparam(int0, 3832);
    };
    if ((int1 != -1 as obj)) {
        int3 = item_getparam(int1, 3832);
    };
    if (((int2 == 1) || (int3 == 1))) {
        return "Upon killing a target: ";
    };
    if ((int0 != -1 as struct)) {
        int2 = struct_getparam(int0, 3999);
    };
    if ((int1 != -1 as obj)) {
        int3 = item_getparam(int1, 3999);
    };
    if (((int2 == 1) || (int3 == 1))) {
        return "On death: ";
    };
    if ((int0 != -1 as struct)) {
        int2 = struct_getparam(int0, 4029);
    };
    if ((int1 != -1 as obj)) {
        int3 = item_getparam(int1, 4029);
    };
    if (((int2 == 1) || (int3 == 1))) {
        return "On activation: ";
    };
    return "";
}