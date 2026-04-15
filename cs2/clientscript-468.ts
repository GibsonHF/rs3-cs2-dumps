//
function script468(): void {
    if ((unk10986(0) == 1)) {
        script10416(comp(178, 16), comp(178, 17), "Show broadcasts to guests", "Hide broadcasts to guests", "Show broadcasts to guests", (1 - varbitclansettings_41364));
        if ((varbitclansettings_41363 == 0)) {
            IF_SETHIDE(true, comp(178, 8));
            IF_SETHIDE(false, comp(178, 9));
            IF_SETHIDE(false, comp(178, 11));
            IF_SETHIDE(true, comp(178, 12));
            IF_SETHIDE(false, comp(178, 14));
            IF_SETHIDE(true, comp(178, 15));
        } else if ((varbitclansettings_41363 == 1)) {
            IF_SETHIDE(false, comp(178, 8));
            IF_SETHIDE(true, comp(178, 9));
            IF_SETHIDE(true, comp(178, 11));
            IF_SETHIDE(false, comp(178, 12));
            IF_SETHIDE(false, comp(178, 14));
            IF_SETHIDE(true, comp(178, 15));
        } else {
            IF_SETHIDE(false, comp(178, 8));
            IF_SETHIDE(true, comp(178, 9));
            IF_SETHIDE(false, comp(178, 11));
            IF_SETHIDE(true, comp(178, 12));
            IF_SETHIDE(true, comp(178, 14));
            IF_SETHIDE(false, comp(178, 15));
        };
    } else {
        printmessage("You're not in a clan so can't access this.");
        return;
    };
    return;
}