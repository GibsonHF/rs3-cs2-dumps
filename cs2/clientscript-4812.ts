//
function script4812(int0: number, int1: number, int2: number, string0: string): void {
    if ((script4761(int2) == 0)) {
        return;
    };
    if ((varclient_2 != 1)) {
        var string0 = `${string0}<br>Requires tier ${inttostring(int1, 10)} resources.`;
        IF_SETGRAPHIC(int0, comp(1258, 540));
        IF_SETTEXT(string0, comp(1258, 541));
        IF_SETHIDE(false, comp(1258, 529));
        varclient_2 = 1;
    };
    return;
}