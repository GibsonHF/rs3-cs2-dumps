//
function script15745(int0: component, string0: string): void {
    var int1 = SHOP_PURCHASEITEMSTATUS();
    switch (int1) {
        case 0: {
            break;
        }
        case -1:
        case 2: {
            script15746(int0);
            break;
        }
        case 1: {
            script15748(string0);
            script15746(int0);
            script15727(varclient_6892);
            script380(4019 as dbrow);
            break;
        }
    };
    return;
}