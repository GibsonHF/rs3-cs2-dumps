//
function script12834(int0: int, int1: int, int2: int, int3: int): void {
    if ((IF_GETHIDE(comp(1322, 1)) == false)) {
        return;
    };
    IF_SETHIDE(false, comp(1322, 1));
    if (((script6431() == true) && (IF_GETHIDE(comp(276, 18)) == false))) {
        IF_SETHIDE(true, comp(276, 18));
    };
    script13392(int0, int1, int2, int3);
    varclient_6539 = false;
    if ((script6431() == true)) {
        ACTIVECLANCHANNEL_FIND_AFFINED(1);
    };
    return;
}