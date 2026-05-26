//
function script12754(int0: number, string0: string): void {
    var int1 = 117112870;
    var int2 = 117112869;
    varclient_5871 = (varclient_5871 + 1);
    if ((varclient_5871 == 3)) {
        varclient_5871 = 0;
    };
    switch (varclient_5871) {
        case 0: {
            int1 = 117112870;
            int2 = 117112869;
            break;
        }
        case 1: {
            int1 = 117112872;
            int2 = 117112871;
            break;
        }
        case 2: {
            int1 = 117112874;
            int2 = 117112873;
            break;
        }
    };
    if ((int1 != -1)) {
        IF_SETTRANS(0, int1);
        IF_SETTRANS(0, int2);
        IF_SETTEXT(string0, int1);
        IF_SETOBJECT(int0, 1, int2);
        IF_SETONTIMER(callback(script12755, int1, int2, (CLIENTCLOCK() + 500)), int1);
    };
    return;
}