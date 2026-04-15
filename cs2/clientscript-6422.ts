//
function script6422(int0: unknown_int): void {
    var string0 = "";
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            string0 = "You can not send co-op Slayer invitations when in a group or while having a pending group invite.";
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 85786627);
            int1 = 85786628;
            int2 = 85786629;
            if ((CC_FIND(int1, 9) == 1)) {
                string0 = CC_GETTEXT();
            } else {
                string0 = "Invite Player";
            };
            break;
        }
        case 2: {
            string0 = "You do not have any pending co-op Slayer invitations.";
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 85786630);
            int1 = 85786631;
            int2 = 85786632;
            string0 = "View Invitation";
            break;
        }
        case 3: {
            string0 = "You are not currently in a co-op Slayer group.";
            IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 85786633);
            int1 = 85786634;
            int2 = 85786635;
            string0 = "Leave Group";
            break;
        }
        default: {
            return;
        }
    };
    script13994(int1, int2, 28556 as struct, string0, true);
    return;
}