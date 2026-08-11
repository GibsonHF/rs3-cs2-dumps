//
function script10528(): void {
    script13991(33882275, -1, 28557, 1);
    if ((varbitplayer_45192 == 1)) {
        IF_SETONTIMER(callback(script13348, (IF_GETSCROLLHEIGHT(comp(517, 168) /*bank:tabs_dynamic*/) - IF_GETHEIGHT(comp(517, 168) /*bank:tabs_dynamic*/))), comp(517, 158) /*bank:tabs*/);
    } else {
        IF_SETONTIMER(callback(script13348, (IF_GETSCROLLWIDTH(comp(517, 168) /*bank:tabs_dynamic*/) - IF_GETWIDTH(comp(517, 168) /*bank:tabs_dynamic*/))), comp(517, 158) /*bank:tabs*/);
    };
    return;
}