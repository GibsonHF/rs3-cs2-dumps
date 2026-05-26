//
function script12990(): void {
    switch (varbitplayer_34641) {
        case 0: {
            IF_SETHIDE(true, comp(1820, 78));
            IF_SETHIDE(true, comp(1820, 80));
            break;
        }
        case 1: {
            IF_SETHIDE(false, comp(1820, 78));
            IF_SETHIDE(true, comp(1820, 80));
            break;
        }
        case 2: {
            IF_SETHIDE(true, comp(1820, 78));
            IF_SETHIDE(false, comp(1820, 80));
            break;
        }
    };
    return;
}