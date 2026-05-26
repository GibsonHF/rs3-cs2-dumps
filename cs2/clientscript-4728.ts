//
function script4728(int0: number): void {
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
        script31(82641149, 82641150, 5666, 5663, 5664, 5665, 5686, 5685);
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