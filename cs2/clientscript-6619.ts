//
function script6619(): void {
    script6620(86704173);
    script6620(86704134);
    IF_SETONINVTRANSMIT(callback(script6621, 86704173, 215, 215, 1), comp(1323, 45));  // peng_pow_bfish:pieces_blue
    IF_SETONINVTRANSMIT(callback(script6621, 86704134, 674, 674, 1), comp(1323, 6));  // peng_pow_bfish:pieces_green
    IF_SETONTIMER(callback(script6624, -1, 0, 0, 0, -1), comp(1323, 1));  // peng_pow_bfish:game_boards
    IF_SETONINVTRANSMIT(callback(script6626, 86704145, 674, 1), comp(1323, 17));  // peng_pow_bfish:board_green_fish_layer
    IF_SETONINVTRANSMIT(callback(script6627, 86704144, 215, 1), comp(1323, 16));  // peng_pow_bfish:board_blue_fish_layer
    return;
}