//
function script3440(int0: number, int1: number, int2: number): void {
    IF_SETGRAPHIC(int1, comp(1625, 5));  // tuska_effects:blur_component
    IF_SETCOLOUR(int2, comp(1625, 5));  // tuska_effects:blur_component
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script5243, 255), comp(1625, 5));  // tuska_effects:blur_component
    } else {
        IF_SETONTIMER(callback(script5243, 0), comp(1625, 5));  // tuska_effects:blur_component
    };
    return;
}