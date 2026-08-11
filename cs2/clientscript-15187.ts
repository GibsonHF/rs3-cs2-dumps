//
function script15187(int0: number, int1: number, int2: number): void {
    stack(442368);
    stack(int0);
    DB_FIND(0);
    var int3 = dbrow_findnext();
    if ((int3 != -1)) {
        IF_SETGRAPHIC(dbrow_getfield(int3, 442384, 0), int1);
        IF_SETTEXT(dbrow_getfield(int3, 442400, 0), int2);
    };
    if ((int0 == 0)) {
        IF_SETHIDE(true, comp(653, 345));  // event_crafting:tutorial_back
    } else {
        IF_SETHIDE(false, comp(653, 345));  // event_crafting:tutorial_back
    };
    if ((int0 == 6)) {
        IF_SETHIDE(true, comp(653, 353));  // event_crafting:tutorial_forward
    } else {
        IF_SETHIDE(false, comp(653, 353));  // event_crafting:tutorial_forward
    };
    return;
}