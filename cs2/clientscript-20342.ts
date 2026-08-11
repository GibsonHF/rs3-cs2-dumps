//
function script20342(): void {
    if ((varbitplayer_58378 == 0)) {
        IF_BUTTON_SETTOGGLED(1, comp(1587, 4));  // whop:frozen_area
        IF_BUTTON_SETTOGGLED(0, comp(1587, 6));  // whop:frozen_click_area
    } else {
        IF_BUTTON_SETTOGGLED(0, comp(1587, 4));  // whop:frozen_area
        IF_BUTTON_SETTOGGLED(1, comp(1587, 6));  // whop:frozen_click_area
    };
    return;
}