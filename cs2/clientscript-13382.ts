//
function script13382(): void {
    if ((script6431() == true)) {
        varclient_6040 = 999;
        varclient_6041 = 119;
        varclient_6042 = 0;
    } else {
        varclient_6040 = 0;
        varclient_6041 = 119;
        varclient_6042 = 0;
    };
    var int0 = enum_getvalue(0, 73, 12591 as cs2enum, varclient_6040);
    if ((int0 == -1 as struct)) {
        varclient_6040 = 109;
        varclient_6041 = 119;
        varclient_6042 = 0;
        int0 = enum_getvalue(0, 73, 12591 as cs2enum, varclient_6040);
    };
    var int1 = -1 as cs2enum;
    if ((int0 != -1 as struct)) {
        int1 = struct_getparam(int0, 6589);
        if ((int1 != -1 as cs2enum)) {
            varclient_6045 = script13386(int1);
            if ((varclient_6042 != 1)) {
                IF_SETONTIMER(callback(script13387, -2147483645, 48758798, CLIENTCLOCK(), varclient_6040), 48758787);
            };
        };
    };
    script13385();
    return;
}