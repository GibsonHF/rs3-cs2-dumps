//
function script18422(int0: struct): int {
    if ((int0 == -1 as struct)) {
        var int0 = script18417();
    };
    var int1 = -1 as var_reference;
    if ((int0 != -1 as struct)) {
        int1 = struct_getparam(int0, 9066);
        if ((int1 != -1 as var_reference)) {
            return WORLDMAP_GETDISPLAYCOORD(int1);
        };
    };
    return 0;
}