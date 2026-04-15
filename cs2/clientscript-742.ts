//
function script742(): void {
    var int0 = varplayer_2712;
    var int1 = 0;
    if ((int0 == 0)) {
        return;
    };
    if ((int0 == 10)) {
        varclient_105 = (varclient_105 - 1);
        if ((varbitplayer_13481 != varclient_105)) {
            if ((varbitplayer_13481 > varclient_105)) {
                int1 = 1;
                printmessage("Part of the mechanism jams due to your frenzied manipulation.");
            };
            varclient_105 = varbitplayer_13481;
        };
        if ((varclient_105 == 0)) {
            printmessage("The mechanism issues forth a whine and shuts down.");
            script675();
        };
        script738();
        return;
    };
    int0 = (int0 - 1);
    if ((TESTBIT(varclient_106, int0) == 1)) {
        return;
    };
    varclient_106 = SETBIT(varclient_106, int0);
    varclient_105 = (varclient_105 + 5);
    script738();
    var int2 = enum_getvalue(0, 31, 1155 as cs2enum, int0);
    var int3 = enum_getvalue(0, 9, 1154 as cs2enum, int0);
    IF_SETMODEL(int2, int3);
    return;
}