//
function script12211(): void {
    var int0 = 0;
    IF_SETTEXT(`Prestige Level - ${inttostring(varbitplayer_30445, 10)}`, comp(1716, 9));  // trh81_zodiac:prestige_title
    while ((int0 <= varbitplayer_30446)) {
        script12212(int0);
        int0 = (int0 + 1);
    };
    switch (varbitplayer_30445) {
        case 1: {
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(false, comp(1716, 203));  // trh81_zodiac:green_dragon_hat_unlocked
            };
            IF_SETHIDE(true, comp(1716, 206));  // trh81_zodiac:green_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 83));  // trh81_zodiac:blue_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 74));  // trh81_zodiac:red_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 6));  // trh81_zodiac:black_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 92));  // trh81_zodiac:gold_dragon_hat_disabled
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(1716, 206));  // trh81_zodiac:green_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 203));  // trh81_zodiac:green_dragon_hat_unlocked
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(false, comp(1716, 80));  // trh81_zodiac:blue_dragon_hat_unlocked
            };
            IF_SETHIDE(true, comp(1716, 83));  // trh81_zodiac:blue_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 74));  // trh81_zodiac:red_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 6));  // trh81_zodiac:black_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 92));  // trh81_zodiac:gold_dragon_hat_disabled
            break;
        }
        case 3: {
            IF_SETHIDE(false, comp(1716, 203));  // trh81_zodiac:green_dragon_hat_unlocked
            IF_SETHIDE(true, comp(1716, 206));  // trh81_zodiac:green_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 80));  // trh81_zodiac:blue_dragon_hat_unlocked
            IF_SETHIDE(true, comp(1716, 83));  // trh81_zodiac:blue_dragon_hat_disabled
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(false, comp(1716, 71));  // trh81_zodiac:red_dragon_hat_unlocked
            };
            IF_SETHIDE(true, comp(1716, 74));  // trh81_zodiac:red_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 6));  // trh81_zodiac:black_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 92));  // trh81_zodiac:gold_dragon_hat_disabled
            break;
        }
        case 4: {
            IF_SETHIDE(false, comp(1716, 203));  // trh81_zodiac:green_dragon_hat_unlocked
            IF_SETHIDE(true, comp(1716, 206));  // trh81_zodiac:green_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 80));  // trh81_zodiac:blue_dragon_hat_unlocked
            IF_SETHIDE(true, comp(1716, 83));  // trh81_zodiac:blue_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 71));  // trh81_zodiac:red_dragon_hat_unlocked
            IF_SETHIDE(true, comp(1716, 74));  // trh81_zodiac:red_dragon_hat_disabled
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(false, comp(1716, 3));  // trh81_zodiac:black_dragon_hat_unlocked
            };
            IF_SETHIDE(true, comp(1716, 6));  // trh81_zodiac:black_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 92));  // trh81_zodiac:gold_dragon_hat_disabled
            break;
        }
        case 5: {
            IF_SETHIDE(false, comp(1716, 203));  // trh81_zodiac:green_dragon_hat_unlocked
            IF_SETHIDE(true, comp(1716, 206));  // trh81_zodiac:green_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 80));  // trh81_zodiac:blue_dragon_hat_unlocked
            IF_SETHIDE(true, comp(1716, 83));  // trh81_zodiac:blue_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 71));  // trh81_zodiac:red_dragon_hat_unlocked
            IF_SETHIDE(true, comp(1716, 74));  // trh81_zodiac:red_dragon_hat_disabled
            IF_SETHIDE(false, comp(1716, 3));  // trh81_zodiac:black_dragon_hat_unlocked
            IF_SETHIDE(true, comp(1716, 6));  // trh81_zodiac:black_dragon_hat_disabled
            if ((varbitplayer_30445 == varbitplayer_30446)) {
                IF_SETHIDE(false, comp(1716, 87));  // trh81_zodiac:gold_dragon_hat_unlocked
            };
            IF_SETHIDE(true, comp(1716, 92));  // trh81_zodiac:gold_dragon_hat_disabled
            break;
        }
    };
    if ((varbitplayer_30445 > varbitplayer_30446)) {
        IF_SETHIDE(false, comp(1716, 59));  // trh81_zodiac:prize_layer
        IF_SETHIDE(false, comp(1716, 191));  // trh81_zodiac:confirm_button_disabled_layer
    } else {
        IF_SETHIDE(true, comp(1716, 59));  // trh81_zodiac:prize_layer
    };
    return;
}