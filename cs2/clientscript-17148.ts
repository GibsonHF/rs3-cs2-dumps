//
function script17148(): void {
    var int0 = -1;
    var string0 = "";
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = 0;
    int5 = (int5 + 1);
    while ((int5 <= 2)) {
        switch (int5) {
            case 1: {
                int0 = script438(varbitplayer_52447);
                int1 = 73400415;
                int2 = 73400414;
                int3 = 73400418;
                int4 = 73400411;
                break;
            }
            case 2: {
                int0 = script438(varbitplayer_52448);
                int1 = 73400419;
                int2 = 73400423;
                int3 = 73400426;
                int4 = 73400420;
                break;
            }
        };
        string0 = dbrow_getfield(int0, 503824, 0);
        IF_SETTEXT(string0, int2);
        IF_SETTEXT(`<col=FFFF00>${string0}</col><br>${dbrow_getfield(int0, 503856, 0)}`, int3);
        script446(int1, int0, 0);
        script2690(int1, int0);
        IF_SETOPBASE(string0, int4);
    };
    if ((script443() < 8)) {
        IF_SETENABLED(false, comp(1120, 73));
        IF_CLEAROPS(comp(1120, 73));
        IF_SETHIDE(true, comp(1120, 3));
        IF_SETHIDE(true, comp(1120, 4));
        IF_SETHIDE(true, comp(1120, 5));
        script3536("The Loot Room cannot be visited until it is full.", 73400393, -1);
    } else {
        IF_SETENABLED(true, comp(1120, 73));
        IF_SETOP(1, "Select", comp(1120, 73));
        IF_SETHIDE(false, comp(1120, 3));
        IF_SETHIDE(false, comp(1120, 4));
        IF_SETHIDE(false, comp(1120, 5));
        script16247(73400393, -1);
    };
    script17715();
    return;
}