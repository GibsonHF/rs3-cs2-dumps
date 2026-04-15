//
function script15612(): void {
    var int0 = script13749();
    if ((int0 == true)) {
        IF_SETHIDE(true, comp(906, 29));
        IF_SETHIDE(false, comp(906, 107));
    } else {
        IF_SETHIDE(false, comp(906, 29));
        IF_SETHIDE(true, comp(906, 107));
    };
    IF_SETHIDE(true, comp(906, 42));
    script15613(comp(906, 31), comp(906, 108), "Updates", 0, int0, 12766 as graphic, 12767 as graphic);
    script15613(comp(906, 32), comp(906, 109), "World", 1, int0, 12768 as graphic, 12769 as graphic);
    script15613(comp(906, 33), comp(906, 110), "Friends", 2, int0, 18727 as graphic, 18727 as graphic);
    script15613(comp(906, 34), comp(-1, 65535), "Friends Chat", 3, int0, 20976 as graphic, 20976 as graphic);
    script15613(comp(906, 35), comp(-1, 65535), "Clan Chat", 4, int0, 20978 as graphic, 20978 as graphic);
    script15613(comp(906, 36), comp(-1, 65535), "Options", 5, false, -1 as graphic, -1 as graphic);
    return;
}