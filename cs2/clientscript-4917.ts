//
function script4917(): void {
    if ((CLANPROFILE_FIND() == 1)) {
        stack(4918);
        stack("");
        stack(82509873);
        IF_SETONVARCLANTRANSMIT();
        stack(4918);
        stack("");
        stack(82640896);
        IF_SETONVARCLANTRANSMIT();
        varbitplayer_6675 = varbitclan_6661;
        varbitplayer_6676 = varbitclan_6662;
        script5974();
        script4991();
        script4900();
        script4905();
        script4907();
        script5012();
        script5975();
        script4864();
        script4994();
        script4889();
        script4853();
        script4913();
    } else {
        printmessage("Clan stronghold information not yet available.");
    };
    return;
}