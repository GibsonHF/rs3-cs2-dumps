//
function script15431(): void {
    IF_SETTEXT(script11601(varplayer_11326, 1), 49807401);
    var int0 = 0;
    if ((varplayer_11326 >= 400)) {
        int0 = 1;
    };
    if ((int0 == 1)) {
        IF_SETOP(1, "Buy Bonus", 49807403);
    } else {
        IF_SETOP(1, "", 49807403);
    };
    IF_SETENABLED(int0, 49807403);
    return;
}