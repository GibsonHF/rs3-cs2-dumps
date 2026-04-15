//
function script11622(): void {
    switch (varbitplayer_51273) {
        case 1: {
            IF_SETHIDE(true, comp(891, 11));
            IF_SETHIDE(false, comp(891, 25));
            break;
        }
        case 2: {
            if ((varbitplayer_54119 == 0)) {
                IF_SETHIDE(true, comp(891, 25));
                IF_SETHIDE(false, comp(891, 11));
                IF_SETTEXT("You do not meet the requirements to claim this item.", comp(891, 11));
            } else {
                script18122();
            };
            break;
        }
        default: {
            script18122();
            break;
        }
    };
    return;
}