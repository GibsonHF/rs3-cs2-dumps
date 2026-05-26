//
function script9301(int0: number, int1: number): void {
    var int2 = -1;
    if ((CC_FIND(33882313, int1) == 1)) {
        int2 = CC_GETINVOBJECT();
    } else {
        int2 = INV_GETOBJ(95, int1);
    };
    if ((((int2 != -1) && (OC_HASVAROBJ(int2) == 1)) && (varbitplayer_1721 == 0))) {
        script17211(int2);
        return;
    };
    script14421(int2, int1);
    if ((varclient_6684 == true)) {
        varclient_4645 = `Item is in tab ${inttostring(script14374(script5798(int1)), 10)}`;
    } else {
        switch (varbitplayer_45140) {
            case 1: {
                varclient_4645 = `Item is in tab ${inttostring(script14374(script5798(int1)), 10)}<br><br>${script4747(int2)}`;
                break;
            }
            case 0: {
                varclient_4645 = "";
                break;
            }
            default: {
                varclient_4645 = `Item is in tab ${inttostring(script14374(script5798(int1)), 10)}`;
                break;
            }
        };
    };
    return;
}