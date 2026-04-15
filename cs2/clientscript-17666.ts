//
function script17666(int0: component, int1: unknown_int, int2: int, int3: int, string0: unknown_string): void {
    CC_PAGEDCAROUSEL_SETSELECTED(int1, 1);
    script15939(int0, int3, IF_GETNEXTCATEGORYSUBID(int3, int0), 0, int2, 0, 0, 0, 0, 0, 0, 1, 1);
    script10033(int3, IF_GETNEXTCATEGORYSUBID(int3, int0), 0, 0, 0, 0, 0, 0, 1, 1, 4128 as dbrow);
    CC_SETONVARTRANSMIT(callback());
    script10485(int3, IF_GETNEXTCATEGORYSUBID(int3, int0), 0, 0, 0, 0, 0, 0, 1, 1, 2100, `${string0} - Page ${inttostring((int1 + 1), 10)}`);
    CC_SETONVARTRANSMIT(callback());
    return;
}