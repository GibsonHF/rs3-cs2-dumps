//
function script11504(int0: component, int1: component): void {
    IF_SETHIDE(false, int0);
    IF_SETHIDE(false, int1);
    if ((int0 != comp(925, 80))) {
        IF_SETHIDE(true, comp(925, 80));
    };
    if ((int0 != comp(925, 71))) {
        IF_SETHIDE(true, comp(925, 71));
    };
    if ((int1 != comp(925, 48))) {
        IF_SETHIDE(true, comp(925, 48));
    };
    if ((int1 != comp(925, 34))) {
        IF_SETHIDE(true, comp(925, 34));
    };
    switch (int0) {
        case 60620880: {
            varclient_4885 = 0;
            break;
        }
        case 60620871: {
            varclient_4885 = 1;
            break;
        }
    };
    return;
}