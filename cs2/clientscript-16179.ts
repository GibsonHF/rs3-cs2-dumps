//
function script16179(): void {
    IF_SETGRAPHIC(11300, 42860731);
    IF_SETGRAPHIC(11301, 42860732);
    IF_SETGRAPHIC(11302, 42860733);
    switch (varbitplayer_44975) {
        case 2: {
            IF_SETGRAPHIC(11292, 42860731);
            IF_SETMODEL(104767, 42860729);
            break;
        }
        case 3: {
            IF_SETGRAPHIC(11293, 42860732);
            IF_SETMODEL(104769, 42860729);
            break;
        }
        case 4: {
            IF_SETGRAPHIC(11294, 42860733);
            IF_SETMODEL(104768, 42860729);
            break;
        }
        default: {
            IF_SETMODEL(93441, 42860729);
            break;
        }
    };
    return;
}