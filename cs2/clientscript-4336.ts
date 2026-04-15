//
function script4336(int0: component): void {
    if (((varbitclansettings_8808 == 0) && (ACTIVECLANSETTINGS_GETAFFINEDCOUNT() >= 5))) {
        IF_SETTEXT(REMOVETAGS(varclansettings_1), int0);
        return;
    };
    IF_SETTEXT("", int0);
    return;
}