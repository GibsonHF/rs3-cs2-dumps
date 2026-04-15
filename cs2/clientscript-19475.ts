//
function script19475(int0: component): void {
    var string0 = script19324(varclient_8158, varclient_8159);
    if ((varplayer_11931 == 1)) {
        if ((STRING_LENGTH(varclient_8166) > 0)) {
            IF_SETTEXT(`<col=FFFFFF>${varclient_8160}</col> is inviting you to become a founding member of their <col=FFFFFF>${string0}</col> Ironman group: <col=FFFFFF>${varclient_8166}</col>`, int0);
        } else {
            IF_SETTEXT(`<col=FFFFFF>${varclient_8160}</col> is inviting you to become a founding member of their <col=FFFFFF>${string0}</col> Ironman group.`, int0);
        };
    } else {
        IF_SETTEXT(`<col=FFFFFF>${varclient_8160}</col> is inviting you to become a member of their <col=FFFFFF>${string0}</col> Ironman group: <col=FFFFFF>${varclient_8166}</col>`, int0);
    };
    return;
}