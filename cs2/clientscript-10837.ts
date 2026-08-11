//
function script10837(int0: number): void {
    IF_SETTEXT(`${inttostring((100 - int0), 10)}%`, comp(1568, 7));  // xmas2014_cracker_pull:progress_text
    IF_SETSIZE(SCALE(240, 100, int0), 0, 0, 1, comp(1568, 6));  // xmas2014_cracker_pull:progress_bar
    return;
}