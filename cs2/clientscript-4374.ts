//[proc,clan_vote_disable]
function script4374(): void {
    IF_SETHIDE(false, comp(1101, 44));  // clan_voting:disable_yes
    IF_SETHIDE(false, comp(1101, 27));  // clan_voting:disable_no
    return;
}