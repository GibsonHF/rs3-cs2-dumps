//
function script14071(int0: unknown_int): void {
    script9313();
    if ((int0 == 1)) {
        script13572();
    };
    if ((varbitplayer_45140 == 0)) {
        if ((varclient_6684 == false)) {
            if ((CC_FIND(comp(517, 311), 14) == 1)) {
                CC_SETTEXT("Bank of Gielinor");
            };
            script9303();
            IF_SETHIDE(true, comp(517, 257));
        };
        IF_SETHIDE(true, comp(517, 197));
        if ((int0 == 1)) {
            script10239();
            script9511(1);
            script9324(1);
        };
        return;
    };
    if ((CC_FIND(comp(517, 311), 14) == 1)) {
        CC_SETTEXT(`Bank of Gielinor (${enum_getvalue(0, 36, 15582 as cs2enum, varbitplayer_45140)})`);
    } else {
        IF_SETONTIMER(callback(script14072), comp(517, 2));
    };
    if ((int0 == 1)) {
        script10239();
        script9511(1);
        script9324(1);
    };
    IF_SETHIDE(false, comp(517, 257));
    IF_SETPOSITION(0, 0, 0, 0, comp(517, 257));
    script13993(comp(517, 257), comp(-1, 65535), 28228 as struct, "Clear Filter");
    IF_SETONOP(callback(script13963), comp(517, 259));
    return;
}