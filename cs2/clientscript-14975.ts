//
function script14975(string0: string): string {
    script20967();
    if (BRANCH_EQUALS(1)) {
        var string0 = `${string0}<br><br>Energy available: <col=ffffff>Unlimited</col>`;
    } else {
        string0 = `${string0}<br><br>Energy available: <col=ffffff>${TOSTRING_LOCALISED(script14971(), 1)}</col>`;
    };
    if ((varbitplayer_47450 > 0)) {
        string0 = `${string0}<br>Current fixation: <col=ffffff>${script14973(script14685(varbitplayer_47450))}</col>`;
    };
    return string0;
}