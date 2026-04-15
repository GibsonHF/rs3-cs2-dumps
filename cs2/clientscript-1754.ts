//[clientscript,brew_buckets]
function script1754(int0: component, int1: component): void {
    if ((varclient_226 > 4)) {
        IF_SETMODEL(15690 as model, int0);
        IF_SETCOLOUR(3407616, int1);
    } else {
        IF_SETMODEL(15689 as model, int0);
        IF_SETCOLOUR(9502720, int1);
    };
    IF_SETTEXT(inttostring(varclient_226, 10), int1);
    return;
}