//
function script7668(int0: component): void {
    var int1 = 0;
    if ((varclient_198 != 1)) {
        IF_SETONTIMER(callback(), int0);
        if ((int0 == 92078094)) {
            script1733(92078109);
            IF_SETTEXT(inttostring((500 - STRING_LENGTH(REMOVETAGS(varclient_2758))), 10), int0);
        } else if ((int0 == comp(1405, 29))) {
            script1733(92078094);
            IF_SETTEXT(inttostring((500 - STRING_LENGTH(REMOVETAGS(varclient_2759))), 10), int0);
        };
        return;
    };
    if ((MODULO(CLIENTCLOCK(), 40) < 20)) {
        IF_SETTEXT("", int0);
    } else if ((int0 == comp(1405, 14))) {
        IF_SETTEXT(inttostring((500 - STRING_LENGTH(REMOVETAGS(varclient_2758))), 10), int0);
    } else if ((int0 == comp(1405, 29))) {
        IF_SETTEXT(inttostring((500 - STRING_LENGTH(REMOVETAGS(varclient_2759))), 10), int0);
    };
    return;
}