//
function script16636(): void {
    var string0 = TOSTRING_LOCALISED(varplayer_10448, 1);
    var int0 = false;
    if ((varplayer_10448 >= 500)) {
        string0 = `<col=FF00>${TOSTRING_LOCALISED(varplayer_10448, 1)}</col>`;
        int0 = true;
    };
    IF_SETTEXT(string0, comp(488, 8));
    IF_SETENABLED(int0, comp(488, 11));
    return;
}