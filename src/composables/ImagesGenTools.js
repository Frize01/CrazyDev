const GenerationURL = (img) => {
    return new URL(img, import.meta.url).href;
}


export { GenerationURL };