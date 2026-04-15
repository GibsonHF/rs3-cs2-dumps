//
function script11241(int0: unknown_int): void {
    if ((STAFFMODLEVEL() == 0)) {
        return;
    };
    if ((int0 == 1)) {
        if ((strcmp("", varclient_4761) != 0)) {
            IF_SETTEXT(varclient_4761, comp(1610, 8));
        };
    } else if (((int0 == 2) && (strcmp("", varclient_4762) != 0))) {
        IF_SETTEXT(varclient_4762, comp(1610, 8));
    };
    return;
}