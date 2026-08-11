//
function script15154(int0: number): void {
    if ((script13749() == 1)) {
        script8179();
    };
    IF_SETTEXT(dbrow_getfield(int0, 438448, 0), comp(653, 60));  // event_crafting:info_overlay_text
    if ((int0 == 3667)) {
        IF_SETTRANS(25, comp(653, 41));  // event_crafting:info_transparency
        IF_SETHIDE(false, comp(653, 43));  // event_crafting:charity_layer
    };
    script8841(92, 1);
    script15158(dbrow_getfield(int0, 438272, 0));
    if ((varbitplayer_47773 == 0)) {
        IF_SETHIDE(false, comp(653, 16));  // event_crafting:tutorial
    };
    return;
}