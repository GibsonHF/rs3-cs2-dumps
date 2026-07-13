//
function script20656(int0: number, int1: number): void {
    if ((script6431() == 1)) {
        ACTIVECLANCHANNEL_FIND_AFFINED(1);
    };
    if ((int0 == comp(1499, 36))) {
        IF_SETHIDE(false, comp(1499, 28));
    };
    varclient_8440 = int0;
    varclient_8441 = int1;
    var int2 = script8403(98238471);
    var int3 = script8404(98238471);
    var int4 = IF_GETHEIGHT(comp(1499, 7));
    var int5 = IF_GETWIDTH(comp(1499, 7));
    var int6 = (int4 - 34);
    var int7 = (int4 + 34);
    var int8 = 0;
    if (((int2 >= 0) && (int2 <= IF_GETWIDTH(comp(1499, 7))))) {
        if (((int3 >= (0 - 34)) && (int3 <= 34))) {
            int8 = -4;
        } else if (((int3 >= (int4 - 34)) && (int3 <= (int4 + 34)))) {
            int8 = 4;
        };
        if (((varclient_8442 != -1) && ((int3 < 0) || (int3 > int4)))) {
            script20709();
        };
    } else if ((varclient_8442 != -1)) {
        script20709();
    };
    if ((int8 == 0)) {
        varclient_8443 = 0;
        return;
    };
    if ((varclient_8443 < 10)) {
        varclient_8443 = (varclient_8443 + 1);
        return;
    };
    var int9 = comp(1499, 36);
    var int10 = 98238501;
    script157(int10, int9, (IF_GETSCROLLY(int9) + int8), 1);
    return;
}