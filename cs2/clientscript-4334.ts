//
function script4334(int0: component, int1: component): void {
    if ((ACTIVECLANSETTINGS_GETAFFINEDCOUNT() >= 5)) {
        IF_SETCOLOUR(HSVTORGB(varclansettings_18), int0);
        IF_SETCOLOUR(HSVTORGB(varclansettings_19), int1);
    } else {
        IF_SETCOLOUR(HSVTORGB(42550), int0);
        IF_SETCOLOUR(HSVTORGB(39382), int1);
    };
    return;
}