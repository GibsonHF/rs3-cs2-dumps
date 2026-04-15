//
function script19925(int0: component): void {
    if ((IF_GETTRANS(int0) == 255)) {
        IF_SETONTIMER(callback(), int0);
    };
    IF_SETTRANS(MIN((IF_GETTRANS(int0) + 10), 255), int0);
    return;
}