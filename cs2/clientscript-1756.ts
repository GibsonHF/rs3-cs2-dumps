//[clientscript,brew_bark]
function script1756(int0: component, int1: component): void {
    if ((varclient_225 > 0)) {
        IF_SETMODEL(15667 as model, int0);
        IF_SETCOLOUR(3407616, int1);
    } else {
        IF_SETMODEL(15659 as model, int0);
        IF_SETCOLOUR(9502720, int1);
    };
    IF_SETTEXT(inttostring(varclient_225, 10), int1);
    return;
}