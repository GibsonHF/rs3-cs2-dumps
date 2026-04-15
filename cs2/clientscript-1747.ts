//[clientscript,brew_boiler2]
function script1747(int0: component, int1: component): void {
    if ((varclient_229 > 2)) {
        IF_SETMODEL(15680 as model, int0);
        IF_SETCOLOUR(3407616, int1);
    } else {
        IF_SETMODEL(15679 as model, int0);
        IF_SETCOLOUR(9502720, int1);
    };
    IF_SETTEXT(inttostring(varclient_229, 10), int1);
    return;
}