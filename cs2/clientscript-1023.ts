//
function script1023(int0: int): void {
    if ((int0 == 0)) {
        IF_SETHIDE(false, comp(1890, 95));
        IF_SETHIDE(true, comp(1890, 96));
        IF_SETHIDE(false, comp(1890, 92));
        IF_SETHIDE(true, comp(1890, 93));
    } else if ((int0 == 1)) {
        IF_SETHIDE(true, comp(1890, 95));
        IF_SETHIDE(false, comp(1890, 96));
        IF_SETHIDE(false, comp(1890, 92));
        IF_SETHIDE(true, comp(1890, 93));
    } else {
        IF_SETHIDE(true, comp(1890, 92));
        IF_SETHIDE(false, comp(1890, 93));
        IF_SETHIDE(false, comp(1890, 95));
        IF_SETHIDE(true, comp(1890, 96));
    };
    return;
}