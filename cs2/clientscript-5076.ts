//
function script5076(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        if ((CC_GETHIDE() == true)) {
            int2 = ((IF_GETSCROLLWIDTH(comp(1111, 12)) - IF_GETWIDTH(comp(1111, 12))) / 2);  // clan_field_editor:grid_container
            int3 = int2;
        } else {
            int2 = ((CC_GETX() + (CC_GETWIDTH() / 2)) - (IF_GETWIDTH(comp(1111, 12)) / 2));  // clan_field_editor:grid_container
            int3 = ((CC_GETY() + (CC_GETHEIGHT() / 2)) - (IF_GETHEIGHT(comp(1111, 12)) / 2));  // clan_field_editor:grid_container
        };
    } else {
        int2 = ((IF_GETSCROLLWIDTH(comp(1111, 12)) - IF_GETWIDTH(comp(1111, 12))) / 2);  // clan_field_editor:grid_container
        int3 = int2;
    };
    IF_SETSCROLLPOS(int2, int3, comp(1111, 12));  // clan_field_editor:grid_container
    script5053(0, 0);
    return;
}