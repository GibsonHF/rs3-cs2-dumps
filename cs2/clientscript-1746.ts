//[clientscript,brew_boiler1]
function script1746(int0: component, int1: component): void {
    if ((varclient_228 > 2)) {
        IF_SETMODEL(15678 as model, int0);
        IF_SETCOLOUR(3407616, int1);
    } else {
        IF_SETMODEL(15677 as model, int0);
        IF_SETCOLOUR(9502720, int1);
    };
    IF_SETTEXT(inttostring(varclient_228, 10), int1);
    return;
}