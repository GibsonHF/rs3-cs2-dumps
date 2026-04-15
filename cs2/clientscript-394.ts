//
function script394(int0: component): void {
    if ((varclient_1391 == 0)) {
        IF_SETTRANS(MAX((IF_GETTRANS(int0) - 10), 0), int0);
        if ((IF_GETTRANS(int0) == 0)) {
            varclient_1391 = 1;
        };
    } else {
        IF_SETTRANS(MIN((IF_GETTRANS(int0) + 10), 255), int0);
        if ((IF_GETTRANS(int0) == 255)) {
            varclient_1391 = 0;
        };
    };
    return;
}