//
function script15037(): void {
    switch (varplayer_139) {
        case 0: {
            IF_SETTEXT(script9465(2), comp(105, 215));
            break;
        }
        case 1: {
            IF_SETTEXT("Select an item in your inventory to sell.", comp(105, 215));
            break;
        }
        default: {
            IF_SETTEXT("Loading...", comp(105, 215));
            break;
        }
    };
    IF_SETTEXT("0", comp(105, 321));
    IF_SETTEXT("N/A", comp(105, 223));
    IF_SETTEXT("0", comp(105, 237));
    IF_SETTEXT("1", comp(105, 278));
    return;
}