//
function script11314(int0: number): void {
    IF_SETHIDE(false, int0);
    IF_SETONTIMER(callback(script11315, int0), int0);
    if ((int0 == comp(1507, 1))) {  // legacy_select:eoc_mouseover
        IF_SETGRAPHIC(23613 as graphic, comp(1507, 15));  // legacy_select:eoc_image
        IF_SETGRAPHIC(23617 as graphic, comp(1507, 2));  // legacy_select:legacy_image
    } else {
        IF_SETGRAPHIC(23614 as graphic, comp(1507, 15));  // legacy_select:eoc_image
        IF_SETGRAPHIC(23616 as graphic, comp(1507, 2));  // legacy_select:legacy_image
    };
    return;
}