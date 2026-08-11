//
function script14307(int0: number, int1: number): void {
    script13972(53084274, 53084275, 28595, "Scores", script9670(1, int0));
    script13973(53084277, 53084278, 28595, "Awards", int1, script9670(2, int0));
    IF_SETHIDE(script9464(1, int0), comp(810, 51));  // sc_scores:tab_scores
    IF_SETHIDE(script9464(2, int0), comp(810, 57));  // sc_scores:tab_awards
    return;
}