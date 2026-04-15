//[proc,xbows_bolts_update]
function script2351(int0: component, int1: obj): void {
    if ((INV_TOTAL(93 as inv, int1) > 0)) {
        IF_SETCOLOUR(52224, int0);
    } else {
        IF_SETCOLOUR(16750623, int0);
    };
    return;
}