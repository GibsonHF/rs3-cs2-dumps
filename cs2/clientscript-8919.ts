//
function script8919(int0: number, int1: number, string0: string, string1: string, string2: string): number {
    IF_SETHIDE(false, comp(517, 318));
    IF_SETHIDE(true, comp(517, 328));
    IF_SETHIDE(true, comp(517, 329));
    IF_SETHIDE(true, comp(517, 327));
    IF_SETHIDE(true, comp(517, 326));
    IF_SETTEXT("Confirmation Required", comp(517, 322));
    IF_SETTEXT("Loading...", comp(517, 325));
    IF_SETONCLICK(callback(), comp(517, 319));
    script8808();
    script5487(1);
    return 0;
}