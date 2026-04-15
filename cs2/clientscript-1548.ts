//[proc,meslayer_close]
function script1548(int0: int): void {
    if (((int0 == 0) || (int0 == varclient_5))) {
        script2026();
    };
    if ((IF_HASSUBOVERLAY(comp(1477, 728), 1096 as overlayinterface) == 1)) {
        script4295();
    };
    varclient_5 = 0;
    IF_SETHIDE(true, comp(1469, 0));
    script1364();
    script8841(10, 0);
    return;
}