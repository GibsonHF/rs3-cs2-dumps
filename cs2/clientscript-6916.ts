//
function script6916(): void {
    if ((IF_GETHIDE(comp(243, 14)) == false)) {
        IF_SETHIDE(true, comp(243, 14));
        IF_SETHIDE(false, comp(243, 26));
        script6980();
        if ((varbitplayer_20631 == 0)) {
            IF_SETHIDE(true, comp(243, 29));
            IF_SETHIDE(true, comp(243, 32));
        };
        if ((varbitplayer_20632 == 0)) {
            IF_SETHIDE(true, comp(243, 30));
            IF_SETHIDE(true, comp(243, 32));
        };
        if ((varbitplayer_20633 == 0)) {
            IF_SETHIDE(true, comp(243, 31));
            IF_SETHIDE(true, comp(243, 32));
        };
    } else if ((IF_GETHIDE(comp(243, 26)) == false)) {
        IF_SETHIDE(true, comp(243, 26));
        IF_SETHIDE(false, comp(243, 33));
        script6980();
        if ((varbitplayer_20625 == 0)) {
            IF_SETHIDE(true, comp(243, 36));
        };
        if ((varbitplayer_20621 < 7)) {
            IF_SETHIDE(true, comp(243, 38));
            IF_SETHIDE(true, comp(243, 37));
        };
    } else if ((IF_GETHIDE(comp(243, 33)) == false)) {
        if ((varbitplayer_20621 >= 10)) {
            IF_SETHIDE(true, comp(243, 33));
            IF_SETHIDE(false, comp(243, 39));
            script6980();
            if ((varbitplayer_20635 == 0)) {
                IF_SETHIDE(true, comp(243, 42));
                IF_SETHIDE(true, comp(243, 45));
            };
            if ((varbitplayer_20636 == 0)) {
                IF_SETHIDE(true, comp(243, 43));
                IF_SETHIDE(true, comp(243, 45));
            };
            if ((varbitplayer_20634 == 0)) {
                IF_SETHIDE(true, comp(243, 44));
                IF_SETHIDE(true, comp(243, 45));
            };
        };
    } else if ((IF_GETHIDE(comp(243, 39)) == false)) {
        if ((varbitplayer_20621 >= 10)) {
            IF_SETHIDE(true, comp(243, 39));
            IF_SETHIDE(false, comp(243, 46));
            script6980();
            if ((varbitplayer_20629 == 0)) {
                IF_SETHIDE(true, comp(243, 50));
            };
            if ((varbitplayer_20630 == 0)) {
                IF_SETHIDE(true, comp(243, 51));
            };
            if ((varbitplayer_20621 < 11)) {
                IF_SETHIDE(true, comp(243, 53));
                IF_SETHIDE(true, comp(243, 52));
            };
        };
    } else if (((IF_GETHIDE(comp(243, 46)) == false) && (varbitplayer_20621 >= 13))) {
        IF_SETHIDE(true, comp(243, 46));
        IF_SETHIDE(false, comp(243, 47));
        script6980();
        if ((varbitplayer_20665 == 0)) {
            IF_SETHIDE(true, comp(243, 57));
        };
        if ((varbitplayer_20666 == 0)) {
            IF_SETHIDE(true, comp(243, 58));
        };
        if ((varbitplayer_20667 == 0)) {
            IF_SETHIDE(true, comp(243, 59));
        };
    };
    return;
}