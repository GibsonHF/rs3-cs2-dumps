//
function script9109(): void {
    if ((varplayer_3906 == 995 as obj)) {
        if ((varplayer_3908 == 1)) {
            IF_SETTEXT(`Total Donation Value: ${TOSTRING_LOCALISED(varplayer_3909, 1)} coin`, 16252984);
        } else {
            IF_SETTEXT(`Total Donation Value: ${TOSTRING_LOCALISED(varplayer_3909, 1)} coins`, 16252984);
        };
    } else if (((varplayer_3906 == 29492 as obj) || (varplayer_3906 == 29494 as obj))) {
        IF_SETTEXT(`Total Bonds Donated: ${TOSTRING_LOCALISED(varplayer_3909, 1)}`, 16252984);
    } else if ((varplayer_3909 == 1)) {
        IF_SETTEXT(`Total Donation Value: ${TOSTRING_LOCALISED(varplayer_3909, 1)} coin`, 16252984);
    } else {
        IF_SETTEXT(`Total Donation Value: ${TOSTRING_LOCALISED(varplayer_3909, 1)} coins`, 16252984);
    };
    return;
}