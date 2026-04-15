//
function script12754(int0: obj, string0: string): void {
    var int1 = comp(1787, 38);
    var int2 = comp(1787, 37);
    varclient_5871 = (varclient_5871 + 1);
    if ((varclient_5871 == 3)) {
        varclient_5871 = 0;
    };
    switch (varclient_5871) {
        case 0: {
            int1 = comp(1787, 38);
            int2 = comp(1787, 37);
            break;
        }
        case 1: {
            int1 = comp(1787, 40);
            int2 = comp(1787, 39);
            break;
        }
        case 2: {
            int1 = comp(1787, 42);
            int2 = comp(1787, 41);
            break;
        }
    };
    if ((int1 != comp(-1, 65535))) {
        IF_SETTRANS(0, int1);
        IF_SETTRANS(0, int2);
        IF_SETTEXT(string0, int1);
        IF_SETOBJECT(int0, 1, int2);
        IF_SETONTIMER(callback(script12755, int1, int2, (CLIENTCLOCK() + 500)), int1);
    };
    return;
}