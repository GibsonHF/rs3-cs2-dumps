//
function script19114(): void {
    var int0 = -1 as graphic;
    var int1 = -1 as graphic;
    switch (MAP_LANG()) {
        case 0: {
            int0 = 34153 as graphic;
            int1 = 34157 as graphic;
            break;
        }
        case 1: {
            int0 = 34154 as graphic;
            int1 = 34158 as graphic;
            break;
        }
        case 2: {
            int0 = 34155 as graphic;
            int1 = 34159 as graphic;
            break;
        }
        case 3: {
            int0 = 34156 as graphic;
            int1 = 34160 as graphic;
            break;
        }
    };
    IF_SETGRAPHIC(int0, comp(1147, 150));  // trh199_overlay:claim_rewards_graphic
    IF_SETGRAPHIC(int1, comp(1147, 151));  // trh199_overlay:claim_rewards_disabled_graphic
    return;
}