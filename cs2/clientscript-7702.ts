//
function script7702(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    if (((varbitplayer_38842 == 1) || ((varbitplayer_22332 == 1) && (varbitplayer_27169 == 0)))) {
        if ((script8314(2008) == -1)) {
            [int1, int2] = script8716(2008);
            int0 = (IF_GETX(comp(1490, 13)) + ((IF_GETWIDTH(comp(1490, 13)) - int1) / 2));
            script8387(int0, (IF_GETY(comp(1490, 13)) - 10), int1, int2, 2008);
            script8705(2008);
            script8311(2008);
        };
    } else if (((script8314(2008) != -1) && (IF_HASSUBOVERLAY(comp(1488, 4), 1490 as overlayinterface) == 1))) {
        script8323(2008, 0);
    };
    return;
}