//
function script15241(): void {
    switch (PLATFORMTYPE()) {
        case 0:
        case 5: {
            OPENURL_SHIM("billing_core", "purchasepopup.ws?externalName=rs", "packagegroupredirect.ws?value=rs", 1);
            varclient_1795 = CLIENTCLOCK();
            IF_SETONTIMER(callback(script6032, 0), comp(906, 16));
            break;
        }
        case 3:
        case 2: {
            script4169(3);
            break;
        }
        default: {
            script15238(3);
            break;
        }
    };
    return;
}