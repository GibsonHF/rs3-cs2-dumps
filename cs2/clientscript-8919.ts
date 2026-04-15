//
function script8919(int0: obj, int1: unknown_int, string0: unknown_string, string1: string, string2: unknown_string): unknown_int {
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