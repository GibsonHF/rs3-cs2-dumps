//
function script15044(int0: unknown_int, int1: int): void {
    if ((int0 != 1)) {
        return;
    };
    if ((varplayer_139 != -1)) {
        return;
    };
    varplayer_138 = int1;
    if ((script15045(int1) == 1)) {
        return;
    };
    if ((STOCKMARKET_ISOFFEREMPTY(int1, 0) == 0)) {
        varplayer_135 = STOCKMARKET_GETOFFERITEM(int1, 0);
        varplayer_136 = STOCKMARKET_GETOFFERCOUNT(int1, 0);
        varplayer_137 = STOCKMARKET_GETOFFERPRICE(int1, 0);
        script621();
        script15038(varplayer_136, varplayer_137, 0);
        script15036(0, 0, 0, 1, 1);
    } else {
        script15028(varplayer_138);
    };
    return;
}