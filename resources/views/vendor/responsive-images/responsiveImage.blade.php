<picture>
    @foreach (($sources ?? []) as $source)
        @isset($source['srcSetWebp'])
            <source
                type="image/webp"
                @isset($source['media']) media="{{ $source['media'] }}" @endisset
                srcset="{{ $source['srcSetWebp'] }}"
                @if($includePlaceholder ?? false) sizes="1px" @endif
            >
        @endisset

        <source
            @isset($source['media']) media="{{ $source['media'] }}" @endisset
            srcset="{{ $source['srcSet'] }}"
            @if($includePlaceholder ?? false) sizes="1px" @endif
        >
    @endforeach

    <img
        {!! $attributeString ?? '' !!}
        src="{{ $src }}"
        @isset($width) width="{{ $width }}" @endisset
        @isset($height) height="{{ $height }}" @endisset
        @isset($sources)
        onload="
            this.onload=null;
            const rectWidth = this.getBoundingClientRect().width
            const imgWidth = rectWidth < 10 ? 750 : rectWidth;
            this.parentNode.querySelectorAll('source')
                .forEach(function (source) {
                    source.sizes=Math.ceil(imgWidth/window.innerWidth*100)+'vw';
                });
        "
        @endisset
    >
</picture>
