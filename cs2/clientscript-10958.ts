//
function script10958(): void {
    IF_SETSIZE(417, 408, 0, 0, comp(1583, 9));  // trh44_valentines15_milestones:love_fill
    IF_SETSIZE(417, 408, 0, 0, comp(1583, 8));  // trh44_valentines15_milestones:hate_fill
    IF_SETONTIMER(callback(script10977), comp(1583, 9));  // trh44_valentines15_milestones:love_fill
    IF_SETONTIMER(callback(script10978), comp(1583, 8));  // trh44_valentines15_milestones:hate_fill
    return;
}