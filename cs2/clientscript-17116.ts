//
function script17116(int0: number, int1: number, int2: number, string0: string, string1: string): void {
    IF_SETHIDE(false, comp(1483, 1));  // gravestone_timer:bespoke_window
    IF_SETHIDE(int0, comp(1483, 4));  // gravestone_timer:grave_go_to
    IF_SETHIDE(int1, comp(1483, 5));  // gravestone_timer:warning_icon
    IF_SETHIDE(int1, comp(1483, 10));  // gravestone_timer:warning_highlight
    IF_SETGRAPHIC(int2, comp(1483, 9));  // gravestone_timer:mode_icon
    if ((int1 == false)) {
        IF_SETCOLOUR(16711680, comp(1483, 6));  // gravestone_timer:gravestone_text
    } else {
        IF_SETCOLOUR(16777215, comp(1483, 6));  // gravestone_timer:gravestone_text
    };
    IF_SETTEXT(string0, comp(1483, 6));  // gravestone_timer:gravestone_text
    script16930(97189889, -1, 2, string1);
    return;
}