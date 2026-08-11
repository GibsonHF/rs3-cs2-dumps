//
function script5243(int0: number): void {
    var int1 = IF_GETTRANS(comp(1625, 5));  // tuska_effects:blur_component
    if ((int1 == int0)) {
        IF_SETONTIMER(callback(), comp(1625, 5));  // tuska_effects:blur_component
    } else if ((int1 < int0)) {
        IF_SETTRANS((int1 + 1), comp(1625, 5));  // tuska_effects:blur_component
    } else {
        IF_SETTRANS((int1 - 1), comp(1625, 5));  // tuska_effects:blur_component
    };
    return;
}