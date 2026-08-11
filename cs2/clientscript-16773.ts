//
function script16773(): void {
    var int0 = comp(1288, 19);  // trh_academy_shared_overlay:hitsplat_background
    var int1 = 2;
    IF_SETTRANS(MIN((IF_GETTRANS(int0) + int1), 255), int0);
    int0 = comp(1288, 20);  // trh_academy_shared_overlay:hitsplat_left
    IF_SETTRANS(MIN((IF_GETTRANS(int0) + int1), 255), int0);
    int0 = comp(1288, 21);  // trh_academy_shared_overlay:hitsplat_right
    IF_SETTRANS(MIN((IF_GETTRANS(int0) + int1), 255), int0);
    int0 = comp(1288, 22);  // trh_academy_shared_overlay:hitsplat_text
    IF_SETTRANS(MIN((IF_GETTRANS(int0) + int1), 255), int0);
    return;
}