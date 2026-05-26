//
function script15034(): void {
    if ((varplayer_135 == -1 as obj)) {
        return;
    };
    if (((varplayer_9456 == 0) && (STOCKMARKET_ISOFFEREMPTY(varplayer_138, 0) == 0))) {
        return;
    };
    script15030(1);
    varclient_2250 = "";
    varclient_2235 = comp(105, 275);
    varclient_2236 = 7;
    varclient_2237 = 20;
    varclient_1029 = script1553(103, varclient_1029, varclient_2250);
    if ((varbitplayer_32445 == 0)) {
        script9833(6881555, 6881556, 6881557, 6881558, 6881285, 0, 0);
    };
    IF_SETONDIALOGABORT(callback(), 6881556);
    return;
}