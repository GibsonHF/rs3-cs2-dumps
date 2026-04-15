//
function script16884(int0: component, int1: component, int2: component): void {
    if (((script1017() == 0) || (script16825() != 1))) {
        IF_SETTEXT("The Fresh Start Worlds event has ended", int0);
    } else {
        IF_SETTEXT("The Fresh Start Worlds event will end in:", int0);
    };
    IF_SETHIDE(script16869(7621), int1);
    IF_SETTEXT(script16868(7621), int2);
    return;
}