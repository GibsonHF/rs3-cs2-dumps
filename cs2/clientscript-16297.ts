//
function script16297(): void {
    var int0 = script9942(varbitplayer_61311);
    stack(1540096);
    stack(varbitplayer_61311);
    DB_FIND(0);
    var int1 = dbrow_findnext();
    if ((int0 == -1)) {
        if ((script6431() == 1)) {
            IF_SETTEXT("Tap option", comp(1499, 9));
        } else {
            IF_SETTEXT("Left-click option", comp(1499, 9));
        };
        IF_SETTEXT("Open destination selection", comp(1499, 12));
        IF_SETTEXTALIGN(1, 1, 0, comp(1499, 12));
        IF_SETGRAPHIC(-1 as graphic, comp(1499, 11));
        IF_SETSIZE(0, 0, 1, 1, comp(1499, 12));
    } else {
        if ((int1 != -1)) {
            IF_SETTEXT(dbrow_getfield(int1, 1540112, 0), 98238476);
        } else {
            IF_SETTEXT(struct_getparam(int0, 2794), 98238476);
        };
        IF_SETTEXTALIGN(0, 1, 0, comp(1499, 12));
        IF_SETGRAPHIC(struct_getparam(int0, 2802), comp(1499, 11));
        IF_SETSIZE(34, 0, 1, 1, comp(1499, 12));
    };
    return;
}