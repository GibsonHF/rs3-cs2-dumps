//
function script15033(): void {
    if (((varplayer_9456 == 0) && (STOCKMARKET_ISOFFEREMPTY(varplayer_138, 0) == 0))) {
        return;
    };
    script15030(2);
    varclient_2250 = "";
    varclient_2235 = comp(105, 234);
    varclient_2236 = 7;
    varclient_2237 = 20;
    varclient_1029 = script1553(103, varclient_1029, varclient_2250);
    if ((varbitplayer_32445 == 0)) {
        script9833(6881514, 6881515, 6881516, 6881517, 6881284, 0, 0);
    };
    IF_SETONDIALOGABORT(callback(), 6881515);
    return;
}