//
function script13164(int0: int): int {
    var int1 = enum_getvalue(0, 26, 12223 as cs2enum, varclient_5938);
    if ((int1 == -1 as cs2enum)) {
        return -1;
    };
    if ((enum_getreversecount(0, int1, int0) > 0)) {
        return enum_getreverseindex(0, 0, int1, int0, 0);
    };
    return -1;
}