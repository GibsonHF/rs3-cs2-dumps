//
function script1865(int0: int): void {
    script13972(comp(267, 61), comp(-1, 65535), 28595 as struct, "Rewards", script9670(0, int0));
    script13972(comp(267, 62), comp(-1, 65535), 28595 as struct, "Unlocks", script9670(1, int0));
    IF_SETHIDE(script9464(0, int0), comp(267, 13));
    IF_SETHIDE(script9464(1, int0), comp(267, 42));
    if ((int0 == 0)) {
        script1867();
    } else if ((int0 == 1)) {
        script1914();
    };
    return;
}