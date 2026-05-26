//
function script1865(int0: number): void {
    script13972(17498173, -1, 28595, "Rewards", script9670(0, int0));
    script13972(17498174, -1, 28595, "Unlocks", script9670(1, int0));
    IF_SETHIDE(script9464(0, int0), comp(267, 13));
    IF_SETHIDE(script9464(1, int0), comp(267, 42));
    if ((int0 == 0)) {
        script1867();
    } else if ((int0 == 1)) {
        script1914();
    };
    return;
}