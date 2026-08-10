//
function script21067(): void {
    CC_DELETEALL(comp(1409, 116));
    if ((PLAYERMEMBER() == false)) {
        stack(varbitplayer_58391);
        script20931();
        if (BRANCH_EQUALS(1)) {
            script2994(92340340, 0, 0, 0, 0, 0, 32, 32, 0, 0, 23835);
            script2995(92340340, 1, 40, 0, 0, 0, 40, 32, 1, 0, 2100, "<col=EB2F2F>You must be a member to access this region.</col>");
            IF_SETPOSITION(0, (36 + 4), 0, 0, comp(1409, 117));
        } else {
            IF_SETPOSITION(0, 0, 0, 0, comp(1409, 117));
        };
    } else {
        IF_SETPOSITION(0, 0, 0, 0, comp(1409, 117));
    };
    var string0 = dbrow_getfield(varclient_8475, 1568800, 0);
    IF_SETTEXT(string0, comp(1409, 117));
    return;
}