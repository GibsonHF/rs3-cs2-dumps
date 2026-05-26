//
function script15037(): void {
    switch (varplayer_139) {
        case 0: {
            IF_SETTEXT(script9465(2), 6881495);
            break;
        }
        case 1: {
            IF_SETTEXT("Select an item in your inventory to sell.", 6881495);
            break;
        }
        default: {
            IF_SETTEXT("Loading...", 6881495);
            break;
        }
    };
    IF_SETTEXT("0", 6881601);
    IF_SETTEXT("N/A", 6881503);
    IF_SETTEXT("0", 6881517);
    IF_SETTEXT("1", 6881558);
    return;
}