//
function script20342(): void {
    if ((varbitplayer_58378 == 0)) {
        IF_BUTTON_SETTOGGLED(1, comp(1587, 4));  // whop:normal_worlds
        IF_BUTTON_SETTOGGLED(0, comp(1587, 6));  // whop:league_worlds
    } else {
        IF_BUTTON_SETTOGGLED(0, comp(1587, 4));  // whop:normal_worlds
        IF_BUTTON_SETTOGGLED(1, comp(1587, 6));  // whop:league_worlds
    };
    return;
}