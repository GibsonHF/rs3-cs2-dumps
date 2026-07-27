//
function script20890(int0: number): void {
    if ((varplayer_139 != -1)) {
        return;
    };
    varplayer_138 = int0;
    if ((script15045(int0) == 1)) {
        return;
    };
    if ((STOCKMARKET_ISOFFEREMPTY(int0, 0) == 0)) {
        varplayer_139 = STOCKMARKET_GETOFFERTYPE(int0, 0);
        varplayer_135 = STOCKMARKET_GETOFFERITEM(int0, 0);
        varplayer_136 = STOCKMARKET_GETOFFERCOUNT(int0, 0);
        varplayer_137 = STOCKMARKET_GETOFFERPRICE(int0, 0);
        varplayer_140 = -1n;
        varplayer_13483 = -1n;
        varplayer_9457 = varplayer_136;
        varplayer_9458 = varplayer_137;
        script621();
        script15038(varplayer_136, varplayer_137, 0);
        script15036(0, 0, 0, 1, 1, 1);
    } else {
        script15028(varplayer_138);
    };
    return;
}