//
function script18122(): void {
    IF_SETHIDE(1, 58392590);
    if ((varbitplayer_51272 == 1)) {
        IF_SETHIDE(1, 58392587);
        IF_SETHIDE(0, 58392601);
    } else {
        switch (varbitplayer_51273) {
            case 0: {
                IF_SETTEXT("You do not have enough RuneCoins.", 58392587);
                break;
            }
            case 2: {
                if ((varplayer_5148 == -1 as struct)) {
                    script12478("Couldn't set the correct Oddments currency name when telling players they don't have enough of it, because %rewardshop_struct was null.");
                    IF_SETTEXT("You cannot afford this item.", 58392587);
                } else {
                    IF_SETTEXT(`You do not have enough ${script17844(varplayer_5148, 1)}.`, 58392587);
                };
                break;
            }
        };
        IF_SETHIDE(0, 58392587);
        IF_SETHIDE(1, 58392601);
    };
    return;
}