//
function script12270(): void {
    IF_SETHIDE(false, comp(1718, 32));
    IF_SETHIDE(true, comp(1718, 27));
    IF_SETHIDE(true, comp(1718, 29));
    IF_SETHIDE(true, comp(1718, 25));
    IF_SETHIDE(true, comp(1718, 23));
    IF_SETHIDE(true, comp(1718, 24));
    if ((varbitplayer_30579 > 0)) {
        IF_SETHIDE(true, comp(1718, 32));
        switch (varbitplayer_30579) {
            case 1: {
                IF_SETHIDE(false, comp(1718, 27));
                break;
            }
            case 2: {
                IF_SETHIDE(false, comp(1718, 29));
                break;
            }
            case 3: {
                IF_SETHIDE(false, comp(1718, 25));
                break;
            }
            case 4: {
                IF_SETHIDE(false, comp(1718, 23));
                break;
            }
            case 5: {
                IF_SETHIDE(false, comp(1718, 24));
                break;
            }
        };
    };
    return;
}