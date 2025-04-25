const { createHmac } = await import("node:crypto");

const calculateHash = async () => {
    // Write your code here
    const secret = "abcdefg";
    try {
        const hash = createHmac("sha256", secret)
            .update("I love cupcakes")
            .digest("hex");
        console.log(hash);
    } catch (error) {
        throw error;
    }
};

await calculateHash();
