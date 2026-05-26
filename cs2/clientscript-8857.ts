//
function script8857(): void {
    if ((varplayer_3902 == 0)) {
        if ((varplayer_3900 == 1)) {
            IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3900, 1)} coin`, 16252946);
        } else {
            IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3900, 1)} coins`, 16252946);
        };
    } else if ((varplayer_3900 > 0)) {
        if ((varplayer_3902 == 1)) {
            IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3902, 1)} Million<br>${TOSTRING_LOCALISED(varplayer_3900, 1)} Coins`, 16252946);
        };
        IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3902, 1)} Million<br>${TOSTRING_LOCALISED(varplayer_3900, 1)} Coins`, 16252946);
    } else {
        IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3902, 1)} Million`, 16252946);
    };
    return;
}