//
function script15242(): void {
    switch (PLATFORMTYPE()) {
        case 0:
        case 5: {
            OPENURL_SHIM("billing_core", "popupredirect.ws?externalName=rsspins", "packagegroupredirect.ws?value=rsspins", 1);
            break;
        }
        case 3:
        case 2: {
            script4169(2);
            break;
        }
        default: {
            script15238(2);
            break;
        }
    };
    script10930();
    return;
}