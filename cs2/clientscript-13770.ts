//
function script13770(): void {
    if ((HAS_NXT() == 0)) {
        return;
    };
    if ((CC_FIND(33882423, 1) == 1)) {
        script3880(1017, 0);
    } else {
        IF_SETONTIMER(callback(script13769), 33882113);
        return;
    };
    if ((CC_FIND(33882423, 5) == 1)) {
        script3880(1017, 1);
    };
    if ((CC_FIND(33882423, 2) == 1)) {
        script3880(1017, 2);
    };
    if ((CC_FIND(33882423, 6) == 1)) {
        script3880(1017, 3);
    };
    if ((CC_FIND(33882423, 7) == 1)) {
        script3880(1017, 4);
    };
    if ((CC_FIND(33882423, 11) == 1)) {
        script3880(1017, 5);
    };
    if ((CC_FIND(33882423, 12) == 1)) {
        script3880(1017, 6);
    };
    if ((CC_FIND(33882423, 13) == 1)) {
        script3880(1017, 7);
    };
    return;
}