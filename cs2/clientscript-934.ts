//
function script934(int0: number): void {
    switch (int0) {
        case 1: {
            IF_SETPOSITION(105, IF_GETY(comp(18, 12)), 0, 0, comp(18, 12));  // tuska_island_overlay:position_pulse
            break;
        }
        case 2: {
            IF_SETPOSITION(190, IF_GETY(comp(18, 12)), 0, 0, comp(18, 12));  // tuska_island_overlay:position_pulse
            break;
        }
        case 3: {
            IF_SETPOSITION(275, IF_GETY(comp(18, 12)), 0, 0, comp(18, 12));  // tuska_island_overlay:position_pulse
            break;
        }
    };
    IF_SETONTIMER(callback(script936, CLIENTCLOCK()), comp(18, 12));  // tuska_island_overlay:position_pulse
    return;
}