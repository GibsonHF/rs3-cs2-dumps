//
function script13853(): void {
    IF_SETHIDE(true, comp(1431, 9));  // toplevel_v2_ribbon:extra_button
    IF_SETHIDE(true, comp(1431, 10));  // toplevel_v2_ribbon:mode_button
    IF_SETHIDE(true, comp(1431, 11));  // toplevel_v2_ribbon:league_button
    IF_SETTEXT("", comp(1431, 7));  // toplevel_v2_ribbon:error_msg
    IF_SETSIZE(0, 0, 1, 1, comp(1431, 8));  // toplevel_v2_ribbon:window_holder
    IF_SETPOSITION(0, 0, 0, 0, comp(1431, 8));  // toplevel_v2_ribbon:window_holder
    return;
}