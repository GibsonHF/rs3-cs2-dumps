//
function script12436(): void {
    var int0 = 8;
    if ((MAP_MEMBERS() == 0)) {
        int0 = 5;
    };
    if ((varplayer_101 < int0)) {
        script12439();
        varplayer_101 = (varplayer_101 + 1);
        IF_SETHIDE(false, enum_getvalue(0, 9, 11170 as cs2enum, varplayer_101));
        script12438();
    } else if ((MAP_MEMBERS() == 0)) {
        script12724("<col=E12323>You must be on a members' world to see the last 3 pages.", 2, 1);
    };
    return;
}