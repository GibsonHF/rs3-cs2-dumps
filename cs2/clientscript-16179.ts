//
function script16179(): void {
    IF_SETGRAPHIC(11300 as graphic, comp(654, 187));  // trh168:multiplier_x2
    IF_SETGRAPHIC(11301 as graphic, comp(654, 188));  // trh168:multiplier_x3
    IF_SETGRAPHIC(11302 as graphic, comp(654, 189));  // trh168:multiplier_x4
    switch (varbitplayer_44975) {
        case 2: {
            IF_SETGRAPHIC(11292 as graphic, comp(654, 187));  // trh168:multiplier_x2
            IF_SETMODEL(104767 as model, comp(654, 185));  // trh168:claim_chest_model
            break;
        }
        case 3: {
            IF_SETGRAPHIC(11293 as graphic, comp(654, 188));  // trh168:multiplier_x3
            IF_SETMODEL(104769 as model, comp(654, 185));  // trh168:claim_chest_model
            break;
        }
        case 4: {
            IF_SETGRAPHIC(11294 as graphic, comp(654, 189));  // trh168:multiplier_x4
            IF_SETMODEL(104768 as model, comp(654, 185));  // trh168:claim_chest_model
            break;
        }
        default: {
            IF_SETMODEL(93441 as model, comp(654, 185));  // trh168:claim_chest_model
            break;
        }
    };
    return;
}