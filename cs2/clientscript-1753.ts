//
function script1753(int0: component, int1: component): void {
    if ((varclient_224 > 0)) {
        IF_SETMODEL(15704 as model, int0);
        IF_SETCOLOUR(3407616, int1);
    } else {
        IF_SETMODEL(15703 as model, int0);
        IF_SETCOLOUR(9502720, int1);
    };
    IF_SETTEXT(inttostring(varclient_224, 10), int1);
    return;
}