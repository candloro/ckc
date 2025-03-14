import { Keypair } from "@solana/web3.js";
import bs58 from "bs58"
import nacl from "tweetnacl";

async function main() {
    // 1. 生成一个 Solana Keypair（相当于 Phantom 钱包）
    // const keypair = Keypair.generate();
    const keypair = Keypair.fromSecretKey(bs58.decode("QNzY4vFio5umzAJHgYqXRfqJqxRhCFKer7vBCGxokY7WBqUB4J5HySrgdF8WrPAcsHjjsVoJ6etzZeP4ous7n5X"))
    console.log("Public Key:", keypair.publicKey.toBase58());
    console.log("Private Key:", bs58.encode(keypair.secretKey)); // 不要暴露这个！

    // 2. 使用时间戳作为 nonce
    const nonce = Date.now().toString();

    console.log("nonce:",nonce)
    // 3. 使用 Solana 私钥进行 Ed25519 签名
    const message = new TextEncoder().encode(nonce);
    const signature = nacl.sign.detached(message, keypair.secretKey);

    console.log("Signature:", bs58.encode(signature));

    console.log("nonce:", nonce);

    console.log("bs58.encode(message):",bs58.encode(message))
    // 4. 发送请求到后端
    const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            address: keypair.publicKey.toBase58(), // 钱包地址
            signature: bs58.encode(signature), // 转换为 Base58
            nonce: nonce, // 确保后端能够正确解析
        }),
    });

    const data = await response.json();
    console.log("JWT Token:", data);

    // 5. 解析 Token
    const payload = JSON.parse(Buffer.from(data.token.split(".")[1], "base64").toString());
    const exp = payload.exp * 1000; // exp 是 Unix 时间戳（秒），转换成毫秒
    console.log("exp:", exp);
}

main()







			fakeLogin() {
				async function main() {
					// 1. 生成一个 Solana Keypair（相当于 Phantom 钱包）
					// const keypair = Keypair.generate();
					const keypair = Keypair.fromSecretKey(bs58.decode(
						"QNzY4vFio5umzAJHgYqXRfqJqxRhCFKer7vBCGxokY7WBqUB4J5HySrgdF8WrPAcsHjjsVoJ6etzZeP4ous7n5X"
						))
					console.log("Public Key:", keypair.publicKey.toBase58());
					console.log("Private Key:", bs58.encode(keypair.secretKey)); // 不要暴露这个！

					// 2. 使用时间戳作为 nonce
					const nonce = Date.now().toString();

					console.log("nonce:", nonce)
					// 3. 使用 Solana 私钥进行 Ed25519 签名
					const message = new TextEncoder().encode(nonce);
					const signature = nacl.sign.detached(message, keypair.secretKey);

					console.log("Signature:", bs58.encode(signature));

					console.log("nonce:", nonce);

					console.log("bs58.encode(message):", bs58.encode(message))
					// 4. 发送请求到后端
					const response = await fetch("http://47.84.41.231:3000/auth/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							address: keypair.publicKey.toBase58(), // 钱包地址
							signature: bs58.encode(signature), // 转换为 Base58
							nonce: nonce, // 确保后端能够正确解析
						}),
					});

					const data = await response.json();
					console.log("JWT Token:", data);

					// 5. 解析 Token
					const payload = JSON.parse(Buffer.from(data.token.split(".")[1], "base64").toString());
					const exp = payload.exp * 1000; // exp 是 Unix 时间戳（秒），转换成毫秒
					console.log("exp:", exp);
				}

				main()

			},