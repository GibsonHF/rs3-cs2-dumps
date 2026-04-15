//[clientscript,valentine_setup]
function script4144(int0: component, int1: component, int2: component): void {
    var string0 = `${varclient_2551}${varclient_7154}`;
    var int3 = script15891(string0, IF_GETWIDTH(int1), 207 as fontmetrics, 0);
    IF_SETSIZE(0, int3, 1, 0, int1);
    IF_SETSCROLLSIZE(0, int3, int0);
    IF_SETSCROLLPOS(0, 0, int0);
    IF_SETTEXT(string0, int1);
    if ((int3 <= IF_GETHEIGHT(int0))) {
        CC_DELETEALL(int2);
        IF_SETHIDE(true, int2);
        return;
    };
    IF_SETHIDE(false, int2);
    script31(int2, int0, 798 as graphic, 795 as graphic, 796 as graphic, 797 as graphic, 793 as graphic, 794 as graphic);
    return;
}