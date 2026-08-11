//
function script9610(int0: number): void {
    if ((int0 == -1)) {
        IF_SETHIDE(true, comp(419, 6));  // patchy_interface:highlight
    } else if ((CC_FIND(comp(419, 5), int0) == 1)) {  // patchy_interface:click
        IF_SETHIDE(false, comp(419, 6));  // patchy_interface:highlight
        IF_SETSIZE(CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0, comp(419, 6));  // patchy_interface:highlight
        IF_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0, comp(419, 6));  // patchy_interface:highlight
    };
    return;
}