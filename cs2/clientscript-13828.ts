//
function script13828(int0: number): void {
    var int1 = IF_GETHEIGHT(comp(517, 199));  // bank:bank_items_container
    IF_SETSCROLLSIZE(0, MAX(int0, int1), comp(517, 199));  // bank:bank_items_container
    IF_SETSCROLLPOS(0, script14369(varbitplayer_45141), comp(517, 199));  // bank:bank_items_container
    if ((int0 > int1)) {
        script72(33882307, 33882311, IF_GETSCROLLY(comp(517, 199)));  // bank:bank_items_container
    } else {
        script72(33882307, 33882311, 0);
    };
    script157(33882307, 33882311, IF_GETSCROLLY(comp(517, 199)), 1);  // bank:bank_items_container
    varclient_6679 = int0;
    return;
}