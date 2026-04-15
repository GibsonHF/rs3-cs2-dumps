//
function script10528(): void {
    script13991(comp(517, 163), comp(-1, 65535), 28557 as struct, true);
    if ((varbitplayer_45192 == 1)) {
        IF_SETONTIMER(callback(script13348, (IF_GETSCROLLHEIGHT(comp(517, 168)) - IF_GETHEIGHT(comp(517, 168)))), comp(517, 158));
    } else {
        IF_SETONTIMER(callback(script13348, (IF_GETSCROLLWIDTH(comp(517, 168)) - IF_GETWIDTH(comp(517, 168)))), comp(517, 158));
    };
    return;
}