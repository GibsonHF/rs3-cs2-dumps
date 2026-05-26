//
function script5832(): void {
    IF_SETHIDE(1, 68354075);
    script5835(MAX(0, varclient_4148));
    script5847();
    script5849(-1);
    script5852();
    IF_SETOBJECT_NONUM(31188, 1, 68354142);
    IF_SETOBJECT_NONUM(31187, 1, 68354155);
    IF_SETOBJECT_NONUM(31186, 1, 68354168);
    IF_SETOBJECT_NONUM(31346, 1, 68354226);
    var string0 = "You can only purchase this reward on a member's world.";
    if ((MAP_MEMBERS() == 0)) {
        IF_SETHIDE(1, 68354234);
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 68354237);
    };
    return;
}