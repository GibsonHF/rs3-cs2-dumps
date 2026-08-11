//
function script2221(): void {
    switch (varplayer_2959) {
        case 0: {
            IF_SETTEXT("", comp(931, 61));  // easter10_resourcegame:error_text
            break;
        }
        case 1: {
            IF_SETTEXT("Not enough workers.", comp(931, 61));  // easter10_resourcegame:error_text
            break;
        }
        case 2: {
            IF_SETTEXT("Not enough resources.", comp(931, 61));  // easter10_resourcegame:error_text
            break;
        }
        case 3: {
            IF_SETTEXT("Worker limit reached.", comp(931, 61));  // easter10_resourcegame:error_text
            break;
        }
    };
    return;
}