type Image = {
    url: string;
};

const fetchImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images: unknown = await res.json();

    console.log("画像情報を取得しました", images);
    if (!isImageArray(images)) {
        throw new Error("取得したデータが正しくありません");
    }

    if (!images[0]) {
        throw new Error("取得したデータが空です");
    }
    return images[0];
}

// Image型であるかチェックする関数
const isImageArray = (value: unknown): value is Image[] => {
    // valueが配列であること
    if (!Array.isArray(value)) {
        return false;
    }
    // 配列の要素が全てImage型であること
    if (!value.every(isImage)) {
        return false;
    }
    return true;
}

const isImage = (value: unknown): value is Image => {
    // valueがオブジェクトであること
    if (typeof value !== "object" || value === null) {
        return false;
    }
    // valueにurlフィールドがあること
    if (!("url" in value)) {
        return false;
    }
    // urlフィールドが文字列であること
    if (typeof (value as Image).url !== "string") {
        return false;
    }
    return true;
}

export default fetchImage;
