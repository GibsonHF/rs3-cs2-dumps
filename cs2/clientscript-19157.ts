//
function script19157(int0: number): void {
    var int1 = comp(1288, 46);  // trh_academy_shared_overlay:hitsplat_layer
    IF_SETPOSITION(200, 125, 0, 0, int1);
    IF_SETTEXT(TOSTRING_LOCALISED(int0, 1), comp(1288, 22));  // trh_academy_shared_overlay:hitsplat_text
    IF_SETTRANS(0, comp(1288, 19));  // trh_academy_shared_overlay:hitsplat_background
    IF_SETTRANS(0, comp(1288, 20));  // trh_academy_shared_overlay:hitsplat_left
    IF_SETTRANS(0, comp(1288, 21));  // trh_academy_shared_overlay:hitsplat_right
    IF_SETTRANS(0, comp(1288, 22));  // trh_academy_shared_overlay:hitsplat_text
    IF_SETHIDE(false, int1);
    IF_SETONTIMER(callback(script16735, 1, 0, -2147483645), int1);
    IF_SETONTIMER(callback(script16773), comp(1288, 22));  // trh_academy_shared_overlay:hitsplat_text
    return;
}