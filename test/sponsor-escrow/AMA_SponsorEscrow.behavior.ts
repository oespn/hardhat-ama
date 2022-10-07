import { expect } from "chai";

export function shouldBehaveLikeAMA_SponsorEscrow(): void {
  it("should create escrow", async function () {
    expect(await this.AMA_SponsorEscrow.nEscrow()).to.exist;

    //*** check we have a balance before sponsor contract created
    const createEscrowTx = await this.AMA_SponsorEscrow.connect(this.signers.alice).create("Test", 40, 1000);
    // wait until the transaction is mined
    //await createEscrowTx.wait();

    expect(await this.AMA_SponsorEscrow.connect(this.signers.admin).nEscrow()).to.equal(1);
  });
}
