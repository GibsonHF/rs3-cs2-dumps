//
function script12217(): void {
    if ((varbitplayer_30383 >= 100)) {
        IF_SETGRAPHIC(26668 as graphic, comp(1717, 61));  // trh82_valentines:current_prize_unlocked_1
        IF_SETHIDE(true, comp(1717, 63));  // trh82_valentines:prize_1_fill
    };
    if ((varbitplayer_30383 >= 300)) {
        IF_SETGRAPHIC(26672 as graphic, comp(1717, 66));  // trh82_valentines:current_prize_unlocked_2
        IF_SETHIDE(true, comp(1717, 68));  // trh82_valentines:prize_2_fill
    };
    if ((varbitplayer_30383 >= 600)) {
        IF_SETGRAPHIC(26670 as graphic, comp(1717, 71));  // trh82_valentines:current_prize_unlocked_3
        IF_SETHIDE(true, comp(1717, 73));  // trh82_valentines:prize_3_fill
    };
    if ((varbitplayer_30383 >= 1000)) {
        IF_SETGRAPHIC(26666 as graphic, comp(1717, 76));  // trh82_valentines:current_prize_unlocked_4
        IF_SETHIDE(true, comp(1717, 78));  // trh82_valentines:prize_4_fill
    };
    if ((varbitplayer_30383 >= 2000)) {
        IF_SETGRAPHIC(26674 as graphic, comp(1717, 81));  // trh82_valentines:current_prize_unlocked_5
        IF_SETHIDE(true, comp(1717, 83));  // trh82_valentines:prize_5_fill
    };
    if ((varbitplayer_30383 >= 2500)) {
        IF_SETGRAPHIC(26676 as graphic, comp(1717, 87));  // trh82_valentines:current_prize_unlocked_6
        IF_SETHIDE(true, comp(1717, 89));  // trh82_valentines:prize_6_fill
    };
    return;
}