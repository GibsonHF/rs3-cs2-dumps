//
function script9483(int0: number): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    if ((int0 == 49020959)) {
        int1 = comp(748, 32);  // 6awe2_vote:choice_1_button_graphic_1
        int2 = comp(748, 33);  // 6awe2_vote:choice_1_button_graphic_2
        int3 = comp(748, 34);  // 6awe2_vote:choice_1_button_graphic_3
    } else {
        int1 = comp(748, 42);  // 6awe2_vote:choice_2_button_graphic_1
        int2 = comp(748, 43);  // 6awe2_vote:choice_2_button_graphic_2
        int3 = comp(748, 44);  // 6awe2_vote:choice_2_button_graphic_3
    };
    IF_SETGRAPHIC(17816 as graphic, int1);
    IF_SETGRAPHIC(17817 as graphic, int2);
    IF_SETGRAPHIC(17818 as graphic, int3);
    return;
}