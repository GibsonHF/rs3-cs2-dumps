//
function script11102(int0: number): void {
    IF_SETMODEL(48043 as model, comp(866, 4));  // mah3_base_decoder_panel2:decoder_strip_1
    IF_SETMODEL(48036 as model, comp(866, 6));  // mah3_base_decoder_panel2:decoder_strip_2
    IF_SETMODEL(48044 as model, comp(866, 7));  // mah3_base_decoder_panel2:decoder_strip_3
    IF_SETMODEL(48046 as model, comp(866, 8));  // mah3_base_decoder_panel2:decoder_strip_4
    switch (int0) {
        case 1: {
            IF_SETMODEL(48017 as model, comp(866, 4));  // mah3_base_decoder_panel2:decoder_strip_1
            break;
        }
        case 2: {
            IF_SETMODEL(48033 as model, comp(866, 6));  // mah3_base_decoder_panel2:decoder_strip_2
            break;
        }
        case 3: {
            IF_SETMODEL(48053 as model, comp(866, 7));  // mah3_base_decoder_panel2:decoder_strip_3
            break;
        }
        case 4: {
            IF_SETMODEL(48019 as model, comp(866, 8));  // mah3_base_decoder_panel2:decoder_strip_4
            break;
        }
        default: {
            return;
        }
    };
    return;
}