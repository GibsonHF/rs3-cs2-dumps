//
function script11506(int0: component, int1: component): void {
    IF_SETHIDE(false, int0);
    IF_SETHIDE(false, int1);
    if ((int0 != comp(925, 118))) {
        IF_SETHIDE(true, comp(925, 118));
    };
    if ((int0 != comp(925, 127))) {
        IF_SETHIDE(true, comp(925, 127));
    };
    if ((int1 != comp(925, 89))) {
        IF_SETHIDE(true, comp(925, 89));
    };
    if ((int1 != comp(925, 101))) {
        IF_SETHIDE(true, comp(925, 101));
    };
    switch (int0) {
        case 60620918: {
            varclient_4886 = 0;
            break;
        }
        case 60620927: {
            varclient_4886 = 1;
            break;
        }
    };
    return;
}