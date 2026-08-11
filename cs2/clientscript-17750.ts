//
function script17750(int0: number, int1: number): void {
    IF_SETHIDE(false, comp(1222, 5));  // skill_tree:popup_window
    IF_SETHIDE(false, comp(1222, 56));  // skill_tree:node_confirmation_window
    IF_SETTEXT(script17486(int1), comp(1222, 64));  // skill_tree:node_confirmation_name
    IF_SETGRAPHIC(script17489(int1, 0, 1), comp(1222, 78));  // skill_tree:node_confirmation_icon_graphic
    IF_SETTEXT(`<col=ffffff>Cost: ${TOSTRING_LOCALISED(dbrow_getfield(int1, 954432, 0), 1)} ${script17481(varplayer_11091, dbrow_getfield(int1, 954432, 0))}<br>Are you sure you wish to continue?`, comp(1222, 67));  // skill_tree:node_confirmation_summary
    return;
}