//
function script14071(int0: number): void {
    script9313();
    if ((int0 == 1)) {
        script13572();
    };
    if ((varbitplayer_45140 == 0)) {
        if ((varclient_6684 == false)) {
            if ((CC_FIND(33882423, 14) == 1)) {
                CC_SETTEXT("Bank of Gielinor");
            };
            script9303();
            IF_SETHIDE(1, 33882369);
        };
        IF_SETHIDE(1, 33882309);
        if ((int0 == 1)) {
            script10239();
            script9511(1);
            script9324(1);
        };
        return;
    };
    if ((CC_FIND(33882423, 14) == 1)) {
        CC_SETTEXT(`Bank of Gielinor (${enum_getvalue(0, 36, 15582 as cs2enum, varbitplayer_45140)})`);
    } else {
        IF_SETONTIMER(callback(script14072), 33882114);
    };
    if ((int0 == 1)) {
        script10239();
        script9511(1);
        script9324(1);
    };
    IF_SETHIDE(0, 33882369);
    IF_SETPOSITION(0, 0, 0, 0, 33882369);
    script13993(33882369, -1, 28228, "Clear Filter");
    IF_SETONOP(callback(script13963), 33882371);
    return;
}