//
function script19565(int0: number): void {
    script19507();
    if ((int0 == 1)) {
        script19535();
    };
    if ((varbitplayer_45140 == 0)) {
        if ((varclient_6684 == false)) {
            if ((CC_FIND(86048886, 14) == 1)) {
                CC_SETTEXT(`${varclient_8166} Storage`);
            };
            script19504();
            IF_SETHIDE(1, 86048883);
        };
        IF_SETHIDE(1, 86048840);
        if ((int0 == 1)) {
            script19526();
            script19518(1);
        };
        return;
    };
    if ((CC_FIND(86048886, 14) == 1)) {
        CC_SETTEXT(`${varclient_8166} Storage (${enum_getvalue(0, 36, 15582 as cs2enum, varbitplayer_45140)})`);
    } else {
        IF_SETONTIMER(callback(script19566), 86048772);
    };
    if ((int0 == 1)) {
        script19526();
        script19518(1);
    };
    IF_SETHIDE(0, 86048883);
    IF_SETPOSITION(0, 0, 0, 0, 86048883);
    script13993(86048883, -1, 28228, "Clear Filter");
    IF_SETONOP(callback(script19560), 86048885);
    return;
}