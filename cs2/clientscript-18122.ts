//
function script18122(): void {
    IF_SETHIDE(true, comp(891, 14));  // mtx_front_end_confirm:probabilities
    if ((varbitplayer_51272 == 1)) {
        IF_SETHIDE(true, comp(891, 11));  // mtx_front_end_confirm:cannot_buy_text
        IF_SETHIDE(false, comp(891, 25));  // mtx_front_end_confirm:buy_container
    } else {
        switch (varbitplayer_51273) {
            case 0: {
                IF_SETTEXT("You do not have enough RuneCoins.", comp(891, 11));  // mtx_front_end_confirm:cannot_buy_text
                break;
            }
            case 2: {
                if ((varplayer_5148 == -1 as struct)) {
                    script12478("Couldn't set the correct Oddments currency name when telling players they don't have enough of it, because %rewardshop_struct was null.");
                    IF_SETTEXT("You cannot afford this item.", comp(891, 11));  // mtx_front_end_confirm:cannot_buy_text
                } else {
                    IF_SETTEXT(`You do not have enough ${script17844(varplayer_5148, 1)}.`, comp(891, 11));  // mtx_front_end_confirm:cannot_buy_text
                };
                break;
            }
        };
        IF_SETHIDE(false, comp(891, 11));  // mtx_front_end_confirm:cannot_buy_text
        IF_SETHIDE(true, comp(891, 25));  // mtx_front_end_confirm:buy_container
    };
    return;
}