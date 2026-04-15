//
function script13770(): void {
    if ((HAS_NXT() == 0)) {
        return;
    };
    if ((CC_FIND(comp(517, 311), 1) == 1)) {
        script3880(1017, 0);
    } else {
        IF_SETONTIMER(callback(script13769), comp(517, 1));
        return;
    };
    if ((CC_FIND(comp(517, 311), 5) == 1)) {
        script3880(1017, 1);
    };
    if ((CC_FIND(comp(517, 311), 2) == 1)) {
        script3880(1017, 2);
    };
    if ((CC_FIND(comp(517, 311), 6) == 1)) {
        script3880(1017, 3);
    };
    if ((CC_FIND(comp(517, 311), 7) == 1)) {
        script3880(1017, 4);
    };
    if ((CC_FIND(comp(517, 311), 11) == 1)) {
        script3880(1017, 5);
    };
    if ((CC_FIND(comp(517, 311), 12) == 1)) {
        script3880(1017, 6);
    };
    if ((CC_FIND(comp(517, 311), 13) == 1)) {
        script3880(1017, 7);
    };
    return;
}