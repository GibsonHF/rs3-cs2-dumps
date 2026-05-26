//
function script3508(): void {
    if (((script13749() == 0) && (INV_TOTAL(93, 5733) == 0))) {
        return;
    };
    if ((varbitplayer_20806 == 1)) {
        IF_SETHIDE(1, 37879812);
        IF_SETHIDE(1, 37879813);
        IF_SETPOSITION(0, 0, 1, 1, 37879810);
    };
    if ((varplayer_11702 > 0)) {
        IF_SETTEXT(script3507(varplayer_11702), 37879818);
        IF_SETTEXT(script3507((varplayer_11702 + 7)), 37879825);
        IF_SETTEXT(script3507((varplayer_11702 + 14)), 37879832);
    } else {
        IF_SETTEXT("Unavailable - Please log out and in.", 37879818);
        IF_SETTEXT("Unavailable - Please log out and in.", 37879825);
        IF_SETTEXT("Unavailable - Please log out and in.", 37879832);
    };
    IF_SETTEXT("Radiant Dawn Armour<br>Immobile Rest<br>Steel Panther Pet", 37879819);
    IF_SETTEXT("4x Large Protean Pack", 37879826);
    IF_SETTEXT("Huge Lamp Chest", 37879833);
    script3535();
    return;
}