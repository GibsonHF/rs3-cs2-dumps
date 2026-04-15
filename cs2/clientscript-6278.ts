//
function script6278(int0: unknown_int, int1: component, int2: component): void {
    if ((int0 == 0)) {
        IF_SETTEXT("- ACTIVE -", int1);
        IF_SETCOLOUR(16711680, int2);
        IF_SETTRANS(200, int2);
    } else if ((int0 == 1)) {
        IF_SETTEXT("Activate", int1);
        IF_SETCOLOUR(10309156, int2);
        IF_SETTRANS(200, int2);
    } else if ((int0 == 2)) {
        IF_SETTEXT("Buy", int1);
    } else if ((int0 == 3)) {
        IF_SETTEXT("Bought", int1);
        IF_SETCOLOUR(10309156, int2);
        IF_SETTRANS(200, int2);
    } else if ((int0 == 4)) {
        IF_SETTEXT("Locked", int1);
    };
    return;
}