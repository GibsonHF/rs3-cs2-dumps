//
function script18879(string0: string): void {
    script8311(15);
    if ((CLAN_GETCHATCOUNT() > 0)) {
        script1296("You are already in a Friends Chat. Leave your current chat to join this one.");
        return;
    };
    if ((script18850(1) == 1)) {
        if ((script6431() == 1)) {
            script13463("Attempting to join Friends Chat...");
        };
        script18928(1, 1, string0);
    };
    return;
}