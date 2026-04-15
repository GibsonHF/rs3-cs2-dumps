//[clientscript,clanwars_setup_maininit]
function script1796(int0: component): void {
    varclient_246 = 0;
    varclient_247 = 0;
    varclient_248 = false;
    varbitclient_36998 = 0;
    varbitclient_36999 = 0;
    varbitclient_37000 = 0;
    varclient_6260 = false;
    varclient_249 = false;
    varclient_250 = false;
    varclient_251 = false;
    varclient_6259 = false;
    if ((MAP_MEMBERS() == 0)) {
        varclient_252 = 1;
        varclient_253 = false;
        script1775();
        script1778();
    } else {
        varclient_252 = 0;
        varclient_253 = false;
    };
    varclient_254 = false;
    varclient_255 = false;
    varclient_256 = false;
    varclient_257 = 0;
    varclient_258 = false;
    varclient_259 = false;
    IF_SETONVARTRANSMIT(callback(script1836, 1382, 1381, 1384, 3), int0);
    IF_SETONVARCTRANSMIT(callback(script1837, 259, 1), int0);
    IF_SETONVARCSTRTRANSMIT(callback(script1838, int0, 2408, 1), int0);
    return;
}