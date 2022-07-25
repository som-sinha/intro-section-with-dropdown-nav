function img_switcheroo(image, original, new_source) {
    if (image.src === original) {
        image.src = new_source;
    }
    else {
        image.src = orginal;
    }
}