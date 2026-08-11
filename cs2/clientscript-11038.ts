//
function script11038(): void {
    script8841(60, 1);
    IF_SETMODELANIM(8016 as seq, comp(1081, 20));  // lunarfm_cure_side:plant1
    IF_SETMODELANIM(8016 as seq, comp(1081, 19));  // lunarfm_cure_side:plant2
    IF_SETMODELANIM(4407 as seq, comp(1081, 18));  // lunarfm_cure_side:plant3
    IF_SETMODELANIM(8016 as seq, comp(1081, 17));  // lunarfm_cure_side:plant4
    IF_SETONVARTRANSMIT(callback(script4475, 70844430, 3168, 3168, 2), comp(1081, 13));  // lunarfm_cure_side:base
    return;
}