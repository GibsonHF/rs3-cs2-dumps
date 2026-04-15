//
function script12410(int0: obj): void {
    CC_SETOPBASE(`${script4033(int0)}${OC_NAME(int0)}`);
    switch (int0) {
        case 29492: {
            script2410("Withdraw", -1, "Redeem", -1, "Deposit", -1, "", -1, "", -1, item_getparam(int0, 5410), item_getparam(int0, 5411), item_getparam(int0, 5412), OC_NAME(int0), 1);
            break;
        }
        case 29494: {
            script2410("Redeem", -1, "Convert", -1, "Withdraw", -1, "Deposit", -1, "", -1, item_getparam(int0, 5410), item_getparam(int0, 5411), item_getparam(int0, 5412), OC_NAME(int0), 1);
            break;
        }
        case 60174: {
            script2410("Redeem", -1, "", -1, "", -1, "", -1, "", -1, item_getparam(int0, 5410), item_getparam(int0, 5411), item_getparam(int0, 5412), OC_NAME(int0), 1);
            break;
        }
        default: {
            stack(OC_IOP(int0, 1));
            OC_ICURSOR(int0, 1);
            stack(OC_IOP(int0, 2));
            OC_ICURSOR(int0, 2);
            stack("");
            stack(-1);
            stack(OC_IOP(int0, 4));
            OC_ICURSOR(int0, 4);
            stack(OC_IOP(int0, 5));
            OC_ICURSOR(int0, 5);
            stack(int0);
            stack(5410);
            item_getparam();
            stack(int0);
            stack(5411);
            item_getparam();
            stack(int0);
            stack(5412);
            item_getparam();
            script2410(stack(), OC_NAME(int0), 1);
            break;
        }
    };
    return;
}