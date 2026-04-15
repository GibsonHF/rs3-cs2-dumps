//
function script11993(int0: component, int1: unknown_int): void {
    IF_SETPOSITION(0, 0, 1, 1, int0);
    IF_SETSIZE(0, 0, 1, 1, int0);
    if (((int1 == 1) || (IF_GETWIDTH(int0) < 65))) {
        IF_SETTEXT(inttostring(script5256(), 10), int0);
    } else {
        IF_SETTEXT(`${inttostring(script5256(), 10)} / ${inttostring(script5255(), 10)}`, int0);
    };
    return;
}