//[proc,clan_vote_enable]
function script4376(): void {
    IF_SETHIDE(true, comp(1101, 44));  // clan_voting:disable_yes
    IF_SETHIDE(true, comp(1101, 27));  // clan_voting:disable_no
    return;
}