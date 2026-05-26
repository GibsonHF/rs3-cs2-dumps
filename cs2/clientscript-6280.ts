//
function script6280(int0: number): void {
    IF_SETHIDE(1, 85000431);
    IF_SETHIDE(1, 85000430);
    IF_SETHIDE(1, 85000429);
    IF_SETHIDE(1, 85000433);
    IF_SETHIDE(1, 85000432);
    IF_SETHIDE(1, 85000462);
    IF_SETHIDE(1, 85000455);
    IF_SETHIDE(1, 85000448);
    if ((int0 == 1)) {
        IF_SETTEXT("Taunt", 85000316);
        IF_SETHIDE(0, 85000431);
        IF_SETHIDE(0, 85000432);
        IF_SETHIDE(0, 85000462);
    } else if ((int0 == 2)) {
        IF_SETTEXT("Title", 85000316);
        IF_SETHIDE(0, 85000430);
        IF_SETHIDE(0, 85000433);
        IF_SETHIDE(0, 85000455);
    } else {
        IF_SETTEXT("Reward", 85000316);
        IF_SETHIDE(0, 85000429);
        IF_SETHIDE(0, 85000448);
    };
    return;
}