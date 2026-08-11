//
function script12765(int0: number, int1: number): void {
    var int2 = comp(1789, 19);  // cruc_signup_board:players_dm_lowest
    switch (int0) {
        case 1: {
            int2 = comp(1789, 19);  // cruc_signup_board:players_dm_lowest
            break;
        }
        case 2: {
            int2 = comp(1789, 36);  // cruc_signup_board:players_dm_low
            break;
        }
        case 3: {
            int2 = comp(1789, 43);  // cruc_signup_board:players_dm_mid
            break;
        }
        case 4: {
            int2 = comp(1789, 50);  // cruc_signup_board:players_dm_high
            break;
        }
        case 5: {
            int2 = comp(1789, 57);  // cruc_signup_board:players_dm_highest
            break;
        }
        case 6: {
            int2 = comp(1789, 64);  // cruc_signup_board:players_dm_bh
            break;
        }
    };
    IF_SETTEXT(`Players: ${inttostring(int1, 10)}`, int2);
    return;
}