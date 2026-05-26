//
function script20211(int0: number): void {
    switch (varbitplayer_58385) {
        case 0: {
            IF_SETHIDE(0, 91815952);
            IF_SETHIDE(1, 91815953);
            IF_SETHIDE(1, 91815966);
            break;
        }
        case 1: {
            IF_SETHIDE(1, 91815952);
            IF_SETHIDE(0, 91815953);
            IF_SETHIDE(1, 91815966);
            break;
        }
        case 3: {
            IF_SETHIDE(1, 91815952);
            IF_SETHIDE(1, 91815953);
            IF_SETHIDE(0, 91815966);
            if ((int0 == 1)) {
                script20230();
            };
            break;
        }
        case 2:
        case 4: {
            IF_SETHIDE(1, 91815952);
            IF_SETHIDE(1, 91815953);
            IF_SETHIDE(0, 91815966);
            if ((int0 == 1)) {
                script20230();
            };
            break;
        }
        case 5: {
            IF_SETHIDE(1, 91815952);
            IF_SETHIDE(1, 91815953);
            IF_SETHIDE(1, 91815966);
            break;
        }
        default: {
            script12478(`Unrecognised onboarding step: ${inttostring(varbitplayer_58385, 10)}`);
            break;
        }
    };
    return;
}