//
function script8860(): void {
    var int0 = 0;
    if ((varplayer_3906 == 995 as obj)) {
        if ((varplayer_3908 == 1)) {
            IF_SETTEXT(`Total Donation Value: ${TOSTRING_LOCALISED(varplayer_3908, 1)} coin`, comp(248, 56));
        } else {
            IF_SETTEXT(`Total Donation Value: ${TOSTRING_LOCALISED(varplayer_3908, 1)} coins`, comp(248, 56));
        };
    } else if (((varplayer_3906 == 29492 as obj) || (varplayer_3906 == 29494 as obj))) {
        IF_SETTEXT(`Total Bonds Donated: ${TOSTRING_LOCALISED(varplayer_3908, 1)}`, comp(248, 56));
    } else {
        int0 = (varplayer_3908 * varclient_3761);
        if ((int0 == 1)) {
            IF_SETTEXT(`Total Donation Value: ${TOSTRING_LOCALISED(int0, 1)} coin`, comp(248, 56));
        } else {
            IF_SETTEXT(`Total Donation Value: ${TOSTRING_LOCALISED(int0, 1)} coins`, comp(248, 56));
        };
    };
    return;
}