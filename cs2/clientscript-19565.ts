//
function script19565(int0: unknown_int): void {
    script19507();
    if ((int0 == 1)) {
        script19535();
    };
    if ((varbitplayer_45140 == 0)) {
        if ((varclient_6684 == false)) {
            if ((CC_FIND(comp(1313, 118), 14) == 1)) {
                CC_SETTEXT(`${varclient_8166} Storage`);
            };
            script19504();
            IF_SETHIDE(true, comp(1313, 115));
        };
        IF_SETHIDE(true, comp(1313, 72));
        if ((int0 == 1)) {
            script19526();
            script19518(1);
        };
        return;
    };
    if ((CC_FIND(comp(1313, 118), 14) == 1)) {
        CC_SETTEXT(`${varclient_8166} Storage (${enum_getvalue(0, 36, 15582 as cs2enum, varbitplayer_45140)})`);
    } else {
        IF_SETONTIMER(callback(script19566), comp(1313, 4));
    };
    if ((int0 == 1)) {
        script19526();
        script19518(1);
    };
    IF_SETHIDE(false, comp(1313, 115));
    IF_SETPOSITION(0, 0, 0, 0, comp(1313, 115));
    script13993(comp(1313, 115), comp(-1, 65535), 28228 as struct, "Clear Filter");
    IF_SETONOP(callback(script19560), comp(1313, 117));
    return;
}