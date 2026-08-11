//
function script5592(): void {
    IF_SETSIZE(1, 20, 0, 0, comp(1188, 8));  // choice_v2:option_1
    IF_SETSIZE(1, 20, 0, 0, comp(1188, 13));  // choice_v2:option_2
    IF_SETSIZE(1, 20, 0, 0, comp(1188, 18));  // choice_v2:option_3
    IF_SETSIZE(1, 20, 0, 0, comp(1188, 23));  // choice_v2:option_4
    IF_SETSIZE(1, 20, 0, 0, comp(1188, 28));  // choice_v2:option_5
    IF_SETONTIMER(callback(script5594, 77856776, 77856774), comp(1188, 8));  // choice_v2:option_1
    IF_SETONTIMER(callback(script5594, 77856781, 77856801), comp(1188, 13));  // choice_v2:option_2
    IF_SETONTIMER(callback(script5594, 77856786, 77856803), comp(1188, 18));  // choice_v2:option_3
    IF_SETONTIMER(callback(script5594, 77856791, 77856805), comp(1188, 23));  // choice_v2:option_4
    IF_SETONTIMER(callback(script5594, 77856796, 77856807), comp(1188, 28));  // choice_v2:option_5
    script8841(12, 1);
    return;
}