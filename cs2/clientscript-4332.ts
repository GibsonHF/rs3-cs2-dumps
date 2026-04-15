//
function script4332(int0: component, int1: component): void {
    var int2 = -1 as graphic;
    var int3 = -1 as graphic;
    [int2, int3] = script4384(varbitclansettings_8815, varbitclansettings_8816, 1);
    stack(int2);
    stack(int0);
    IF_SETGRAPHIC();
    stack(int3);
    stack(int1);
    IF_SETGRAPHIC();
    if ((ACTIVECLANSETTINGS_GETAFFINEDCOUNT() >= 5)) {
        IF_SETCOLOUR(HSVTORGB(varclansettings_16), int0);
        IF_SETCOLOUR(HSVTORGB(varclansettings_17), int1);
    } else {
        IF_SETCOLOUR(HSVTORGB(6716), int0);
        IF_SETCOLOUR(HSVTORGB(6716), int1);
    };
    return;
}