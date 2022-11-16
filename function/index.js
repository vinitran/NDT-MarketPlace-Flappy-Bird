import {
    getMarketContract,
    getSigner,
    toWei,
    fromWei
} from "~/function/contract";

const sell = async (id) => {
    const marketContract = await getMarketContract();
    try {
        const price = window.prompt("Price");
        await marketContract
            .connect(await getSigner())
            .sellBird(id, toWei(price));
        alert("Selling item successfully !");
    } catch (error) {
        alert(error);
    }
}

const cancelSell = async (id) => {
    const marketContract = await getMarketContract();
    try {
        await marketContract
            .connect(await getSigner())
            .cancelSellBird(id);
        alert("Cancel sell request completed");
    } catch (error) {
        alert(error);
    }
}

const purchase = async (id) => {
    const marketContract = await getMarketContract();
    try {
        await marketContract
            .connect(await getSigner())
            .purchaseBird(id);
        alert("Purchase request completed");
    } catch (error) {
        alert(error);
    }
}

const offer = async (id) => {
    const marketContract = await getMarketContract();
    try {
        const price = window.prompt("Your Offer:");
        await marketContract
            .connect(await getSigner())
            .offerBird(id, toWei(price));
        alert("offer request completed")
    } catch (error) {
        alert(error);
    }
}

const acceptOffer = async (id) => {
    const marketContract = await getMarketContract();
    try {
        await marketContract
            .connect(await getSigner())
            .acceptOfferBird(id);
        alert("accept request completed")
    } catch (error) {
        alert(error);
    }
}

const cancelOffer = async (id) => {
    const marketContract = await getMarketContract();
    try {
        await marketContract
            .connect(await getSigner())
            .cancelOfferBird(id);
        alert("cancel request completed");
    } catch (error) {
        alert(error);
    }
}
export {
    sell,
    cancelSell,
    purchase,
    offer,
    acceptOffer,
    cancelOffer
}