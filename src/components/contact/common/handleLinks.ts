const coordinates = "-26.501939,-61.194183";

export const handleMapClick = () => {
  window.open(
    `https://www.google.com/maps/search/?api=1&query=${coordinates}`,
    "_blank"
  );
};

export const handleCall = () => {
  window.location.href = "tel:+543644660035";
};

export const handleEmail = () => {
  window.location.href = "mailto:pirela.construccion18@gmail.com";
};
export const handleInstagram = () => {
  window.open(
    "https://www.instagram.com/pirela.pisos_y_revestimientos/",
    "_blank"
  );
};

export const handleFacebook = () => {
  window.open(
    "https://www.facebook.com/profile.php?id=100064305900595&locale=es_LA",
    "_blank"
  );
};
