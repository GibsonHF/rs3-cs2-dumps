//
function script1759(int0: component, int1: component): void {
    if ((varclient_220 > 0)) {
        IF_SETHIDE(false, int0);
    } else {
        IF_SETHIDE(true, int0);
    };
    IF_SETTEXT(inttostring(varclient_220, 10), int1);
    return;
}