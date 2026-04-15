//
function script3508(): void {
    if (((script13749() == false) && (INV_TOTAL(93 as inv, 5733 as obj) == 0))) {
        return;
    };
    if ((varbitplayer_20806 == 1)) {
        IF_SETHIDE(true, comp(578, 4));
        IF_SETHIDE(true, comp(578, 5));
        IF_SETPOSITION(0, 0, 1, 1, comp(578, 2));
    };
    if ((varplayer_11702 > 0)) {
        IF_SETTEXT(script3507(varplayer_11702), comp(578, 10));
        IF_SETTEXT(script3507((varplayer_11702 + 7)), comp(578, 17));
        IF_SETTEXT(script3507((varplayer_11702 + 14)), comp(578, 24));
    } else {
        IF_SETTEXT("Unavailable - Please log out and in.", comp(578, 10));
        IF_SETTEXT("Unavailable - Please log out and in.", comp(578, 17));
        IF_SETTEXT("Unavailable - Please log out and in.", comp(578, 24));
    };
    IF_SETTEXT("Radiant Dawn Armour<br>Immobile Rest<br>Steel Panther Pet", comp(578, 11));
    IF_SETTEXT("4x Large Protean Pack", comp(578, 18));
    IF_SETTEXT("Huge Lamp Chest", comp(578, 25));
    script3535();
    return;
}