//
function script9168(): string {
    if ((varbitplayer_18267 < DATE_RUNEDAY())) {
        return "You have taken part in <col=ffffff>0 of 3</col> events today";
    };
    if ((varbitplayer_18272 > 3)) {
        return "You have taken part in <col=ffffff>3 of 3</col> events today";
    };
    return `You have taken part in <col=ffffff>${inttostring(varbitplayer_18272, 10)} of 3</col> events today`;
}