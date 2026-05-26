//
function script8857(): void {
    if ((varplayer_3902 == 0)) {
        if ((varplayer_3900 == 1)) {
            IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3900, 1)} coin`, comp(248, 18));
        } else {
            IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3900, 1)} coins`, comp(248, 18));
        };
    } else if ((varplayer_3900 > 0)) {
        if ((varplayer_3902 == 1)) {
            IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3902, 1)} Million<br>${TOSTRING_LOCALISED(varplayer_3900, 1)} Coins`, comp(248, 18));
        };
        IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3902, 1)} Million<br>${TOSTRING_LOCALISED(varplayer_3900, 1)} Coins`, comp(248, 18));
    } else {
        IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3902, 1)} Million`, comp(248, 18));
    };
    return;
}