//
function script16976(): void {
    switch (varbitplayer_52106) {
        case 0: {
            IF_SETHIDE(true, comp(1068, 50));
            IF_SETHIDE(true, comp(1068, 0));
            IF_SETHIDE(true, comp(1068, 1));
            IF_SETHIDE(true, comp(1068, 4));
            IF_SETHIDE(true, comp(1068, 5));
            IF_SETHIDE(true, comp(1068, 7));
            IF_SETHIDE(true, comp(1068, 8));
            break;
        }
        case 1:
        case 2: {
            IF_SETHIDE(true, comp(1068, 50));
            IF_SETHIDE(false, comp(1068, 0));
            IF_SETHIDE(false, comp(1068, 1));
            IF_SETHIDE(true, comp(1068, 4));
            IF_SETHIDE(true, comp(1068, 5));
            IF_SETHIDE(true, comp(1068, 7));
            IF_SETHIDE(true, comp(1068, 8));
            break;
        }
        case 3:
        case 4: {
            IF_SETHIDE(true, comp(1068, 50));
            IF_SETHIDE(false, comp(1068, 4));
            IF_SETHIDE(false, comp(1068, 5));
            IF_SETHIDE(true, comp(1068, 7));
            IF_SETHIDE(true, comp(1068, 8));
            break;
        }
        case 5:
        case 6: {
            IF_SETHIDE(true, comp(1068, 50));
            IF_SETHIDE(false, comp(1068, 7));
            IF_SETHIDE(false, comp(1068, 8));
            break;
        }
        case 7: {
            IF_SETHIDE(true, comp(1068, 50));
            break;
        }
        case 8: {
            IF_SETHIDE(false, comp(1068, 50));
            break;
        }
    };
    return;
}