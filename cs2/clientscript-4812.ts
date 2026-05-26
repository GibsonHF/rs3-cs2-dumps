//
function script4812(int0: number, int1: number, int2: number, string0: string): void {
    if ((script4761(int2) == 0)) {
        return;
    };
    if ((varclient_2 != 1)) {
        var string0 = `${string0}<br>Requires tier ${inttostring(int1, 10)} resources.`;
        IF_SETGRAPHIC(int0, 82444828);
        IF_SETTEXT(string0, 82444829);
        IF_SETHIDE(0, 82444817);
        varclient_2 = 1;
    };
    return;
}