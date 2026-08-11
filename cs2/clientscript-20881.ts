//
function script20881(): void {
    var string0 = "...";
    var string1 = "...";
    if ((varbitplayer_16219 > 0)) {
        string0 = `+${inttostring(varbitplayer_16219, 10)}%`;
    };
    if ((varbitplayer_16220 > 0)) {
        string1 = `-${inttostring(varbitplayer_16220, 10)}%`;
    };
    var int0 = (100 - 95);
    IF_SETTEXT(string1, comp(105, 189));  // stockmarket:abort7 ?
    IF_SETTEXT(`-${inttostring(int0, 10)}%`, comp(105, 190));  // stockmarket:lending_container ?
    IF_SETTEXT(`+${inttostring(int0, 10)}%`, comp(105, 192));  // stockmarket:lending_item_bg ?
    IF_SETTEXT(string0, comp(105, 193));  // stockmarket:lending_item ?
    return;
}