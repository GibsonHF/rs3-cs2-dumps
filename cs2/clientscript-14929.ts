//
function script14929(): string {
    var string0 = "";
    if ((varbitplayer_35817 == 0)) {
        string0 = "You can still complete the <col=ffffff>bronze</col> challenge this week.<br>";
    };
    if ((varbitplayer_35818 == 0)) {
        string0 = `${string0}You can still complete the <col=ffffff>silver</col> challenge this week.<br>`;
    };
    if ((varbitplayer_35819 == 0)) {
        string0 = `${string0}You can still complete the <col=ffffff>gold</col> challenge this week.`;
    };
    if ((STRING_LENGTH(string0) == 0)) {
        string0 = "You have completed all of the Shattered Worlds challenges this week.";
    };
    return string0;
}