//
function script3086(int0: component): void {
    if ((script5767() == 1)) {
        IF_SETOP(1, "Auto-Setup Revolution Action Bar", int0);
    } else {
        IF_SETOP(1, "Setup Action Bars", int0);
    };
    IF_SETOP(2, "Combat Settings", int0);
    IF_SETOP(3, "Action Bar Settings", int0);
    IF_SETOP(4, "Toggle Action Bar Lock", int0);
    if ((script5767() == 1)) {
        IF_SETOP(5, "", int0);
    } else {
        IF_SETOP(5, "Auto-Setup Revolution Action Bar", int0);
    };
    return;
}