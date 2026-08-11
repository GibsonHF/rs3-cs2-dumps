//
function script8857(): void {
    if ((varplayer_3902 == 0)) {
        if ((varplayer_3900 == 1)) {
            IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3900, 1)} coin`, comp(248, 18));  // donation:player_donation_so_far
        } else {
            IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3900, 1)} coins`, comp(248, 18));  // donation:player_donation_so_far
        };
    } else if ((varplayer_3900 > 0)) {
        if ((varplayer_3902 == 1)) {
            IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3902, 1)} Million<br>${TOSTRING_LOCALISED(varplayer_3900, 1)} Coins`, comp(248, 18));  // donation:player_donation_so_far
        };
        IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3902, 1)} Million<br>${TOSTRING_LOCALISED(varplayer_3900, 1)} Coins`, comp(248, 18));  // donation:player_donation_so_far
    } else {
        IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3902, 1)} Million`, comp(248, 18));  // donation:player_donation_so_far
    };
    return;
}