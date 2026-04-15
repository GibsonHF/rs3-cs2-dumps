//[clientscript,brew_bitternut]
function script1752(int0: component, int1: component): void {
    if ((varclient_223 > 0)) {
        IF_SETMODEL(15669 as model, int0);
        IF_SETCOLOUR(3407616, int1);
    } else {
        IF_SETMODEL(15666 as model, int0);
        IF_SETCOLOUR(9502720, int1);
    };
    IF_SETTEXT(inttostring(varclient_223, 10), int1);
    return;
}