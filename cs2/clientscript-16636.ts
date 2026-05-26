//
function script16636(): void {
    var string0 = TOSTRING_LOCALISED(varplayer_10448, 1);
    var int0 = 0;
    if ((varplayer_10448 >= 500)) {
        string0 = `<col=FF00>${TOSTRING_LOCALISED(varplayer_10448, 1)}</col>`;
        int0 = 1;
    };
    IF_SETTEXT(string0, 31981576);
    IF_SETENABLED(int0, 31981579);
    return;
}