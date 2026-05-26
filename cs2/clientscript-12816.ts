//
function script12816(int0: number, int1: number, int2: number, int3: number): void {
    IF_SETTEXT(`${inttostring(MIN(int1, int0), 10)}/${inttostring(int1, 10)}`, int2);
    IF_SETTEXT(inttostring(int0, 10), int3);
    return;
}