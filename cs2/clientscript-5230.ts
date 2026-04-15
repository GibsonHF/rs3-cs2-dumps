//
function script5230(int0: int, int1: component, int2: unknown_int): void {
    if ((ACTIVECLANSETTINGS_FIND_LISTENED() == 1)) {
        script4340(int0, varclansettings_0, int1, int2);
        IF_SETONCLANSETTINGSTRANSMIT(callback(), int2);
    };
    return;
}