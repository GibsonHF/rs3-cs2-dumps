//
function script15240(): void {
    switch (PLATFORMTYPE()) {
        case 0:
        case 5: {
            OPENURL_SHIM("billing_core", "purchasepopup.ws?externalName=rs", "packagegroupredirect.ws?value=rs", 1);
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