//
function script20211(int0: unknown_int): void {
    switch (varbitplayer_58385) {
        case 0: {
            IF_SETHIDE(false, comp(1401, 16));
            IF_SETHIDE(true, comp(1401, 17));
            IF_SETHIDE(true, comp(1401, 30));
            break;
        }
        case 1: {
            IF_SETHIDE(true, comp(1401, 16));
            IF_SETHIDE(false, comp(1401, 17));
            IF_SETHIDE(true, comp(1401, 30));
            break;
        }
        case 3: {
            IF_SETHIDE(true, comp(1401, 16));
            IF_SETHIDE(true, comp(1401, 17));
            IF_SETHIDE(false, comp(1401, 30));
            if ((int0 == 1)) {
                script20230();
            };
            break;
        }
        case 2:
        case 4: {
            IF_SETHIDE(true, comp(1401, 16));
            IF_SETHIDE(true, comp(1401, 17));
            IF_SETHIDE(false, comp(1401, 30));
            if ((int0 == 1)) {
                script20230();
            };
            break;
        }
        case 5: {
            IF_SETHIDE(true, comp(1401, 16));
            IF_SETHIDE(true, comp(1401, 17));
            IF_SETHIDE(true, comp(1401, 30));
            break;
        }
        default: {
            script12478(`Unrecognised onboarding step: ${inttostring(varbitplayer_58385, 10)}`);
            break;
        }
    };
    return;
}