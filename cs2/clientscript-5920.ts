//
function script5920(): void {
    var int0 = IF_GETHEIGHT(comp(223, 0));  // peng_emote:emote_default
    IF_SETSCROLLSIZE(0, 405, comp(223, 1));  // peng_emote:emote_scroll
    script7791(14614562, 14614529);
    if ((int0 >= 405)) {
        IF_SETSIZE(0, 0, 1, 1, comp(223, 1));  // peng_emote:emote_scroll
        IF_SETHIDE(true, comp(223, 34));  // peng_emote:emote_scrollbar
    } else {
        IF_SETHIDE(false, comp(223, 34));  // peng_emote:emote_scrollbar
        IF_SETSIZE(20, 0, 1, 1, comp(223, 1));  // peng_emote:emote_scroll
    };
    return;
}