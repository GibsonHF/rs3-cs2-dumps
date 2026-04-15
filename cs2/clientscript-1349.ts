//
function script1349(): void {
    var string0 = "";
    var int0 = 0;
    if ((varbitclient_40356 == script1435(varbitclient_40355))) {
        string0 = IF_GETTEXT(comp(458, 3));
        if ((strcmp(string0, "") == 0)) {
            string0 = inttostring(varbitclient_40356, 10);
        } else {
            string0 = `${string0}, ${inttostring(varbitclient_40356, 10)}`;
        };
        IF_SETTEXT(string0, comp(458, 3));
        IF_SETTEXT(string0, comp(458, 1));
        IF_SETTEXT(string0, comp(458, 2));
        script1353();
        IF_SETONTIMER(callback(script1355, 0), comp(458, 27));
        varbitclient_40355 = (varbitclient_40355 + 1);
        IF_SETTEXT(`${inttostring(varbitclient_40355, 10)}/${inttostring(varbitplayer_40353, 10)}`, 30015498);
        if ((varbitclient_40355 == varbitplayer_40353)) {
            IF_SETONOP(callback(), comp(458, 0));
            IF_SETOP(2, " ", 30015488);
            IF_TRIGGEROP(30015488, -1, 2);
        };
    } else {
        varbitclient_40359 = (varbitclient_40359 + 1);
        int0 = ((varbitplayer_40353 * 2) - 1);
        if ((varbitclient_40359 > (int0 - 3))) {
            IF_SETTEXT(`<col=ff0000>${inttostring(varbitclient_40359, 10)}/${inttostring(int0, 10)}`, comp(458, 12));
        } else {
            IF_SETTEXT(`${inttostring(varbitclient_40359, 10)}/${inttostring(int0, 10)}`, comp(458, 12));
        };
        if (((varbitclient_40359 >= int0) && (int0 > 0))) {
            IF_SETONOP(callback(), comp(458, 0));
            IF_SETOP(1, " ", 30015488);
            SOUND_VORBIS_VOLUME(21328, 1, 0, 255);
            IF_TRIGGEROP(30015488, -1, 1);
        };
    };
    return;
}