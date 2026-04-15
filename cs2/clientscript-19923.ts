//
function script19923(int0: component): void {
    if (((varclient_8304 == true) || (IF_GETTRANS(int0) == 0))) {
        return;
    };
    IF_SETONTIMER(callback(), int0);
    IF_SETTRANS(MAX((IF_GETTRANS(int0) - 10), 0), int0);
    return;
}