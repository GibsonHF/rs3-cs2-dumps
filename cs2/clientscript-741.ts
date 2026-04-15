//
function script741(): void {
    var int0 = varplayer_2711;
    if ((int0 == 0)) {
        return;
    };
    var int1 = script739(int0);
    var int2 = enum_getvalue(0, 31, 1151 as cs2enum, int1);
    if ((TESTBIT(varclient_104, int1) == 1)) {
        return;
    };
    if ((((int0 == varclient_99) || (int0 == varclient_100)) || (int0 == varclient_101))) {
        return;
    };
    IF_SETMODEL(int2, enum_getvalue(0, 9, 1153 as cs2enum, int0));
    script737(int0);
    if ((varclient_102 == 12)) {
    } else {
    };
    if ((varclient_105 == 0)) {
        printmessage("The mechanism issues forth a whine and shuts down.");
        script675();
    };
    return;
}