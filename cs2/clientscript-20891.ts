//
function script20891(): void {
    unk10992(script9465(1), -1701144064, 255, 6881505);
    if ((STRING_LENGTH(varclient_6788) > 0)) {
        IF_SETTEXT(ESCAPE(varclient_6788), comp(105, 225));  // stockmarket:offertype_icon ?
        script11700(varplayer_135);
    } else {
        varclient_6788 = "";
        script15047();
    };
    return;
}