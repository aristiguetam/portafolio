
export const useSliderShow = () => {

    const isMobileDevice = () => {
        return /Mobi/i.test(navigator.userAgent);
    }

    const widhSlider = isMobileDevice() ? 355 : 1200;
    const sliderLeft = () => {
        let slider = document.getElementById('slider') as HTMLDivElement;
        slider.scrollLeft = slider.scrollLeft - widhSlider;
    }

    const sliderRight = () => {
        let slider = document.getElementById('slider') as HTMLDivElement;
        slider.scrollLeft = slider.scrollLeft + widhSlider;
    }
    return {
        sliderLeft,
        sliderRight,
    }

}
