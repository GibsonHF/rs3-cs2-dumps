//
function script11168(int0: component, int1: int): void {
    script2996(int0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 4127 as dbrow);
    CC_SENDTOBACK();
    script2995(int0, 2, 0, 0, 0, 0, 0, 0, 1, 1, 2100 as dbrow, `DEBUG: Displaying status ${inttostring(int1, 10)} for this component.`);
    CC_SETTEXTALIGN(1, 1, 0);
    return;
}