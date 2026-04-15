//[clientscript,brew_boiler3]
function script1749(int0: component, int1: component): void {
    if ((varclient_230 > 2)) {
        IF_SETMODEL(15682 as model, int0);
        IF_SETCOLOUR(3407616, int1);
    } else {
        IF_SETMODEL(15681 as model, int0);
        IF_SETCOLOUR(9502720, int1);
    };
    IF_SETTEXT(inttostring(varclient_230, 10), int1);
    return;
}