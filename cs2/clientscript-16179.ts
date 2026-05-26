//
function script16179(): void {
    IF_SETGRAPHIC(11300 as graphic, comp(654, 187));
    IF_SETGRAPHIC(11301 as graphic, comp(654, 188));
    IF_SETGRAPHIC(11302 as graphic, comp(654, 189));
    switch (varbitplayer_44975) {
        case 2: {
            IF_SETGRAPHIC(11292 as graphic, comp(654, 187));
            IF_SETMODEL(104767 as model, comp(654, 185));
            break;
        }
        case 3: {
            IF_SETGRAPHIC(11293 as graphic, comp(654, 188));
            IF_SETMODEL(104769 as model, comp(654, 185));
            break;
        }
        case 4: {
            IF_SETGRAPHIC(11294 as graphic, comp(654, 189));
            IF_SETMODEL(104768 as model, comp(654, 185));
            break;
        }
        default: {
            IF_SETMODEL(93441 as model, comp(654, 185));
            break;
        }
    };
    return;
}