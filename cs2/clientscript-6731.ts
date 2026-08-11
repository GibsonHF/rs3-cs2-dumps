//
function script6731(int0: number, int1: number): void {
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(1477, 611));  // toplevel_v2:debuffs_window
        IF_SETHIDE(true, comp(1477, 613));  // toplevel_v2:debuffs_window_content
        IF_SETHIDE(true, comp(1477, 615));  // toplevel_v2:combat_status_window
        IF_SETHIDE(true, comp(1477, 617));  // toplevel_v2:combat_status_window_content
        if ((int1 == 1)) {
            printmessage("Buff timers will no longer be displayed.");
        };
        return;
    };
    IF_SETHIDE(false, comp(1477, 611));  // toplevel_v2:debuffs_window
    IF_SETHIDE(false, comp(1477, 613));  // toplevel_v2:debuffs_window_content
    IF_SETHIDE(false, comp(1477, 615));  // toplevel_v2:combat_status_window
    IF_SETHIDE(false, comp(1477, 617));  // toplevel_v2:combat_status_window_content
    if ((int1 == 1)) {
        printmessage("Buff timers will now be displayed.");
    };
    return;
}