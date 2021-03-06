export default class ComboBoxDriver
{
    constructor( wrapper )
    {
        this.wrapper = wrapper;
    }

    blur()
    {
        this.wrapper.find( 'InputField' ).driver().blur();
        return this;
    }

    changeInput()
    {
        this.wrapper.find( 'InputField' ).driver().pressKey( 'c' );
        return this;
    }

    clickInput()
    {
        this.wrapper.find( 'InputField' ).driver().click();
        return this;
    }

    clickOption( index = 0 )
    {
        this.wrapper.find( 'ListBox' ).driver().clickOption( index );
        return this;
    }

    focus()
    {
        this.wrapper.find( 'InputField' ).driver().focus();
        return this;
    }

    keyPress( string )
    {
        this.wrapper.find( 'InputField' ).driver().pressKey( string );
        return this;
    }

    mouseOut()
    {
        this.wrapper.simulate( 'mouseleave' );
        return this;
    }

    mouseOutOption( index = 0 )
    {
        this.wrapper.find( 'ListBox' ).driver().mouseOutOption( index );
        return this;
    }

    mouseOver()
    {
        this.wrapper.simulate( 'mouseenter' );
        return this;
    }

    mouseOverOption( index = 0 )
    {
        this.wrapper.find( 'ListBox' ).driver().mouseOverOption( index );
        return this;
    }

    scroll( offset )
    {
        this.wrapper.find( 'ScrollBox' ).driver().scrollVertical( offset );
        return this;
    }
}
