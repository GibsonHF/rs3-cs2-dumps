//
function script15037(): void {
    switch (varplayer_139) {
        case 0: {
            IF_SETTEXT(script9465(2), comp(105, 140));
            break;
        }
        case 1: {
            IF_SETTEXT("Select an item in your inventory to sell.", comp(105, 140));
            break;
        }
        default: {
            IF_SETTEXT("Loading...", comp(105, 140));
            break;
        }
    };
    IF_SETTEXT("0", comp(105, 215));
    IF_SETTEXT("Loading...", comp(105, 147));
    IF_SETTEXT("Loading...", comp(105, 150));
    IF_SETTEXT("0", comp(105, 170));
    IF_SETTEXT("1", comp(105, 185));
    IF_SETONTIMER(callback(), comp(105, 141));
    IF_SETTEXT("", comp(105, 141));
    return;
}