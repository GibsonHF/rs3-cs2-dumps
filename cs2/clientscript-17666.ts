//
function script17666(int0: number, int1: number, int2: number, int3: number, string0: string): void {
    CC_PAGEDCAROUSEL_SETSELECTED(int1, 1);
    script15939(int0, int3, IF_GETNEXTCATEGORYSUBID(int3, int0), 0, int2, 0, 0, 0, 0, 0, 0, 1, 1);
    script10033(int3, IF_GETNEXTCATEGORYSUBID(int3, int0), 0, 0, 0, 0, 0, 0, 1, 1, 4128);
    CC_SETONVARTRANSMIT(callback());
    script10485(int3, IF_GETNEXTCATEGORYSUBID(int3, int0), 0, 0, 0, 0, 0, 0, 1, 1, 2100, `${string0} - Page ${inttostring((int1 + 1), 10)}`);
    CC_SETONVARTRANSMIT(callback());
    return;
}