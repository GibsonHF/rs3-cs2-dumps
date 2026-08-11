//
function script5054(int0: number, int1: number): void {
    var int0 = (int0 - IF_GETSCROLLX(comp(1111, 12)));  // clan_field_editor:grid_container
    var int1 = (int1 - IF_GETSCROLLY(comp(1111, 12)));  // clan_field_editor:grid_container
    if ((int0 < 10)) {
        script5050(-10, 1, 0);
    } else if ((int0 > (IF_GETWIDTH(comp(1111, 12)) - (varclient_1396 + 10)))) {  // clan_field_editor:grid_container
        script5050(10, 1, 0);
    };
    if ((int1 < 10)) {
        script5050(-10, 1, 1);
    } else if ((int1 > (IF_GETHEIGHT(comp(1111, 12)) - (varclient_1396 + 10)))) {  // clan_field_editor:grid_container
        script5050(10, 1, 1);
    };
    return;
}