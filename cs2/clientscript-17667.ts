//
function script17667(int0: component, int1: unknown_int, int2: int, int3: int, string0: unknown_string): void {
    CC_PAGEDLAYER_SETACTIVEPAGE(int1, 1);
    script15939(int0, int3, IF_GETNEXTCATEGORYSUBID(int3, int0), 0, int2, 0, 0, 0, 0, 0, 0, 1, 1);
    script10033(int3, IF_GETNEXTCATEGORYSUBID(int3, int0), 0, 0, 0, 0, 0, 0, 1, 1, 4128 as dbrow);
    CC_SETONVARTRANSMIT(callback());
    CC_SETTRANS(125);
    script10485(int3, IF_GETNEXTCATEGORYSUBID(int3, int0), 0, 0, 0, 0, 0, 0, 1, 1, 2100, `${string0} - Page ${inttostring((int1 + 1), 10)}<br><br>cc_pagedlayer_createheader is used to create the linked header panel components. These are bound by the parent not the pagedlayer, so they need positioning to overlap the paged layer component itself.`);
    CC_SETONVARTRANSMIT(callback());
    return;
}