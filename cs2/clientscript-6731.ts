//
function script6731(int0: number, int1: number): void {
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(1477, 610));  // toplevel_v2:loot_window_border
        IF_SETHIDE(true, comp(1477, 612));  // toplevel_v2:debuffs_window_background
        IF_SETHIDE(true, comp(1477, 614));  // toplevel_v2:debuffs_window_border
        IF_SETHIDE(true, comp(1477, 616));  // toplevel_v2:combat_status_window_background
        if ((int1 == 1)) {
            printmessage("Buff timers will no longer be displayed.");
        };
        return;
    };
    IF_SETHIDE(false, comp(1477, 610));  // toplevel_v2:loot_window_border
    IF_SETHIDE(false, comp(1477, 612));  // toplevel_v2:debuffs_window_background
    IF_SETHIDE(false, comp(1477, 614));  // toplevel_v2:debuffs_window_border
    IF_SETHIDE(false, comp(1477, 616));  // toplevel_v2:combat_status_window_background
    if ((int1 == 1)) {
        printmessage("Buff timers will now be displayed.");
    };
    return;
}