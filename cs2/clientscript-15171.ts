//
function script15171(int0: unknown_int): void {
    var int1 = comp(653, 107);
    var int2 = comp(653, 108);
    CC_DELETEALL(int1);
    IF_CLEAROPS(int1);
    CC_DELETEALL(int2);
    IF_CLEAROPS(int2);
    if ((int0 == 1)) {
        IF_SETHIDE(true, int2);
        script13969(int1, comp(-1, 65535), 28553 as struct, "Claim");
        IF_SETOP(1, "Claim", int1);
    } else {
        script13969(int1, comp(-1, 65535), 28553 as struct, "Give all");
        IF_SETOP(1, "Give all", int1);
        IF_SETHIDE(false, int2);
        script13969(int2, comp(-1, 65535), 28553 as struct, "Skip all");
        IF_SETOP(1, "Skip all", int2);
    };
    return;
}