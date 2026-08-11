//
function script953(): void {
    var int0 = IF_GETHEIGHT(comp(783, 0));  // crcs_tightrope:emote_default
    IF_SETSCROLLSIZE(0, 555, comp(783, 17));  // crcs_tightrope:emote_scroll
    IF_SETSCROLLSIZE(0, 555, comp(783, 2));  // crcs_tightrope:juggle_scroll
    script7791(51314717, 51314705);
    script7791(51314702, 51314690);
    if ((int0 >= 550)) {
        IF_SETSIZE(0, 0, 1, 1, comp(783, 17));  // crcs_tightrope:emote_scroll
        IF_SETSIZE(0, 0, 1, 1, comp(783, 2));  // crcs_tightrope:juggle_scroll
        IF_SETHIDE(true, comp(783, 29));  // crcs_tightrope:emote_scrollbar
        IF_SETHIDE(true, comp(783, 14));  // crcs_tightrope:juggle_scrollbar
    } else {
        IF_SETHIDE(false, comp(783, 29));  // crcs_tightrope:emote_scrollbar
        IF_SETHIDE(false, comp(783, 14));  // crcs_tightrope:juggle_scrollbar
        IF_SETSIZE(20, 0, 1, 1, comp(783, 17));  // crcs_tightrope:emote_scroll
        IF_SETSIZE(20, 0, 1, 1, comp(783, 2));  // crcs_tightrope:juggle_scroll
    };
    return;
}