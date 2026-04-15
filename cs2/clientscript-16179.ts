//
function script16179(): void {
    stack(11300);
    stack(42860731);
    IF_SETGRAPHIC();
    stack(11301);
    stack(42860732);
    IF_SETGRAPHIC();
    stack(11302);
    stack(42860733);
    IF_SETGRAPHIC();
    switch (varbitplayer_44975) {
        case 2: {
            stack(11292);
            stack(42860731);
            IF_SETGRAPHIC();
            IF_SETMODEL(104767, 42860729);
            break;
        }
        case 3: {
            stack(11293);
            stack(42860732);
            IF_SETGRAPHIC();
            IF_SETMODEL(104769, 42860729);
            break;
        }
        case 4: {
            stack(11294);
            stack(42860733);
            IF_SETGRAPHIC();
            IF_SETMODEL(104768, 42860729);
            break;
        }
        default: {
            IF_SETMODEL(93441 as model, comp(654, 185));
            break;
        }
    };
    return;
}