import ImageKit from "imagekit";

export function getServerImageKit() {
  return new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT,
  });
}

export function removeBackgroud(imageUrl) {
  if (!imageUrl) return null;

  if (imageUrl.includes("?")) {
    return `${imageUrl}&tr=e-bgremove:e-dropshadow`;
  }

  return `${imageUrl}?tr=e-bgremove:e-dropshadow`;
}
