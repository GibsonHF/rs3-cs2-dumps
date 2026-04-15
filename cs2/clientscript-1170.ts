//
function script1170(int0: component): void {
    if ((IF_GETTRANS(int0) > varclient_1435)) {
        IF_SETTRANS(MAX(50, (IF_GETTRANS(int0) - 1)), int0);
    } else {
        IF_SETTRANS(MIN(255, (IF_GETTRANS(int0) + 1)), int0);
    };
    return;
}