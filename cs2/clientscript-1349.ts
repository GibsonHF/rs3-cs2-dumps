//
function script1349(): void {
    var string0 = "";
    var int0 = 0;
    if ((varbitclient_40356 == script1435(varbitclient_40355))) {
        string0 = IF_GETTEXT(comp(458, 3));  // safes_if:combination
        if ((strcmp(string0, "") == 0)) {
            string0 = inttostring(varbitclient_40356, 10);
        } else {
            string0 = `${string0}, ${inttostring(varbitclient_40356, 10)}`;
        };
        IF_SETTEXT(string0, comp(458, 3));  // safes_if:combination
        IF_SETTEXT(string0, comp(458, 1));  // safes_if:combination_1
        IF_SETTEXT(string0, comp(458, 2));  // safes_if:combination_2
        script1353();
        IF_SETONTIMER(callback(script1355, 0), comp(458, 27));  // safes_if:dial_digit
        varbitclient_40355 = (varbitclient_40355 + 1);
        IF_SETTEXT(`${inttostring(varbitclient_40355, 10)}/${inttostring(varbitplayer_40353, 10)}`, comp(458, 10));  // safes_if:solved
        if ((varbitclient_40355 == varbitplayer_40353)) {
            IF_SETONOP(callback(), comp(458, 0));  // safes_if:listener
            IF_SETOP(2, " ", comp(458, 0));  // safes_if:listener
            IF_TRIGGEROP(comp(458, 0), -1, 2);  // safes_if:listener
        };
    } else {
        varbitclient_40359 = (varbitclient_40359 + 1);
        int0 = ((varbitplayer_40353 * 2) - 1);
        if ((varbitclient_40359 > (int0 - 3))) {
            IF_SETTEXT(`<col=ff0000>${inttostring(varbitclient_40359, 10)}/${inttostring(int0, 10)}`, comp(458, 12));  // safes_if:failed
        } else {
            IF_SETTEXT(`${inttostring(varbitclient_40359, 10)}/${inttostring(int0, 10)}`, comp(458, 12));  // safes_if:failed
        };
        if (((varbitclient_40359 >= int0) && (int0 > 0))) {
            IF_SETONOP(callback(), comp(458, 0));  // safes_if:listener
            IF_SETOP(1, " ", comp(458, 0));  // safes_if:listener
            SOUND_VORBIS_VOLUME(21328 as vorbis, 1, 0, 255);
            IF_TRIGGEROP(comp(458, 0), -1, 1);  // safes_if:listener
        };
    };
    return;
}