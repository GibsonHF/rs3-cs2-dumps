//
function script20032(): void {
    IF_SETTEXT(script11601(varplayer_12241, 1), 87818302);
    var int0 = 0;
    if ((varplayer_12241 >= 400)) {
        int0 = 1;
    };
    if ((int0 == 1)) {
        IF_SETOP(1, "Buy Bonus", 87818303);
    } else {
        IF_SETOP(1, "", 87818303);
    };
    IF_SETENABLED(int0, 87818303);
    return;
}