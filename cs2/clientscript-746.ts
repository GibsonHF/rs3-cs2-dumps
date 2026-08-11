//
function script746(int0: number): void {
    if ((int0 == 1)) {
        IF_SETONTIMER(callback(script747, 255, 1), comp(17, 1));  // tuska_hub_overlay:main_progress_bar
    } else {
        IF_SETONTIMER(callback(script747, 0, 1), comp(17, 1));  // tuska_hub_overlay:main_progress_bar
    };
    return;
}