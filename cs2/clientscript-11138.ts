//
function script11138(int0: int): void {
    IF_SETHIDE(false, comp(1600, 19));
    IF_SETHIDE(true, comp(1600, 17));
    IF_SETHIDE(true, comp(1600, 7));
    IF_SETHIDE(true, comp(1600, 18));
    IF_SETHIDE(true, comp(1600, 32));
    IF_SETMODELANIM(26223 as seq, comp(1600, 23));
    IF_SETMODELANIM(26226 as seq, comp(1600, 24));
    IF_SETTEXT(`Your time: ${inttostring(int0, 10)}s`, comp(1600, 25));
    return;
}