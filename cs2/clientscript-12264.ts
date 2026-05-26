//
function script12264(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    IF_SETTEXT(`Metal Amount: ${inttostring(int2, 10)}/${inttostring(int3, 10)}`, comp(1726, 5));
    IF_SETTEXT(`Wood Amount: ${inttostring(int0, 10)}/${inttostring(int1, 10)}`, comp(1726, 6));
    IF_SETTEXT(`Support progress: ${inttostring(int4, 10)}%`, comp(1726, 7));
    IF_SETTEXT(`Head progress: ${inttostring(int5, 10)}%`, comp(1726, 8));
    return;
}