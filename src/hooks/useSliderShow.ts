import { isMobileOrDesktop } from "@/utils/isMobileOrDesktop";

export const useSliderShow = () => {
    
    const widhSlider = isMobileOrDesktop() ? 355 : 1200;

    const sliderLeft = () => {
        let slider = document.getElementById('slider') as HTMLDivElement;
        slider.scrollLeft = slider.scrollLeft -= widhSlider;
    }

    const sliderRight = () => {
        let slider = document.getElementById('slider') as HTMLDivElement;
        slider.scrollLeft = slider.scrollLeft += widhSlider;
    }
    return {
        sliderLeft,
        sliderRight,
    }

}
