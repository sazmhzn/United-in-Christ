import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import "../../css/embla.css";

const OPTIONS = { align: "start", loop: true };

const emblaNode = document.querySelector(".embla");
const viewportNode = emblaNode.querySelector(".embla__viewport");

const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Autoplay()]);
