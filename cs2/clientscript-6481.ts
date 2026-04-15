//
function script6481(int0: component, int1: int): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    varclient_1964 = int0;
    varclient_1965 = int1;
    var int2 = comp(1311, 196);
    if ((CC_FIND(int0, int1) == 1)) {
        varclient_1966 = CC_GETPARENTLAYER();
        if ((varclient_1966 == enum_getvalue(0, 9, 5961 as cs2enum, varclient_2699))) {
            IF_SETHIDE(false, int2);
            IF_SETSIZE(CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0, int2);
            IF_SETPOSITION(CC_GETX(), (CC_GETY() + IF_GETY(CC_GETPARENTLAYER())), 0, 0, int2);
            if ((CC_GETHIDE() == true)) {
                IF_SETHIDE(true, int2);
            };
        } else {
            varclient_1966 = enum_getvalue(0, 9, 5961 as cs2enum, varclient_2699);
        };
    } else {
        IF_SETHIDE(true, int2);
    };
    return;
}