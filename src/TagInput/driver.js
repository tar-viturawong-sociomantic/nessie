export default class TagInputDriver
{
    constructor( wrapper )
    {
        this.wrapper = wrapper;
    }

    click()
    {
        this.wrapper.find( 'IconButton' ).first().simulate( 'click' );
        return this;
    }

    getHeight()
    {
        return this.wrapper.props().height;
    }

    setHeight( height )
    {
        const newValue = ( height == null ) ? '' : String( height );

        return this.wrapper.setProps( {
            height : newValue
        } );
    }

    mouseOut()
    {
        this.wrapper.simulate( 'mouseleave' );
        return this;
    }

    mouseOver()
    {
        this.wrapper.simulate( 'mouseenter' );
        return this;
    }
}
