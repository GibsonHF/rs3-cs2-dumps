//
function script17148(): void {
    var int0 = -1 as dbrow;
    var string0 = "";
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = 0;
    while ((++int5 <= 2)) {
        switch (int5) {
            case 1: {
                int0 = script438(varbitplayer_52447);
                int1 = comp(1120, 95);
                int2 = comp(1120, 94);
                int3 = comp(1120, 98);
                int4 = comp(1120, 91);
                break;
            }
            case 2: {
                int0 = script438(varbitplayer_52448);
                int1 = comp(1120, 99);
                int2 = comp(1120, 103);
                int3 = comp(1120, 106);
                int4 = comp(1120, 100);
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
        script3536("The Loot Room cannot be visited until it is full.", comp(1120, 73), -1);
    } else {
        IF_SETENABLED(true, comp(1120, 73));
        IF_SETOP(1, "Select", comp(1120, 73));
        IF_SETHIDE(false, comp(1120, 3));
        IF_SETHIDE(false, comp(1120, 4));
        IF_SETHIDE(false, comp(1120, 5));
        script16247(comp(1120, 73), -1);
    };
    script17715();
    return;
}