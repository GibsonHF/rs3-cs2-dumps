//
function script16619(): void {
    if ((varclient_4752 < 0)) {
        script1296("Time Crash has ended, rerolling now would be futile.");
    } else if ((varclient_4752 < 16)) {
        script16620();
    } else {
        IF_TRIGGEROP(comp(1253, 556), -1, 1);
    };
    return;
}