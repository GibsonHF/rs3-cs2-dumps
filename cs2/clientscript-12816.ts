//
function script12816(int0: int, int1: int, int2: component, int3: component): void {
    IF_SETTEXT(`${inttostring(MIN(int1, int0), 10)}/${inttostring(int1, 10)}`, int2);
    IF_SETTEXT(inttostring(int0, 10), int3);
    return;
}