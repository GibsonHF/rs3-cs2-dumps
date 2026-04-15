//
function script9841(int0: int): void {
    if ((varclient_4200 == -1 as struct)) {
        return;
    };
    var int1 = struct_getparam(varclient_4200, 4326);
    var string0 = "";
    switch (int0) {
        case 0: {
            string0 = struct_getparam(varclient_4200, 4322);
            break;
        }
        case 1: {
            string0 = struct_getparam(varclient_4200, 4323);
            break;
        }
        case 2: {
            string0 = struct_getparam(varclient_4200, 4324);
            break;
        }
        case 3: {
            string0 = struct_getparam(varclient_4200, 4325);
            break;
        }
    };
    if ((int0 == int1)) {
        IF_SETTEXT("Correct", comp(1350, 13));
        IF_SETTEXT(`It was indeed<br>${string0}`, comp(1350, 14));
        IF_SETHIDE(false, comp(1350, 1));
    } else {
        IF_SETHIDE(false, comp(1350, 10));
        IF_SETTEXT("Incorrect", comp(1350, 13));
        IF_SETTEXT("You will have to wait 1 minute until you can try again.", comp(1350, 14));
        IF_SETHIDE(false, comp(1350, 1));
        if ((varclient_4199 < CLIENTCLOCK())) {
            varclient_4198 = 60;
            varclient_4199 = (CLIENTCLOCK() + (varclient_4198 * 50));
            script9842();
        };
    };
    return;
}