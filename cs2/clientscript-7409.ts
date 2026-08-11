//
function script7409(): void {
    if ((CC_FIND(comp(1384, 19), varbitplayer_17644) == 1)) {  // pet_bank:pets_bank_area
        IF_SETPOSITION((IF_GETX(comp(1384, 19) /*pet_bank:pets_bank_area*/) + CC_GETX()), ((CC_GETY() + IF_GETY(comp(1384, 19) /*pet_bank:pets_bank_area*/)) - 2), 0, 0, comp(1384, 24) /*pet_bank:select_reticule*/);
        IF_SETHIDE(false, comp(1384, 24));  // pet_bank:select_reticule
    };
    return;
}