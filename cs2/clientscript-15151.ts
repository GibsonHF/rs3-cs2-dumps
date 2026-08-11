//
function script15151(int0: number, int1: number): void {
    if ((int0 == 0)) {
        var int1 = script12585(IF_GETHIDE(comp(653, 12)));  // event_crafting:info_overlay
    };
    IF_SETHIDE(int1, comp(653, 12));  // event_crafting:info_overlay
    if ((int1 == true)) {
        IF_SETOP(1, "Open info panel", comp(653, 69));  // event_crafting:topbar_info_button
    } else {
        IF_SETOP(1, "Close info panel", comp(653, 69));  // event_crafting:topbar_info_button
        script15158(-1);
    };
    return;
}