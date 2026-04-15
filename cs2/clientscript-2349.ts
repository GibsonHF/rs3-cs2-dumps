//[proc,xbows_rune_update]
function script2349(int0: component, int1: obj, int2: int): void {
    if ((script19(int1) >= int2)) {
        IF_SETCOLOUR(52224, int0);
        IF_SETTEXT(`${inttostring(int2, 10)}/${inttostring(int2, 10)}`, int0);
    } else {
        IF_SETCOLOUR(12582912, int0);
        IF_SETTEXT(`${script20(script19(int1))}/${inttostring(int2, 10)}`, int0);
    };
    return;
}