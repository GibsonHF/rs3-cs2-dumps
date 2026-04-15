//
function script4359(int0: unknown_int): void {
    if ((ACTIVECLANSETTINGS_FIND_LISTENED() == 1)) {
        script4361(int0);
    } else {
        IF_SETONCLANSETTINGSTRANSMIT(callback(script4360, int0), int0);
    };
    return;
}