//
function script19250(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    IF_BUTTON_SETTOGGLED(0, 84475923);
    IF_BUTTON_SETTOGGLED(0, 84475925);
    IF_BUTTON_SETTOGGLED(0, 84475927);
    IF_BUTTON_SETTOGGLED(1, 84475929);
    IF_SETTEXT("Rewards", 84475913);
    IF_SETHIDE(0, 84475915);
    IF_SETHIDE(1, 84475917);
    IF_SETHIDE(1, 84475919);
    IF_SETHIDE(1, 84475918);
    IF_SETHIDE(1, 84475916);
    stack(PUSH_CONSTANT_INT[16]("<col=", int1));
    IF_SETTEXT(`${stack()}${inttostring()}>Reaper Masks`, 84475914);
    stack(PUSH_CONSTANT_INT[16]("<col=", int0));
    IF_SETTEXT(`${stack()}${inttostring()}>These rewards can rarely be obtained from the Maize Maze.`, 84475921);
    var int2 = 34377;
    switch (script19236(1)) {
        case 1: {
            int2 = 34377;
            break;
        }
        case 2: {
            int2 = 34378;
            break;
        }
        case 3: {
            int2 = 34379;
            break;
        }
    };
    stack(int2);
    stack(84475915);
    IF_SETGRAPHIC();
    return;
}