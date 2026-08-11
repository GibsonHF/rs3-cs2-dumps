//
function script14390(int0: number, int1: number, int2: number): void {
    if ((CC_FIND(int1, int2) == 1)) {
        if ((int0 == 1)) {
            IF_SETHIDE(false, comp(517, 274));  // bank:preset_highlight_mouseover
            IF_SETPOSITION(CC_GETX(), CC_GETY(), 0, 0, comp(517, 274));  // bank:preset_highlight_mouseover
            IF_SETSIZE(0, (CC_GETHEIGHT() + 2), 1, 0, comp(517, 274));  // bank:preset_highlight_mouseover
        } else {
            IF_SETHIDE(true, comp(517, 274));  // bank:preset_highlight_mouseover
        };
    };
    return;
}