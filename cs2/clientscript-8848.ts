//
function script8848(): void {
    if ((varclient_2872 == -1 as cs2enum)) {
        return;
    };
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(varclient_2872);
    var int2 = 0;
    while ((int0 < int1)) {
        int2 = enum_getvalue(0, 0, varclient_2872, int0);
        if ((enum_getreversecount(0, 7689 as cs2enum, int2) != 0)) {
            script8843(int2, 0);
        };
        int0 = (int0 + 1);
    };
    return;
}