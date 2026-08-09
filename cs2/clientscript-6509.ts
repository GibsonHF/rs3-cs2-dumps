//
function script6509(): number {
    if ((script13749() == 1)) {
        return SSO_AVAILABLE();
    };
    if ((PLATFORMTYPE() == 5)) {
        return SSO_AVAILABLE();
    } else if (((PLATFORMTYPE() == 0) && (varclient_6962 == -1))) {
        return SSO_AVAILABLE();
    };
    return 0;
}