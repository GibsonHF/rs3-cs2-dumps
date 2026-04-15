//
function script16241(): void {
    if ((varbitplayer_22147 > 0)) {
        IF_SETTEXT(`Choose <col=FF00>${inttostring(varbitplayer_22147, 10)}</col> more free ${script4583(varbitplayer_22147, "prize", "prizes")}!`, comp(485, 45));
    } else {
        IF_SETTEXT("", comp(485, 45));
    };
    return;
}