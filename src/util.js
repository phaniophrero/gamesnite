// Media Resize
export const smallImage = (imagePath, size) => {
  // Iti da eroare la jocuri negasiste daca nu adaugi conditia asta
  if (!imagePath) return null;
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("/media/games/", `/media/resize/${size}/-/games/`);
  return image;
};
