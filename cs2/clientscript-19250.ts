//
function script19250(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    IF_BUTTON_SETTOGGLED(0, comp(1289, 19));
    IF_BUTTON_SETTOGGLED(0, comp(1289, 21));
    IF_BUTTON_SETTOGGLED(0, comp(1289, 23));
    IF_BUTTON_SETTOGGLED(1, comp(1289, 25));
    IF_SETTEXT("Rewards", comp(1289, 9));
    IF_SETHIDE(false, comp(1289, 11));
    IF_SETHIDE(true, comp(1289, 13));
    IF_SETHIDE(true, comp(1289, 15));
    IF_SETHIDE(true, comp(1289, 14));
    IF_SETHIDE(true, comp(1289, 12));
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int1))}>Reaper Masks`, comp(1289, 10));
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int0))}>These rewards can rarely be obtained from the Maize Maze.`, comp(1289, 17));
    var int2 = 34377 as graphic;
    switch (script19236(1)) {
        case 1: {
            int2 = 34377 as graphic;
            break;
        }
        case 2: {
            int2 = 34378 as graphic;
            break;
        }
        case 3: {
            int2 = 34379 as graphic;
            break;
        }
    };
    IF_SETGRAPHIC(int2, comp(1289, 11));
    return;
}