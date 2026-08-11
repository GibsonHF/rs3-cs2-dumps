//
function script5050(int0: number, int1: number, int2: number): void {
    var int0 = (int0 * int1);
    if ((int2 == 1)) {
        IF_SETSCROLLPOS(IF_GETSCROLLX(comp(1111, 12)), MAX((IF_GETSCROLLY(comp(1111, 12)) + int0), 0), comp(1111, 12));  // clan_field_editor:grid_container
    } else {
        IF_SETSCROLLPOS(MAX((IF_GETSCROLLX(comp(1111, 12)) + int0), 0), IF_GETSCROLLY(comp(1111, 12)), comp(1111, 12));  // clan_field_editor:grid_container
    };
    script5053(0, 0);
    return;
}