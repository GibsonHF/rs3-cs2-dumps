//
function script13783(): string {
    if ((varbitplayer_28796 == 10)) {
        return "You have already handed enough supplies for today.";
    };
    return `You can still hand in another ${inttostring((10 - varbitplayer_28796), 10)} ${script4583((10 - varbitplayer_28796), "resource", "resources")} today.`;
}