//
function script13736(int0: number, int1: number): void {
    IF_SETHIDE(1, 125370400);
    IF_SETHIDE(0, 125370402);
    IF_SETHIDE(1, 125370404);
    IF_SETONOP(callback(script13737, 1), 125370406);
    var int2 = struct_getparam(int1, 5549);
    if ((GENDER() == 0)) {
        int2 = struct_getparam(int1, 5548);
    };
    IF_SETNPCMODEL(int2, 125370407);
    IF_SETTEXT(struct_getparam(int1, 5547), 125370385);
    var string0 = `Cost: ${TOSTRING_LOCALISED(struct_getparam(int1, 5546), 1)} ghostweave.`;
    IF_SETTEXT(string0, 125370386);
    if ((int0 == 1)) {
        IF_SETTEXT("Recover", 125370459);
        IF_SETHIDE(1, 125370457);
        string0 = "You already own this costume. Click to recover lost pieces.";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 125370387);
    } else {
        IF_SETTEXT("Make", 125370459);
        if ((INV_TOTAL(93, 41239) < struct_getparam(int1, 5546))) {
            IF_SETHIDE(0, 125370457);
            string0 = "You don't have enough ghostweave to make this costume.";
            IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 125370457);
        } else {
            IF_SETHIDE(1, 125370457);
            string0 = `Make this costume from ${TOSTRING_LOCALISED(struct_getparam(int1, 5546), 1)} ghostweave. You will need 5 free inventory spaces.`;
            IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -1), 125370387);
        };
    };
    return;
}