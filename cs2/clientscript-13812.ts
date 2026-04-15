//
function script13812(int0: component): void {
    if ((varbitclient_38832 == 0)) {
        varbitclient_38833 = CLIENTOPTION_GET(23);
        varbitclient_38834 = CLIENTOPTION_GET(22);
        varbitclient_38835 = CLIENTOPTION_GET(24);
        varbitclient_38836 = CLIENTOPTION_GET(25);
        varbitclient_38832 = 1;
    };
    IF_SETONVARTRANSMIT(callback(script13813, 7623, 1), int0);
    script13814();
    return;
}