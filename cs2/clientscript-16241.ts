//
function script16241(): void {
    if ((varbitplayer_22147 > 0)) {
        IF_SETTEXT(`Choose <col=FF00>${inttostring(varbitplayer_22147, 10)}</col> more free ${script4583(varbitplayer_22147, "prize", "prizes")}!`, 31785005);
    } else {
        IF_SETTEXT("", 31785005);
    };
    return;
}