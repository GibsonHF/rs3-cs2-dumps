//
function script4701(int0: number, int1: number, int2: number, string0: string): void {
    varclient_1553 = int1;
    varclient_1554 = int2;
    varclient_2482 = string0;
    if ((int0 == 1)) {
        if (((varclient_1100 == 43) || (varclient_1100 == 42))) {
            script3093(varclient_1100, 4038, "Leave Queue", `Are you sure you wish to leave the queue for World ${IF_GETTEXT(59375703)}? You will lose your position if you do.`, 2611, "Leave Queue", "Stay In Queue");
            return;
        };
        script3141(int2, string0);
        if (((int1 > -1) && (CC_FIND(59637824, int1) == 1))) {
            IF_SETHIDE(0, 59637825);
            IF_SETPOSITION(0, CC_GETY(), 0, 0, 59637825);
        };
        if ((MAP_WORLD() == script20335(1))) {
            if ((CC_FIND(59637777, 1) == 1)) {
                CC_SETHIDE(0);
            };
        } else if ((CC_FIND(59637777, 1) == 1)) {
            CC_SETHIDE(1);
        };
        if ((MAP_WORLD() == script20335(2))) {
            if ((CC_FIND(59637778, 1) == 1)) {
                CC_SETHIDE(0);
            };
        } else if ((CC_FIND(59637778, 1) == 1)) {
            CC_SETHIDE(1);
        };
        if ((MAP_WORLD() == script20335(3))) {
            if ((CC_FIND(59637779, 1) == 1)) {
                CC_SETHIDE(0);
            };
        } else if ((CC_FIND(59637779, 1) == 1)) {
            CC_SETHIDE(1);
        };
        script3064(1);
    };
    return;
}