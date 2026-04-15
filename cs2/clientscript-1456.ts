//
function script1456(int0: int): void {
    script3097();
    switch (int0) {
        case 0: {
            MES_TYPED(99, 0, "Pending Transaction Debug: No transactions found state, login would move onto checking credit card expiry.");
            break;
        }
        case 1: {
            MES_TYPED(99, 0, "Pending Transaction Debug: Apply state. Calling popup");
            script3093(10005, 4040 as dbrow, "Pending Transaction", "Pending transactions found!<br><br>Do you wish to apply them now?", 2608, "Yes", "No");
            break;
        }
        case 2: {
            MES_TYPED(99, 0, "Pending Transaction Debug: Applying in progress state. Calling popup");
            script3093(10006, 4035 as dbrow, "Pending Transaction", "Attempting to apply transactions", 18963, "", "Cancel");
            break;
        }
        case 3: {
            MES_TYPED(99, 0, "Pending Transaction Debug: Failed state. Calling popup");
            script3093(10007, 4037 as dbrow, "Pending Transaction", "Pending transaction failed to apply.<br><br>Do you wish to try again?", 2610, "Yes", "No");
            break;
        }
        case 4: {
            MES_TYPED(99, 0, "Pending Transaction Debug: Success state. Calling popup");
            script3093(10007, 4043 as dbrow, "Pending Transaction", "Transactions applied!", 2607, "", "OK");
            break;
        }
        default: {
            MES_TYPED(99, 0, `Pending Transaction Debug: Invalid state ${inttostring(int0, 10)}. Use ^lobby_pendingtransaction_none_found = 0, ^lobby_pendingtransaction_need_apply = 1, ^lobby_pendingtransaction_applying = 2, ^lobby_pendingtransaction_failed = 3, ^lobby_pendingtransaction_success = 4`);
            break;
        }
    };
    return;
}