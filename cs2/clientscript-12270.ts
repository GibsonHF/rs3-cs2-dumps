//
function script12270(): void {
    IF_SETHIDE(false, comp(1718, 32));  // godscore_window:default
    IF_SETHIDE(true, comp(1718, 27));  // godscore_window:nomel_icthlarin_chosen
    IF_SETHIDE(true, comp(1718, 29));  // godscore_window:nomel_death_chosen
    IF_SETHIDE(true, comp(1718, 25));  // godscore_window:fotg
    IF_SETHIDE(true, comp(1718, 23));  // godscore_window:nomel_icthlarin_chosen_fotg
    IF_SETHIDE(true, comp(1718, 24));  // godscore_window:nomel_death_chosen_fotg
    if ((varbitplayer_30579 > 0)) {
        IF_SETHIDE(true, comp(1718, 32));  // godscore_window:default
        switch (varbitplayer_30579) {
            case 1: {
                IF_SETHIDE(false, comp(1718, 27));  // godscore_window:nomel_icthlarin_chosen
                break;
            }
            case 2: {
                IF_SETHIDE(false, comp(1718, 29));  // godscore_window:nomel_death_chosen
                break;
            }
            case 3: {
                IF_SETHIDE(false, comp(1718, 25));  // godscore_window:fotg
                break;
            }
            case 4: {
                IF_SETHIDE(false, comp(1718, 23));  // godscore_window:nomel_icthlarin_chosen_fotg
                break;
            }
            case 5: {
                IF_SETHIDE(false, comp(1718, 24));  // godscore_window:nomel_death_chosen_fotg
                break;
            }
        };
    };
    return;
}