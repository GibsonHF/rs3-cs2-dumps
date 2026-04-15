//
function script6713(): void {
    if (((varclient_2016 + 3000) <= CLIENTCLOCK())) {
        varclient_2016 = CLIENTCLOCK();
        RESEND_UID_PASSPORT_REQUEST();
        IF_SETTEXT("Another email has been sent to your registered address. Please follow the link to authorise your current device.", comp(744, 342));
    } else {
        IF_SETTEXT("An email was sent to your registered address recently. Please wait a minute before trying to resend.", comp(744, 342));
    };
    return;
}