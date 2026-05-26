//
function script823(): void {
    if ((varbitplayer_41523 >= 2)) {
        IF_SETSIZE(74, 8, 0, 0, comp(202, 8));
        IF_SETGRAPHIC(917 as graphic, comp(202, 13));
    };
    if ((varbitplayer_41523 >= 5)) {
        IF_SETSIZE(87, 8, 0, 0, comp(202, 9));
        IF_SETGRAPHIC(917 as graphic, comp(202, 17));
    };
    if ((varbitplayer_41523 >= 15)) {
        IF_SETSIZE(126, 8, 0, 0, comp(202, 10));
        IF_SETGRAPHIC(917 as graphic, comp(202, 25));
    };
    if ((varbitplayer_41523 >= 30)) {
        IF_SETSIZE(147, 8, 0, 0, comp(202, 11));
        IF_SETGRAPHIC(917 as graphic, comp(202, 22));
        return;
    };
    script856();
    return;
}