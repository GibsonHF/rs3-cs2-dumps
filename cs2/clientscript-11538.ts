//
function script11538(int0: graphic, string0: string): void {
    IF_SETONOP(callback(), comp(891, 27));
    IF_SETHIDE(0, 58392605);
    stack(int0);
    stack(58392606);
    IF_SETGRAPHIC();
    IF_SETTEXT("", 58392604);
    IF_SETTEXT(string0, 58392607);
    IF_SETSIZE((30 + PARAWIDTH(string0, 200, 173)), 0, 0, 1, 58392605);
    return;
}