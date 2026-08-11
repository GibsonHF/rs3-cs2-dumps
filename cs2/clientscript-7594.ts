//
function script7594(): void {
    if ((varbitplayer_34031 == 1)) {
        IF_SETTEXT("Currency x2 Active.", comp(1802, 90));  // timed_event:event17_tokens_purchase
    } else {
        IF_SETTEXT(`+${inttostring(varbitplayer_45702, 10)} tokens with purchase.`, comp(1802, 90));  // timed_event:event17_tokens_purchase
    };
    return;
}