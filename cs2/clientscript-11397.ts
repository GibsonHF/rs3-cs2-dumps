//
function script11397(int0: number, int1: number): void {
    if ((int1 != 1)) {
        return;
    };
    if ((CC_FIND(comp(1621, 25), (varplayer_5406 - 1)) == 1)) {  // poh_costume_room:click_area
        CC_SETOUTLINE(0);
    };
    if ((CC_FIND(comp(1621, 25), int0) == 1)) {  // poh_costume_room:click_area
        CC_SETOUTLINE(2);
    };
    varplayer_5406 = (int0 + 1);
    script11398(int0);
    return;
}