//
function script5560(long0: bigint): void {
    if (LONG_BRANCH_EQUALS(long0, -1n)) {
        varclient_6480 = script5567();
    } else {
        varclient_6480 = long0;
    };
    var string0 = "null";
    var int0 = -1;
    [string0, int0] = script17399(varclient_6480);
    var string1 = `You currently have<br>${TOSTRING_LOCALISED_LONG(varclient_6480, 1)} coins.`;
    if (LONG_BRANCH_EQUALS(long0, 1n)) {
        string1 = `You currently have<br>${TOSTRING_LOCALISED_LONG(varclient_6480, 1)} coin.`;
    };
    script16559(96534537, 2);
    script16559(96600076, 2);
    IF_SETCOLOUR(int0, comp(1920, 12));
    IF_SETCOLOUR(int0, comp(1666, 2));
    IF_SETTEXT(string0, comp(1920, 12));
    IF_SETTEXT(string0, comp(1666, 2));
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), comp(1920, 12));
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643), comp(1666, 2));
    return;
}