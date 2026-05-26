//
function script5230(int0: number, int1: number, int2: number): void {
    if ((ACTIVECLANSETTINGS_FIND_LISTENED() == 1)) {
        script4340(int0, varclansettings_0, int1, int2);
        IF_SETONCLANSETTINGSTRANSMIT(callback(), int2);
    };
    return;
}