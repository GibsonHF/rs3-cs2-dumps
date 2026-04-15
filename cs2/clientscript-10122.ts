//
function script10122(int0: component, int1: component, int2: int): void {
    var string0 = "";
    var int3 = 0;
    if ((int0 == comp(232, 87))) {
        varclient_4285 = IF_GETTEXT(int0);
        varclient_4286 = script1401(int2, varclient_4285, 26 as fontmetrics, 6);
        IF_SETPOSITION(script1551(varclient_4286, varclient_4285, 26 as fontmetrics, 6), IF_GETY(int1), 0, 0, int1);
        varbitclient_23065 = 1;
    } else if ((int0 == comp(232, 93))) {
        varclient_4288 = script1401(int2, script2949(varclient_4287), 26 as fontmetrics, 6);
        IF_SETPOSITION(script1551(varclient_4288, script2949(varclient_4287), 26 as fontmetrics, 6), IF_GETY(int1), 0, 0, int1);
        varbitclient_23065 = 2;
    } else if ((int0 == comp(232, 116))) {
        if ((varbitclient_23079 == 1)) {
            printmessage("You can't change that while your broadcast is active");
            return;
        };
        varclient_4289 = IF_GETTEXT(int0);
        varclient_4290 = script1401(int2, varclient_4289, 26 as fontmetrics, 6);
        IF_SETPOSITION(script1551(varclient_4290, varclient_4289, 26 as fontmetrics, 6), IF_GETY(int1), 0, 0, int1);
        varbitclient_23065 = 3;
    };
    script8841(52, 1);
    return;
}