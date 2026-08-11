//
function script13607(int0: number): void {
    if ((CC_FIND(comp(1896, 56), int0) == 1)) {  // cheevo_player_inspect_full:dropdown_layer
        IF_SETSIZE((CC_GETWIDTH() + 2), (CC_GETHEIGHT() + 2), 0, 0, comp(1896, 57));  // cheevo_player_inspect_full:subcat_highlight
        IF_SETPOSITION((CC_GETX() - 1), (CC_GETY() - 1), 0, 0, comp(1896, 57));  // cheevo_player_inspect_full:subcat_highlight
        IF_SETHIDE(false, comp(1896, 57));  // cheevo_player_inspect_full:subcat_highlight
    };
    return;
}