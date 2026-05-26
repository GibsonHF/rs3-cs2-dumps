//
function script4332(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = -1;
    [int2, int3] = script4384(varbitclansettings_8815, varbitclansettings_8816, 1);
    IF_SETGRAPHIC(int2, int0);
    IF_SETGRAPHIC(int3, int1);
    if ((ACTIVECLANSETTINGS_GETAFFINEDCOUNT() >= 5)) {
        IF_SETCOLOUR(HSVTORGB(varclansettings_16), int0);
        IF_SETCOLOUR(HSVTORGB(varclansettings_17), int1);
    } else {
        IF_SETCOLOUR(HSVTORGB(6716), int0);
        IF_SETCOLOUR(HSVTORGB(6716), int1);
    };
    return;
}