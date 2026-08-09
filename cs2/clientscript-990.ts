//
function script990(int0: number, int1: number, int2: number): void {
    var int3 = struct_getparam(int0, 7425);
    var int4 = enum_getvalue(0, 73, int3, int1);
    var string0 = struct_getparam(int4, 7434);
    var string1 = "";
    var string2 = "";
    if ((int2 > 0)) {
        [string1, string2] = ["Congratulations!", `Category: ${string0}<br>You've won a main prize!`];
        IF_SETONTIMER(callback(script991, (CLIENTCLOCK() + 108)), comp(204, 78));
    } else {
        [string1, string2] = ["Commiserations!", `Category: ${string0}<br>Better luck next time!`];
    };
    IF_SETTEXT(`${string2}<br><br>Your prizes are shown below, and must be claimed before entering another Lucky Dip.`, comp(204, 90));
    script13969(13369431, -1, 41028, string1);
    script13969(13369436, 13369437, 28553, "Claim");
    IF_SETONVARTRANSMIT(callback(script992, int0, int4, int1, 10167, 10168, 10169, 3), comp(204, 78));
    return;
}