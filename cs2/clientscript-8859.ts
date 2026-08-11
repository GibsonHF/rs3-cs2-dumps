//
function script8859(): void {
    if ((varplayer_3901 == 1)) {
        IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3901, 1)} Bond`, comp(248, 64));  // donation:player_bond_donation_so_far
    } else {
        IF_SETTEXT(`${TOSTRING_LOCALISED(varplayer_3901, 1)} Bonds`, comp(248, 64));  // donation:player_bond_donation_so_far
    };
    return;
}