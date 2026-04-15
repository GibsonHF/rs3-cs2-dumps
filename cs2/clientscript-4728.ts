//
function script4728(int0: int): void {
    if ((CLANPROFILE_FIND() == 1)) {
        script4896();
        switch (varbitclan_6661) {
            case 0:
            case 1:
            case 2:
            case 3: {
                script4897(varbitclan_6661);
                break;
            }
            default: {
                script4897(varbitclan_6524);
                break;
            }
        };
        script31(comp(1261, 253), comp(1261, 254), 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
        script4991();
        script4900();
        script4905();
        script5012();
        script4859();
        script4928();
        script4989(int0);
    } else {
        printmessage("Clan stronghold information not yet available.");
    };
    return;
}